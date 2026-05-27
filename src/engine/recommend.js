import { FULL_CATALOG } from "../data/cardCatalog";

export function getRecommendations(formData, mode) {
  const { monthlySpend = 150000, sectors = [], rewardPref = "Cashback", creditScore = "Not Sure" } = formData;
  const annualSpend = monthlySpend * 12;

  // PASS 1: FILTER (Hard Constraints)
  let eligibleCards = FULL_CATALOG.filter(c => c.mode === "both" || c.mode === mode);

  // CIBIL Tier logic based on PDF specs
  let userTier = "mid"; // default assumption if "Not Sure"
  if (creditScore.includes("<650") || creditScore.includes("Building Credit")) {
    userTier = "secured";
  } else if (creditScore.includes("650") && creditScore.includes("700")) {
    userTier = "entry";
  } else if (creditScore.includes("750+")) {
    userTier = "premium";
  }

  // Filter based on tier
  if (userTier === "secured") {
    // If secured, only show secured cards
    eligibleCards = eligibleCards.filter(c => c.category === "secured");
  } else {
    // Hide secured cards from non-secured users (unless they have no other options)
    const unsecured = eligibleCards.filter(c => c.category !== "secured");
    if (unsecured.length > 0) eligibleCards = unsecured;
    
    // Income constraint (proxy using monthly spend)
    if (monthlySpend < 25000) {
      eligibleCards = eligibleCards.filter(c => c.cibilTier !== "premium");
    }
    // High spenders get premium options added if they have good/excellent score
    if (monthlySpend >= 100000 && (userTier === "premium" || userTier === "mid")) {
      // Premium cards remain eligible
    } else {
       // Filter out super premium if income/spend is too low
       eligibleCards = eligibleCards.filter(c => c.cibilTier !== "premium" || monthlySpend >= 60000);
    }
  }

  // PASS 2: SCORE (Soft Matching)
  let scoredCards = eligibleCards.map(card => {
    let score = 0;

    // Sector Match (max 40 pts) - 20 pts per matched sector
    sectors.forEach(sector => {
      if (card.tags.includes(sector)) score += 20;
    });

    // Reward Preference Match (max 30 pts)
    if (rewardPref === "Cashback" && card.category === "cashback") score += 30;
    if ((rewardPref === "Air Miles" || rewardPref === "Travel Miles") && card.category === "travel") score += 30;
    if (rewardPref === "Lounge Access" && card.loungeAccess && (card.loungeAccess.domestic > 4 || card.loungeAccess.international > 0)) score += 30;
    if (rewardPref === "No Annual Fee" && card.fee.toLowerCase().includes("free")) score += 30;
    if (rewardPref === "Dining Offers" && card.tags.includes("Dining")) score += 20;
    if (rewardPref === "Business Perks" && card.tags.includes("Business Perks")) score += 30;

    // Spend-to-Fee Ratio (max 15 pts) - Can they easily hit the fee waiver?
    if (card.feeWaiverSpend > 0 && annualSpend >= card.feeWaiverSpend) {
      score += 15;
    } else if (card.fee === "Lifetime Free") {
      score += 15;
    }

    // Lounge Bonus (max 15 pts) - If they spend > 50k/3mo (approx 16.6k/mo), they qualify for new lounge rules
    if (monthlySpend > 20000 && card.loungeAccess && card.loungeAccess.domestic > 0) {
      score += 15;
    }

    return { ...card, score };
  });

  // PASS 3: RANK & TAG
  // Sort descending by score. Break ties by lowest fee waiver requirement.
  scoredCards.sort((a, b) => b.score - a.score || a.feeWaiverSpend - b.feeWaiverSpend);
  
  // Take top 3
  const topCards = scoredCards.slice(0, 3);

  // Assign tags and approval odds
  const finalCards = topCards.map((card, index) => {
    let tag = "";
    if (index === 0) tag = "TOP PICK";
    else if (index === 1 && card.fee.toLowerCase().includes("free")) tag = "BEST VALUE";
    else if (index === 1) tag = "RUNNER UP";
    else tag = "SOLID CHOICE";

    let approval = "Good";
    let approvalColor = "#f59e0b";

    if (userTier === "secured") {
      approval = "Guaranteed";
      approvalColor = "#3b82f6";
    } else if (userTier === "premium") {
      approval = "Excellent";
      approvalColor = "#22c55e";
    } else if (userTier === "mid") {
      approval = "Very Good";
      approvalColor = "#10b981";
    }

    return { ...card, tag, approval, approvalColor };
  });

  // Fallback if we somehow got 0 cards
  if (finalCards.length === 0) {
     return FULL_CATALOG.filter(c => c.category === "secured").map(c => ({...c, tag: "GUARANTEED", approval: "Guaranteed", approvalColor: "#3b82f6"}));
  }

  return finalCards;
}
