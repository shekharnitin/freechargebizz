// ─── Real Axis Bank Card Catalog ──────────────────────────────────────────────

export const FULL_CATALOG = [
  // 1. CASHBACK / ENTRY LEVEL
  {
    id: "ace",
    name: "Axis Bank ACE",
    category: "cashback",
    mode: "personal",
    gradient: ["#a83900", "#ff6d2e"],
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
    gradient: ["#3e5e95", "#7c9bd6"],
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
    gradient: ["#ff0000", "#ff6d2e"],
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
    gradient: ["#111214", "#44474a"],
    fee: "₹500", feeOld: null, feeWaiverSpend: 400000,
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
    gradient: ["#b02848", "#fe637f"],
    fee: "₹5,000", feeOld: null, feeWaiverSpend: 9999999,
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
    gradient: ["#0a2f4c", "#3e5e95"],
    fee: "₹3,000", feeOld: null, feeWaiverSpend: 350000,
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
    gradient: ["#1c1c1c", "#b02848"],
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
  {
    id: "primus",
    name: "Axis Bank Primus",
    category: "premium",
    mode: "both",
    gradient: ["#2d2d2d", "#434343"],
    fee: "₹3,00,000", feeOld: null, feeWaiverSpend: 9999999,
    incomeMin: 1000000, cibilTier: "premium",
    interest: "3.0% p.m.",
    rewards: { type: "Air Miles" },
    loungeAccess: { domestic: 99, international: 99, spendRule: 0 },
    benefits: [
      "1 EDGE Mile per ₹100 spent (no exclusions)",
      "Unlimited domestic and international lounge visits",
      "Bloomberg subscription & unlimited golf rounds",
      "Zero forex markup"
    ],
    tags: ["Travel", "Lounge Access", "Business Perks"],
    bestFor: "Ultra-HNIs and Private Banking clients"
  },
  {
    id: "burgundy_private",
    name: "Burgundy Private",
    category: "premium",
    mode: "both",
    gradient: ["#60001a", "#9a002a"],
    fee: "Nil", feeOld: null, feeWaiverSpend: 0,
    incomeMin: 500000, cibilTier: "premium",
    interest: "3.0% p.m.",
    rewards: { type: "Reward Points" },
    loungeAccess: { domestic: 99, international: 99, spendRule: 0 },
    benefits: [
      "15 EDGE Reward points per ₹200 spent",
      "Unlimited domestic and international lounge visits",
      "Zero foreign exchange markup",
      "Zero cash withdrawal and finance interest charges"
    ],
    tags: ["Travel", "Lounge Access", "Business Perks"],
    bestFor: "Burgundy Private relationship clients"
  },
  {
    id: "reserve",
    name: "Axis Bank Reserve",
    category: "premium",
    mode: "both",
    gradient: ["#111111", "#222222"],
    fee: "₹50,000", feeOld: null, feeWaiverSpend: 3500000,
    incomeMin: 250000, cibilTier: "premium",
    interest: "3.0% p.m.",
    rewards: { type: "Reward Points" },
    loungeAccess: { domestic: 99, international: 99, spendRule: 0 },
    benefits: [
      "15 EDGE Reward points per ₹200 spent",
      "Unlimited lounge visits (Priority Pass) + 12 free guest visits",
      "Low forex markup fee of 1.5%",
      "Airport concierge services (8 VIP assistance visits)"
    ],
    tags: ["Travel", "Lounge Access", "Business Perks"],
    bestFor: "Ultra-HNIs and multi-million spenders"
  },
  {
    id: "olympus",
    name: "Axis Bank Olympus",
    category: "premium",
    mode: "both",
    gradient: ["#aaaaaa", "#e0e0e0"],
    fee: "₹20,000", feeOld: null, feeWaiverSpend: 9999999,
    incomeMin: 150000, cibilTier: "premium",
    interest: "3.0% p.m.",
    rewards: { type: "Air Miles" },
    loungeAccess: { domestic: 99, international: 99, spendRule: 0 },
    benefits: [
      "1 EDGE Mile per ₹100 (domestic)",
      "Unlimited domestic and international lounge visits",
      "Rebranded from Citi Prestige",
      "Taj/ITC vouchers worth ₹10,000"
    ],
    tags: ["Travel", "Lounge Access", "Dining Offers"],
    bestFor: "Luxury Travelers and HNWIs"
  },

  // 3. AIRLINE CO-BRANDED
  {
    id: "vistara_infinite",
    name: "Vistara Infinite",
    category: "travel",
    mode: "both",
    gradient: ["#4a0e4e", "#81298f"],
    fee: "₹10,000", feeOld: null, feeWaiverSpend: 9999999,
    incomeMin: 150000, cibilTier: "premium",
    interest: "3.4% p.m.",
    rewards: { type: "Air Miles" },
    loungeAccess: { domestic: 8, international: 0, spendRule: 50000 },
    benefits: [
      "6 Maharaja Points per ₹200 spent",
      "1 complimentary Business Class ticket voucher on renewal",
      "Complimentary Maharaja Club Gold status",
      "Up to 4 Business Class milestone tickets"
    ],
    tags: ["Travel", "Air Miles", "Lounge Access"],
    bestFor: "Premium Business Travelers"
  },
  {
    id: "vistara_signature",
    name: "Vistara Signature",
    category: "travel",
    mode: "both",
    gradient: ["#5d1b64", "#9b3ab1"],
    fee: "₹3,000", feeOld: null, feeWaiverSpend: 9999999,
    incomeMin: 75000, cibilTier: "mid",
    interest: "3.4% p.m.",
    rewards: { type: "Air Miles" },
    loungeAccess: { domestic: 8, international: 0, spendRule: 50000 },
    benefits: [
      "4 Maharaja Points per ₹200 spent",
      "1 complimentary Premium Economy Class ticket on renewal",
      "Maharaja Club Silver status",
      "Up to 4 Premium Economy milestone tickets"
    ],
    tags: ["Travel", "Air Miles", "Lounge Access"],
    bestFor: "Frequent Corporate Flyers"
  },
  {
    id: "vistara_basic",
    name: "Vistara Basic",
    category: "travel",
    mode: "personal",
    gradient: ["#762a80", "#b952d4"],
    fee: "₹1,500", feeOld: null, feeWaiverSpend: 9999999,
    incomeMin: 50000, cibilTier: "entry",
    interest: "3.6% p.m.",
    rewards: { type: "Air Miles" },
    loungeAccess: { domestic: 8, international: 0, spendRule: 50000 },
    benefits: [
      "2 Maharaja Points per ₹200 spent",
      "1 complimentary Economy Class ticket on renewal",
      "Maharaja Club Base status",
      "Up to 3 Economy milestone tickets"
    ],
    tags: ["Travel", "Air Miles", "Lounge Access"],
    bestFor: "Entry-level Economy Flyers"
  },
  {
    id: "indigo_premium",
    name: "IndiGo Premium",
    category: "travel",
    mode: "personal",
    gradient: ["#002b80", "#0066ff"],
    fee: "₹5,000", feeOld: null, feeWaiverSpend: 9999999,
    incomeMin: 120000, cibilTier: "mid",
    interest: "3.4% p.m.",
    rewards: { type: "Air Miles" },
    loungeAccess: { domestic: 8, international: 2, spendRule: 50000 },
    benefits: [
      "Up to 23 IndiGo BluChips per ₹100 spent on 6E channels",
      "Welcome: 5,000 BluChips + 1 6E Eats voucher",
      "Up to 25,000 BluChips milestone bonuses",
      "8 domestic and 2 international lounge visits per year"
    ],
    tags: ["Travel", "Air Miles", "Lounge Access"],
    bestFor: "Premium IndiGo Loyalists"
  },
  {
    id: "indigo_basic",
    name: "IndiGo Basic",
    category: "travel",
    mode: "personal",
    gradient: ["#0044cc", "#3399ff"],
    fee: "₹799", feeOld: null, feeWaiverSpend: 9999999,
    incomeMin: 20000, cibilTier: "entry",
    interest: "3.6% p.m.",
    rewards: { type: "Air Miles" },
    loungeAccess: { domestic: 4, international: 0, spendRule: 50000 },
    benefits: [
      "Up to 19 IndiGo BluChips per ₹100 spent on 6E channels",
      "Welcome/Renewal: 1,200 BluChips",
      "Up to 2,400 BluChips milestone vouchers",
      "1 domestic visit per quarter"
    ],
    tags: ["Travel", "Air Miles"],
    bestFor: "Budget Travelers flying IndiGo"
  },
  {
    id: "miles_more_select",
    name: "Miles & More World Select",
    category: "travel",
    mode: "both",
    gradient: ["#001a4d", "#004080"],
    fee: "₹4,500", feeOld: null, feeWaiverSpend: 9999999,
    incomeMin: 100000, cibilTier: "mid",
    interest: "3.4% p.m.",
    rewards: { type: "Air Miles" },
    loungeAccess: { domestic: 32, international: 0, spendRule: 0 },
    benefits: [
      "6 Award Miles per ₹200 spent (miles do not expire)",
      "32 domestic visits per year (Priority Pass with 4 intl visits)",
      "Welcome: 15,000 miles; Renewal: 4,000 miles",
      "Extensive Star Alliance booking capabilities"
    ],
    tags: ["Travel", "Air Miles", "Lounge Access"],
    bestFor: "Premium Star Alliance/Lufthansa Loyalists"
  },
  {
    id: "miles_more_world",
    name: "Miles & More World",
    category: "travel",
    mode: "both",
    gradient: ["#002b80", "#0059b3"],
    fee: "₹3,500", feeOld: null, feeWaiverSpend: 9999999,
    incomeMin: 50000, cibilTier: "entry",
    interest: "3.6% p.m.",
    rewards: { type: "Air Miles" },
    loungeAccess: { domestic: 16, international: 0, spendRule: 0 },
    benefits: [
      "4 Award Miles per ₹200 spent (miles do not expire)",
      "Up to 16 domestic visits (Priority Pass with 2 intl visits)",
      "Welcome: 5,000 miles; Renewal: 3,000 miles",
      "Comprehensive travel insurance coverage"
    ],
    tags: ["Travel", "Air Miles", "Lounge Access"],
    bestFor: "Moderate International Flyers"
  },
  {
    id: "spicejet_black",
    name: "SpiceJet Voyage Black",
    category: "travel",
    mode: "personal",
    gradient: ["#a31c00", "#e63c00"],
    fee: "₹2,000", feeOld: null, feeWaiverSpend: 9999999,
    incomeMin: 50000, cibilTier: "mid",
    interest: "3.6% p.m.",
    rewards: { type: "Air Miles" },
    loungeAccess: { domestic: 8, international: 0, spendRule: 0 },
    benefits: [
      "28 SC points per ₹200 spent on SpiceJet",
      "8 domestic visits per year",
      "Welcome: SpiceJet flight voucher worth ₹4,000",
      "Complimentary SpiceClub Gold membership"
    ],
    tags: ["Travel", "Air Miles", "Lounge Access"],
    bestFor: "Premium SpiceJet Loyalists"
  },
  {
    id: "spicejet_voyage",
    name: "SpiceJet Voyage",
    category: "travel",
    mode: "personal",
    gradient: ["#cc2900", "#ff5500"],
    fee: "₹750", feeOld: null, feeWaiverSpend: 9999999,
    incomeMin: 20000, cibilTier: "entry",
    interest: "3.6% p.m.",
    rewards: { type: "Air Miles" },
    loungeAccess: { domestic: 4, international: 0, spendRule: 0 },
    benefits: [
      "18 SC points per ₹200 spent on SpiceJet",
      "4 domestic visits per year",
      "Welcome: SpiceJet flight voucher worth ₹1,500",
      "Complimentary SpiceClub Silver membership"
    ],
    tags: ["Travel", "Air Miles", "Lounge Access"],
    bestFor: "Budget Spenders preferring SpiceJet"
  },

  // 4. LIFESTYLE / SPECIALTY
  {
    id: "select",
    name: "Axis Bank Select",
    category: "lifestyle",
    mode: "both",
    gradient: ["#3d3d3d", "#7a7a7a"],
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
    gradient: ["#8d7167", "#e1bfb3"],
    fee: "₹1,500", feeOld: null, feeWaiverSpend: 500000,
    incomeMin: 40000, cibilTier: "entry",
    interest: "3.4% p.m.",
    rewards: { type: "Reward Points" },
    loungeAccess: { domestic: 8, international: 0, spendRule: 50000 },
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
    id: "rewards",
    name: "Axis Bank Rewards",
    category: "lifestyle",
    mode: "personal",
    gradient: ["#9932cc", "#d8bfd8"],
    fee: "₹1,000", feeOld: null, feeWaiverSpend: 200000,
    incomeMin: 25000, cibilTier: "entry",
    interest: "3.6% p.m.",
    rewards: { type: "Reward Points" },
    loungeAccess: { domestic: 8, international: 0, spendRule: 50000 },
    benefits: [
      "10X EDGE points on apparel and departmental stores",
      "2 EDGE points per ₹125 spent",
      "Milestone: 1,500 EDGE points on spending ₹30,000 per cycle",
      "Welcome: 5,000 EDGE points"
    ],
    tags: ["Shopping", "Entertainment", "Online Shopping"],
    bestFor: "Departmental & Apparel shoppers"
  },
  {
    id: "my_zone",
    name: "Axis Bank My Zone",
    category: "lifestyle",
    mode: "personal",
    gradient: ["#ff1493", "#ffb6c1"],
    fee: "₹500", feeOld: null, feeWaiverSpend: 9999999,
    incomeMin: 20000, cibilTier: "entry",
    interest: "3.6% p.m.",
    rewards: { type: "Reward Points" },
    loungeAccess: { domestic: 4, international: 0, spendRule: 50000 },
    benefits: [
      "BOGO movie tickets on Paytm/District",
      "Swiggy discounts",
      "Welcome: 1-year SonyLIV Premium subscription",
      "4 EDGE Reward points per ₹200 spent"
    ],
    tags: ["Entertainment", "Dining", "Food & Dining"],
    bestFor: "Entertainment, Movies & Swiggy Spenders"
  },

  // 5. FUEL / UPI / INSURANCE
  {
    id: "indianoil_premium",
    name: "IndianOil Axis Premium",
    category: "fuel",
    mode: "both",
    gradient: ["#a83900", "#ffd600"],
    fee: "₹1,000", feeOld: null, feeWaiverSpend: 30000,
    incomeMin: 40000, cibilTier: "entry",
    interest: "3.6% p.m.",
    rewards: { type: "Cashback" },
    loungeAccess: { domestic: 8, spendRule: 50000 },
    benefits: [
      "6 EDGE Miles per ₹150 spent at IOCL (cap 15k spend/month)",
      "1% unlimited fuel surcharge waiver at IndianOil outlets",
      "30% discount on Zomato food delivery",
      "Welcome: 500 EDGE Miles"
    ],
    tags: ["Fuel", "Online Shopping", "Shopping"],
    bestFor: "High-spend IOCL Customers"
  },
  {
    id: "indianoil_basic",
    name: "IndianOil Axis Basic",
    category: "fuel",
    mode: "both",
    gradient: ["#d2691e", "#ff8c00"],
    fee: "₹500", feeOld: null, feeWaiverSpend: 350000,
    incomeMin: 20000, cibilTier: "entry",
    interest: "3.6% p.m.",
    rewards: { type: "Cashback" },
    loungeAccess: { domestic: 0, spendRule: 0 },
    benefits: [
      "4% value-back (20 EDGE points per ₹100) at IOCL outlets",
      "1% on online shopping",
      "Welcome: EDGE points equivalent to first fuel spend up to ₹250",
      "1% fuel surcharge waiver"
    ],
    tags: ["Fuel", "Online Shopping"],
    bestFor: "Budget Commuters & Two-Wheeler Riders"
  },
  {
    id: "supermoney",
    name: "SUPERMONEY RuPay",
    category: "upi",
    mode: "personal",
    gradient: ["#16a34a", "#22c55e"],
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
  {
    id: "kwik_rupay",
    name: "Kwik RuPay",
    category: "upi",
    mode: "personal",
    gradient: ["#32cd32", "#00fa9a"],
    fee: "Lifetime Free", feeOld: null, feeWaiverSpend: 0,
    incomeMin: 15000, cibilTier: "entry",
    interest: "3.6% p.m.",
    rewards: { type: "Reward Points" },
    loungeAccess: { domestic: 0, spendRule: 0 },
    benefits: [
      "Lifetime Free virtual credit card",
      "2 EDGE Reward points per ₹200 spent",
      "Instant delivery; links directly to any UPI application",
      "1% fuel surcharge waiver"
    ],
    tags: ["UPI Payments", "No Annual Fee"],
    bestFor: "Virtual UPI transactors"
  },
  {
    id: "lic_signature",
    name: "LIC Signature",
    category: "lifestyle",
    mode: "personal",
    gradient: ["#2d5986", "#6699cc"],
    fee: "Lifetime Free", feeOld: null, feeWaiverSpend: 0,
    incomeMin: 30000, cibilTier: "entry",
    interest: "3.6% p.m.",
    rewards: { type: "Reward Points" },
    loungeAccess: { domestic: 8, spendRule: 0 },
    benefits: [
      "Lifetime Free credit card",
      "2 reward points per ₹100 spent on LIC premium and forex",
      "Complimentary lost card liability cover",
      "8 complimentary domestic lounge visits per year"
    ],
    tags: ["Insurance", "Travel", "No Annual Fee"],
    bestFor: "LIC Policyholders seeking travel perks"
  },
  {
    id: "lic_platinum",
    name: "LIC Platinum",
    category: "lifestyle",
    mode: "personal",
    gradient: ["#407a80", "#8bcbd1"],
    fee: "Lifetime Free", feeOld: null, feeWaiverSpend: 0,
    incomeMin: 20000, cibilTier: "entry",
    interest: "3.6% p.m.",
    rewards: { type: "Reward Points" },
    loungeAccess: { domestic: 0, spendRule: 0 },
    benefits: [
      "Lifetime Free credit card",
      "2 reward points per ₹100 spent on LIC premium and forex",
      "Comprehensive insurance cover",
      "1% fuel surcharge waiver"
    ],
    tags: ["Insurance", "No Annual Fee"],
    bestFor: "LIC Policyholders seeking basic savings"
  },

  // 6. SECURED / SPECIALIZED
  {
    id: "my_zone_easy",
    name: "My Zone Easy",
    category: "secured",
    mode: "both",
    gradient: ["#3b82f6", "#60a5fa"],
    fee: "₹500", feeOld: null, feeWaiverSpend: 0,
    incomeMin: 0, cibilTier: "secured",
    interest: "3.6% p.m.",
    rewards: { type: "Dining Offers" },
    loungeAccess: { domestic: 0, spendRule: 0 },
    benefits: [
      "Secured credit card against Fixed Deposit (Min ₹15,000)",
      "Guaranteed approval with no credit score check",
      "Buy 1 Get 1 free on movies (Paytm/District)",
      "15% off at partner restaurants"
    ],
    tags: ["Entertainment", "Dining", "Food & Dining"],
    bestFor: "New-to-credit or building credit history"
  },
  {
    id: "pride_signature",
    name: "Pride Signature",
    category: "lifestyle",
    mode: "personal",
    gradient: ["#ff7300", "#ffaa00"],
    fee: "₹500", feeOld: null, feeWaiverSpend: 40000,
    incomeMin: 20000, cibilTier: "entry",
    interest: "3.6% p.m.",
    rewards: { type: "Reward Points" },
    loungeAccess: { domestic: 8, spendRule: 50000 },
    benefits: [
      "Tailored for Defense personnel",
      "8 EDGE points per ₹200 spent",
      "Personalized tricolor card body with 4th embossing line",
      "Dining Delights dining programs & 1% fuel waiver"
    ],
    tags: ["Dining", "Business Perks"],
    bestFor: "Indian Armed Forces & Govt Employees"
  },
  {
    id: "pride_platinum",
    name: "Pride Platinum",
    category: "lifestyle",
    mode: "personal",
    gradient: ["#ff9900", "#ffcc00"],
    fee: "₹250", feeOld: null, feeWaiverSpend: 20000,
    incomeMin: 20000, cibilTier: "entry",
    interest: "3.6% p.m.",
    rewards: { type: "Reward Points" },
    loungeAccess: { domestic: 0, spendRule: 0 },
    benefits: [
      "Tailored for Defense personnel",
      "4 EDGE points per ₹200 spent",
      "Personalized tricolor card body",
      "15% discount at partner restaurants"
    ],
    tags: ["Dining"],
    bestFor: "Defense & Govt Employees seeking budget card"
  },
  {
    id: "shoppers_stop",
    name: "Shoppers Stop",
    category: "lifestyle",
    mode: "personal",
    gradient: ["#111111", "#333333"],
    fee: "₹500", feeOld: null, feeWaiverSpend: 0,
    incomeMin: 20000, cibilTier: "entry",
    interest: "3.6% p.m.",
    rewards: { type: "Reward Points" },
    loungeAccess: { domestic: 0, spendRule: 0 },
    benefits: [
      "20 First Citizen points per ₹200 on Shoppers Stop private labels",
      "12 points per ₹200 on beauty/other brands",
      "Rent and wallet spending are excluded from fee waivers",
      "Points auto-credited to Shoppers Stop account"
    ],
    tags: ["Shopping", "Online Shopping"],
    bestFor: "Frequent department store shoppers"
  }
];

// Provide placeholders for fallback if engine is bypassed
export const BUSINESS_CARDS = FULL_CATALOG.filter(c => c.mode === "both" || c.mode === "business").slice(0, 3);
export const PERSONAL_CARDS = FULL_CATALOG.filter(c => c.mode === "both" || c.mode === "personal").slice(0, 3);
