export const BUSINESS_STEPS = [
  {
    id: "business",
    title: "Tell Us About Your Business",
    subtitle: "Help us tailor the perfect card recommendations for you.",
    fields: [
      { id: "businessType", label: "What type of business do you run?", type: "chips", options: ["Sole Proprietor", "Partnership", "Private Limited", "Freelancer / Consultant", "Retailer / Trader"] },
      { id: "gst", label: "Do you have a GST registration?", type: "chips", options: ["Yes, registered", "No, not registered", "Applied / Pending"] },
      { id: "creditScore", label: "What is your credit score range?", type: "chips", options: ["Excellent (750+)", "Good (700–750)", "Fair (650–700)", "Building Credit (<650)", "Not Sure"] },
    ],
  },
  {
    id: "spending",
    title: "Understand Your Spending",
    subtitle: "Help us tailor the perfect card recommendations by sharing a bit about your business habits.",
    fields: [
      { id: "monthlySpend", label: "What is your average monthly expenditure?", type: "slider", min: 10000, max: 500000, step: 5000, format: (v) => `₹${(v / 100000).toFixed(1)}L` },
      { id: "sectors", label: "Where do you spend the most? (Select up to 3)", type: "sector-grid", options: [
        { label: "Travel", icon: "✈️" },
        { label: "Dining", icon: "🍽️" },
        { label: "Shopping", icon: "🛍️" },
        { label: "Groceries", icon: "🛒" },
        { label: "Online Shopping", icon: "💻" },
        { label: "Utilities & Bills", icon: "💡" },
        { label: "Fuel", icon: "⛽" },
        { label: "Entertainment", icon: "🎬" },
        { label: "Health & Wellness", icon: "🛡️" }
      ] },
    ],
  },
  {
    id: "rewards",
    title: "What Matters Most to You?",
    subtitle: "Choose your top reward preference. We'll find cards that match your priorities.",
    fields: [
      { id: "rewardPref", label: "Primary reward preference", type: "reward-grid", options: [
        { label: "Cashback", icon: "💰", desc: "Earn cash back on every purchase" },
        { label: "Air Miles", icon: "✈️", desc: "Fly more for less with travel rewards" },
        { label: "Lounge Access", icon: "🛋️", desc: "Premium airport lounge access" },
        { label: "Business Perks", icon: "📈", desc: "GST benefits, fuel savings & more" },
      ]},
    ],
  },
];
