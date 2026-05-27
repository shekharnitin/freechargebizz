// ─── Real Axis Bank Card Catalog ──────────────────────────────────────────────

export const FULL_CATALOG = [
  // 1. CASHBACK / ENTRY LEVEL
  {
    id: "ace",
    name: "Axis Bank ACE",
    category: "cashback",
    mode: "personal",
    gradient: ["#a83900", "#ff6d2e"], // Orange
    fee: "₹499", feeOld: null, feeWaiverSpend: 200000,
    incomeMin: 20000, cibilTier: "entry",
    interest: "3.6% p.m.",
    rewards: { type: "Cashback" },
    loungeAccess: { domestic: 4, spendRule: 50000 },
    benefits: [
      "5% cashback on utilities & recharges via Google Pay",
      "4% cashback on Swiggy, Zomato & Ola",
      "1.5% uncapped cashback on all other spends",
      "4 complimentary domestic lounge visits per year"
    ],
    tags: ["Utilities & Bills", "Food & Dining", "Cashback"],
    bestFor: "High utility spenders & Google Pay users"
  },
  {
    id: "fibe",
    name: "Fibe Axis Bank",
    category: "cashback",
    mode: "both",
    gradient: ["#3e5e95", "#7c9bd6"], // Blue
    fee: "Lifetime Free", feeOld: "₹499", feeWaiverSpend: 0,
    incomeMin: 15000, cibilTier: "entry",
    interest: "3.6% p.m.",
    rewards: { type: "Cashback" },
    loungeAccess: { domestic: 4, spendRule: 50000 },
    benefits: [
      "Lifetime Free card with zero annual fees",
      "3% flat cashback on all online food delivery and ride hailing apps",
      "Numberless card for enhanced security",
      "UPI enabled RuPay variant available"
    ],
    tags: ["Dining", "Food & Dining", "Travel", "No Annual Fee", "Cashback"],
    bestFor: "Budget-conscious online spenders"
  },
  {
    id: "airtel",
    name: "Airtel Axis Bank",
    category: "cashback",
    mode: "personal",
    gradient: ["#ff0000", "#ff6d2e"], // Red
    fee: "₹500", feeOld: null, feeWaiverSpend: 200000,
    incomeMin: 20000, cibilTier: "entry",
    interest: "3.6% p.m.",
    rewards: { type: "Cashback" },
    loungeAccess: { domestic: 4, spendRule: 50000 },
    benefits: [
      "25% cashback on Airtel Mobile, Broadband & DTH recharges",
      "10% cashback on utility bills via Airtel Thanks App",
      "10% cashback on Swiggy, Zomato & BigBasket",
      "4 complimentary domestic lounge visits per year"
    ],
    tags: ["Utilities & Bills", "Groceries", "Food & Dining", "Dining", "Cashback"],
    bestFor: "Airtel network users & home utilities"
  },
  {
    id: "cashback",
    name: "Axis Bank Cashback",
    category: "cashback",
    mode: "personal",
    gradient: ["#111214", "#44474a"], // Black/Dark
    fee: "₹500", feeOld: null, feeWaiverSpend: 200000,
    incomeMin: 25000, cibilTier: "mid",
    interest: "3.6% p.m.",
    rewards: { type: "Cashback" },
    loungeAccess: { domestic: 4, spendRule: 50000 },
    benefits: [
      "5% flat cashback on all online spends (capped at ₹1000/month)",
      "1% cashback on offline spends",
      "20% off at partner restaurants via EazyDiner",
      "1% fuel surcharge waiver"
    ],
    tags: ["Online Shopping", "Shopping", "Cashback"],
    bestFor: "Heavy online shoppers"
  },

  // 2. TRAVEL / PREMIUM
  {
    id: "atlas",
    name: "Axis Bank Atlas",
    category: "travel",
    mode: "both",
    gradient: ["#b02848", "#fe637f"], // Burgundy
    fee: "₹5,000", feeOld: null, feeWaiverSpend: 9999999, // No waiver typically
    incomeMin: 60000, cibilTier: "premium",
    interest: "3.4% p.m.",
    rewards: { type: "Air Miles" },
    loungeAccess: { domestic: 8, international: 4, spendRule: 50000 },
    benefits: [
      "5 EDGE Miles per ₹100 spent on Travel",
      "2 EDGE Miles per ₹100 on other spends",
      "Tiered milestone benefits up to 10,000 bonus EDGE Miles",
      "International and Domestic Lounge Access"
    ],
    tags: ["Travel", "Air Miles", "Lounge Access", "Business Perks"],
    bestFor: "Frequent flyers & global travelers"
  },
  {
    id: "horizon",
    name: "Axis Bank Horizon",
    category: "travel",
    mode: "both",
    gradient: ["#0a2f4c", "#3e5e95"], // Deep Blue
    fee: "₹3,000", feeOld: null, feeWaiverSpend: 9999999,
    incomeMin: 50000, cibilTier: "mid",
    interest: "3.4% p.m.",
    rewards: { type: "Air Miles" },
    loungeAccess: { domestic: 8, international: 2, spendRule: 50000 },
    benefits: [
      "Welcome benefit of 5,000 EDGE Miles",
      "3 EDGE Miles per ₹100 spent on airlines and hotels",
      "Zero forex markup on international spends",
      "2 complimentary international lounge visits"
    ],
    tags: ["Travel", "Air Miles", "Lounge Access"],
    bestFor: "Mid-tier frequent flyers"
  },
  {
    id: "magnus",
    name: "Axis Bank Magnus",
    category: "premium",
    mode: "business",
    gradient: ["#1c1c1c", "#b02848"], // Black/Burgundy
    fee: "₹12,500", feeOld: null, feeWaiverSpend: 2500000,
    incomeMin: 150000, cibilTier: "premium",
    interest: "3.0% p.m.",
    rewards: { type: "Travel Miles" },
    loungeAccess: { domestic: 99, international: 8, spendRule: 50000 },
    benefits: [
      "Unlimited domestic lounge access",
      "8 complimentary international lounge visits with Priority Pass",
      "24x7 global concierge services",
      "Lower mark-up fee of 2% on foreign currency transactions"
    ],
    tags: ["Travel", "Lounge Access", "Business Perks", "Dining Offers"],
    bestFor: "High net worth business owners"
  },

  // 3. LIFESTYLE / SPECIALTY
  {
    id: "select",
    name: "Axis Bank Select",
    category: "lifestyle",
    mode: "both",
    gradient: ["#3d3d3d", "#7a7a7a"], // Silver/Grey
    fee: "₹3,000", feeOld: null, feeWaiverSpend: 800000,
    incomeMin: 75000, cibilTier: "mid",
    interest: "3.4% p.m.",
    rewards: { type: "Dining Offers" },
    loungeAccess: { domestic: 6, international: 0, spendRule: 50000 },
    benefits: [
      "Complimentary Amazon Prime membership",
      "20% off on BigBasket & 40% off on Swiggy",
      "Buy 1 Get 1 free on BookMyShow (up to ₹300)",
      "10 EDGE Reward Points per ₹200 spent"
    ],
    tags: ["Groceries", "Dining", "Entertainment", "Shopping"],
    bestFor: "Premium lifestyle and family spending"
  },
  {
    id: "privilege",
    name: "Axis Bank Privilege",
    category: "lifestyle",
    mode: "both",
    gradient: ["#8d7167", "#e1bfb3"], // Gold/Rose
    fee: "₹1,500", feeOld: null, feeWaiverSpend: 250000,
    incomeMin: 40000, cibilTier: "entry",
    interest: "3.4% p.m.",
    rewards: { type: "Travel Miles" },
    loungeAccess: { domestic: 2, international: 0, spendRule: 50000 },
    benefits: [
      "Welcome benefit of 12,500 EDGE Reward Points",
      "Double points on domestic dining & apparel",
      "Convert points to partner miles",
      "Fuel surcharge waiver up to ₹400/month"
    ],
    tags: ["Dining", "Food & Dining", "Online Shopping"],
    bestFor: "Active lifestyle spenders"
  },
  {
    id: "indianoil_premium",
    name: "IndianOil Axis Premium",
    category: "fuel",
    mode: "both",
    gradient: ["#a83900", "#ffd600"], // Orange/Yellow
    fee: "₹1,000", feeOld: null, feeWaiverSpend: 300000,
    incomeMin: 30000, cibilTier: "entry",
    interest: "3.6% p.m.",
    rewards: { type: "Cashback" },
    loungeAccess: { domestic: 4, spendRule: 50000 },
    benefits: [
      "4% Value Back on fuel at IOCL pumps",
      "1% Value Back on online shopping",
      "10% discount on BookMyShow",
      "Waiver of 1% fuel surcharge"
    ],
    tags: ["Fuel", "Online Shopping", "Shopping"],
    bestFor: "High fuel spenders and commuters"
  },
  {
    id: "supermoney",
    name: "SUPERMONEY RuPay",
    category: "upi",
    mode: "personal",
    gradient: ["#16a34a", "#22c55e"], // Green
    fee: "Lifetime Free", feeOld: "₹500", feeWaiverSpend: 0,
    incomeMin: 15000, cibilTier: "entry",
    interest: "3.6% p.m.",
    rewards: { type: "Cashback" },
    loungeAccess: { domestic: 0, spendRule: 0 },
    benefits: [
      "Lifetime Free RuPay Credit Card",
      "Up to 3% cashback on merchant QR scans via super.money app",
      "Direct UPI linking for seamless payments",
      "Instant virtual card issuance"
    ],
    tags: ["UPI Payments", "Cashback", "No Annual Fee"],
    bestFor: "High volume UPI QR users"
  },

  // 4. SECURED / BUILDING CREDIT
  {
    id: "my_zone_easy",
    name: "My Zone Easy",
    category: "secured",
    mode: "both",
    gradient: ["#3b82f6", "#60a5fa"], // Light Blue
    fee: "₹500", feeOld: null, feeWaiverSpend: 0,
    incomeMin: 0, cibilTier: "secured", // specific tier
    interest: "3.6% p.m.",
    rewards: { type: "Dining Offers" },
    loungeAccess: { domestic: 1, spendRule: 50000 },
    benefits: [
      "Secured credit card against Fixed Deposit (Min ₹15,000)",
      "Guaranteed approval with no credit score check",
      "Buy 1 Get 1 free on movies (Paytm Movies)",
      "15% off at partner restaurants"
    ],
    tags: ["Entertainment", "Dining", "Food & Dining"],
    bestFor: "New-to-credit or building credit history"
  }
];

// Provide placeholders for fallback if engine is bypassed
export const BUSINESS_CARDS = FULL_CATALOG.filter(c => c.mode === "both" || c.mode === "business").slice(0, 3);
export const PERSONAL_CARDS = FULL_CATALOG.filter(c => c.mode === "both" || c.mode === "personal").slice(0, 3);
