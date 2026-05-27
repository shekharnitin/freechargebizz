export const PERSONAL_STEPS = [
  {
    id: "personal",
    title: "Tell Us About Yourself",
    subtitle: "Help us tailor the perfect card recommendations for you.",
    fields: [
      { id: "employmentType", label: "Employment Type", type: "chips", options: ["Salaried", "Self-Employed"] },
      { id: "annualIncome", label: "What is your annual income?", type: "slider", min: 200000, max: 5000000, step: 100000, format: (v) => `₹${(v / 100000).toFixed(1)}L` },
      { id: "creditScore", label: "What is your credit score range?", type: "chips", options: ["Excellent (750+)", "Good (700–750)", "Fair (650–700)", "Building Credit (<650)", "Not Sure"] },
    ],
  },
  {
    id: "spending",
    title: "Understand Your Spending",
    subtitle: "Help us tailor the perfect card recommendations by sharing your habits.",
    fields: [
      { id: "monthlySpend", label: "What is your average monthly expenditure?", type: "slider", min: 5000, max: 200000, step: 5000, format: (v) => `₹${(v / 100000).toFixed(1)}L` },
      { id: "sectors", label: "Which sector do you spend the most on?", subtitle: "Select up to 2 primary categories.", type: "sector-grid", options: [
        { label: "Groceries", icon: "🛒" }, { label: "Dining", icon: "🍽️" }, { label: "Fuel", icon: "⛽" },
        { label: "Online Shopping", icon: "🛍️" }, { label: "Travel", icon: "✈️" }, { label: "Entertainment", icon: "🎬" },
      ]},
    ],
  },
  {
    id: "rewards",
    title: "What Matters Most to You?",
    subtitle: "Choose your top reward preference.",
    fields: [
      { id: "rewardPref", label: "Primary reward preference", type: "reward-grid", options: [
        { label: "Cashback", icon: "💰", desc: "Earn cash back on every purchase" },
        { label: "Travel Miles", icon: "✈️", desc: "Fly more for less with travel rewards" },
        { label: "Dining Offers", icon: "🍷", desc: "Discounts at premium restaurants" },
        { label: "No Annual Fee", icon: "✅", desc: "Zero cost cards with great value" },
      ]},
    ],
  },
];
