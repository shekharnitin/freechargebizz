import { FULL_CATALOG } from "../data/cardCatalog";

function calculateNetValue(card, annualSpend, sectors) {
  let fee = 0;
  if (!card.fee.toLowerCase().includes("free")) {
    fee = parseInt(card.fee.replace(/\D/g, "")) || 0;
  }
  if (card.feeWaiverSpend > 0 && annualSpend >= card.feeWaiverSpend) {
    fee = 0;
  }
  
  let estimatedRewardRate = 0.015; // 1.5% base
  if (sectors.length > 0 && card.tags.includes(sectors[0])) {
    estimatedRewardRate = 0.04; // 4% if primary sector matches
  } else if (sectors.some(s => card.tags.includes(s))) {
    estimatedRewardRate = 0.025; // 2.5% if secondary sector matches
  }
  
  if (card.category === "cashback") estimatedRewardRate += 0.01;
  
  return Math.round((annualSpend * estimatedRewardRate) - fee);
}

export function getRecommendations(formData, mode) {
  const { monthlySpend = 150000, sectors = [], rewardPref = "Cashback", creditScore = "Not Sure" } = formData;
  const annualSpend = monthlySpend * 12;

  // CIBIL Tier logic based on PDF specs
  let userTier = "mid"; // default assumption if "Not Sure"
  if (creditScore.includes("<650") || creditScore.includes("Building Credit")) {
    userTier = "secured";
  } else if (creditScore.includes("650") && creditScore.includes("700")) {
    userTier = "entry";
  } else if (creditScore.includes("750+")) {
    userTier = "premium";
  }

  // PASS 1: SCORE & SOFT FILTER
  let eligibleCards = FULL_CATALOG.filter(c => c.mode === "both" || c.mode === mode);
  
  let scoredCards = eligibleCards.map(card => {
    let score = 0;
    
    // 1. Soft CIBIL Filtering (Penalties)
    let approvalOdds = "Very Good";
    let approvalColor = "#10b981"; // green
    
    if (userTier === "secured") {
      if (card.category === "secured") {
        score += 150; // Heavily boost secured
        approvalOdds = "Guaranteed";
        approvalColor = "#3b82f6"; // blue
      } else {
        score -= 200; // Penalize unsecured heavily
        approvalOdds = "Low";
        approvalColor = "#ef4444"; // red
      }
    } else if (userTier === "entry") {
      if (card.cibilTier === "premium") {
        score -= 100;
        approvalOdds = "Low";
        approvalColor = "#ef4444";
      } else if (card.cibilTier === "mid") {
        score -= 30;
        approvalOdds = "Fair";
        approvalColor = "#f59e0b"; // yellow
      }
    } else if (userTier === "mid") {
      if (card.cibilTier === "premium" && monthlySpend < 100000) {
        score -= 50;
        approvalOdds = "Fair";
        approvalColor = "#f59e0b";
      }
    } else if (userTier === "premium") {
      approvalOdds = "Excellent";
      approvalColor = "#22c55e";
      if (card.cibilTier === "premium" && monthlySpend >= 100000) {
        score += 30;
      }
    }

    // 2. Weighted Multi-Factor Scoring
    if (sectors.length > 0) {
      // Primary Sector (3x multiplier = 60 pts)
      if (card.tags.includes(sectors[0])) score += 60;
      // Secondary Sectors (20 pts each)
      for (let i = 1; i < sectors.length; i++) {
        if (card.tags.includes(sectors[i])) score += 20;
      }
    }

    // 3. Reward Pref Match
    if (rewardPref === "Cashback" && card.category === "cashback") score += 30;
    if ((rewardPref === "Air Miles" || rewardPref === "Travel Miles") && card.category === "travel") score += 30;
    if (rewardPref === "Lounge Access" && card.loungeAccess && card.loungeAccess.domestic > 4) score += 30;
    if (rewardPref === "No Annual Fee" && card.fee.toLowerCase().includes("free")) score += 30;
    if (rewardPref === "Dining Offers" && card.tags.includes("Dining")) score += 20;
    if (rewardPref === "Business Perks" && card.tags.includes("Business Perks")) score += 30;

    // 4. Net Value Calculation
    const netValue = calculateNetValue(card, annualSpend, sectors);
    score += (netValue / 1000); // 1 point per ₹1000 of net value
    
    // Fee Waiver tag flag
    if (card.feeWaiverSpend > 0 && annualSpend >= card.feeWaiverSpend) {
      score += 20;
    }

    return { ...card, score, netValue, approvalOdds, approvalColor };
  });

  // PASS 2: RANK & DIVERSITY
  scoredCards.sort((a, b) => b.score - a.score);
  
  let topCards = [];
  const usedCategories = new Set();
  
  for (const card of scoredCards) {
    if (topCards.length === 0) {
      topCards.push(card);
      usedCategories.add(card.category);
    } else if (topCards.length === 1) {
      topCards.push(card);
      usedCategories.add(card.category);
    } else if (topCards.length === 2) {
      // Diversity Constraint: Don't allow 3 cards of the EXACT same category 
      // unless user only selected 1 sector
      if (usedCategories.has(card.category) && usedCategories.size === 1 && sectors.length > 1) {
        continue; // Skip to find a different category
      }
      topCards.push(card);
      break;
    }
  }

  // Fallback if diversity filtering left us with < 3 cards
  if (topCards.length < 3) topCards = scoredCards.slice(0, 3);

  // PASS 3: ASSIGN TAGS (Keeping Best Value as requested)
  return topCards.map((card, index) => {
    let tag = "";
    if (index === 0) tag = "TOP PICK";
    else if (index === 1 && card.fee.toLowerCase().includes("free")) tag = "BEST VALUE";
    else if (index === 1) tag = "BEST VALUE"; // User requested to keep this tag
    else tag = "SOLID CHOICE";

    return { ...card, tag, approval: card.approvalOdds, approvalColor: card.approvalColor };
  });
}
