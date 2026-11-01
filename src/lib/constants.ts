// ============================================================
// Site-wide Constants — Navigation, Tools, Categories
// ============================================================
import type { NavItem, Tool, FintechCategory } from "@/types";

export const SITE_NAME = "TheFinScoop";
export const SITE_TAGLINE = "Make money make sense.";
export const SITE_URL = "https://thefinscoop.com";
export const SITE_DESCRIPTION =
  "Practical financial knowledge, useful tools, and clear fintech guides — all in one place.";

// --------------- Navigation ---------------
export const NAV_ITEMS: NavItem[] = [
  {
    label: "Learn",
    href: "/learn",
    children: [
      { label: "Finance Topics", href: "/learn" },
      { label: "Finance Tools", href: "/tools" },
      { label: "Fintech Guides", href: "/fintech" },
      { label: "Latest Articles", href: "/learn?sort=latest" },
    ],
  },
  {
    label: "Tools",
    href: "/tools",
  },
  {
    label: "Fintech",
    href: "/fintech",
    children: [
      { label: "Digital Banking", href: "/fintech/digital-banking" },
      { label: "Payment Platforms", href: "/fintech/payment-platforms" },
      { label: "Money Transfers", href: "/fintech/money-transfers" },
      { label: "Financial Apps", href: "/fintech/financial-apps" },
      { label: "Security & Safety", href: "/fintech/security-safety" },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Editorial Policy", href: "/about/editorial-policy" },
      { label: "Author Directory", href: "/about/authors" },
      { label: "Newsletter", href: "/newsletter" },
      { label: "Advertise / Partner", href: "/about/advertise" },
    ],
  },
];

// --------------- Footer Links ---------------
export const FOOTER_LINKS = {
  explore: [
    { label: "Finance Topics", href: "/learn" },
    { label: "Finance Tools", href: "/tools" },
    { label: "Fintech Guides", href: "/fintech" },
    { label: "Latest Articles", href: "/learn?sort=latest" },
  ],
  thefinscoop: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Author Directory", href: "/about/authors" },
    { label: "Newsletter", href: "/newsletter" },
    { label: "Advertise / Partner", href: "/about/advertise" },
  ],
  editorial: [
    { label: "Editorial Policy", href: "/about/editorial-policy" },
    { label: "Editorial Policy", href: "/about/editorial-policy" },
    { label: "Author Directory", href: "/about/authors" },
    { label: "Corrections Policy", href: "/about/corrections" },
    { label: "Sources & Methodology", href: "/about/sources" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/legal/privacy-policy" },
    { label: "Terms of Use", href: "/legal/terms-of-use" },
    { label: "Financial Disclaimer", href: "/legal/financial-disclaimer" },
    { label: "Affiliate Disclosure", href: "/legal/affiliate-disclosure" },
  ],
};

export const SOCIAL_LINKS = [
  { platform: "twitter", href: "https://twitter.com/thefinscoop", label: "X (Twitter)" },
  { platform: "linkedin", href: "https://linkedin.com/company/thefinscoop", label: "LinkedIn" },
  { platform: "youtube", href: "https://youtube.com/@thefinscoop", label: "YouTube" },
  { platform: "instagram", href: "https://instagram.com/thefinscoop", label: "Instagram" },
  { platform: "rss", href: "/rss.xml", label: "RSS Feed" },
];

// --------------- Finance Tools ---------------
export const TOOLS: Tool[] = [
  {
    slug: "compound-interest-calculator",
    name: "Compound Interest Calculator",
    description: "See how your savings can grow over time with the power of compounding.",
    shortDescription: "See how savings grow over time.",
    category: "savings-growth",
    icon: "TrendingUp",
    iconColor: "text-green-600",
    featured: true,
    popular: true,
  },
  {
    slug: "loan-payment-calculator",
    name: "Loan Payment Calculator",
    description: "Calculate monthly payments, compare options and understand costs.",
    shortDescription: "Calculate payments and total interest.",
    category: "loans-borrowing",
    icon: "Building2",
    iconColor: "text-blue-600",
    featured: false,
    popular: true,
  },
  {
    slug: "savings-goal-calculator",
    name: "Savings Goal Calculator",
    description: "Find out how much you need to save each month to reach your goal.",
    shortDescription: "Find out how much you need to save each month.",
    category: "savings-growth",
    icon: "Target",
    iconColor: "text-green-600",
    featured: false,
    popular: true,
  },
  {
    slug: "budget-planner",
    name: "Budget Planner",
    description: "Track income, expenses and build healthier budget habits.",
    shortDescription: "Track income, expenses and savings.",
    category: "budgeting-debt",
    icon: "Wallet",
    iconColor: "text-orange-500",
    featured: false,
    popular: true,
  },
  {
    slug: "debt-payoff-calculator",
    name: "Debt Payoff Calculator",
    description: "Create a plan to become debt-free faster using avalanche or snowball.",
    shortDescription: "Plan to become debt-free faster.",
    category: "budgeting-debt",
    icon: "CreditCard",
    iconColor: "text-orange-500",
    featured: false,
    popular: true,
  },
  {
    slug: "mortgage-calculator",
    name: "Mortgage Calculator",
    description: "Estimate monthly payments and compare loan options.",
    shortDescription: "Estimate monthly payments and loan options.",
    category: "loans-borrowing",
    icon: "Home",
    iconColor: "text-blue-600",
    featured: false,
    popular: true,
  },
];

export const TOOL_CATEGORIES = [
  {
    slug: "savings-growth",
    name: "Savings & Growth",
    description: "Plan for the future with savings and investment tools.",
    icon: "PiggyBank",
    iconColor: "text-green-600",
    iconBg: "bg-green-100",
  },
  {
    slug: "loans-borrowing",
    name: "Loans & Borrowing",
    description: "Calculate payments, compare options and understand costs.",
    icon: "Building2",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100",
  },
  {
    slug: "budgeting-debt",
    name: "Budgeting & Debt",
    description: "Take control of your spending and pay down debt faster.",
    icon: "Wallet",
    iconColor: "text-orange-500",
    iconBg: "bg-orange-100",
  },
  {
    slug: "investing-retirement",
    name: "Investing & Retirement",
    description: "Estimate growth, explore scenarios and plan for tomorrow.",
    icon: "BarChart3",
    iconColor: "text-purple-600",
    iconBg: "bg-purple-100",
  },
];

// --------------- Learn Categories ---------------
export const LEARN_CATEGORIES = [
  {
    slug: "personal-finance",
    name: "Personal Finance",
    description: "Master the essentials of managing your money effectively.",
    icon: "User",
    iconColor: "text-green-600",
    iconBg: "bg-green-100",
  },
  {
    slug: "saving-budgeting",
    name: "Saving & Budgeting",
    description: "Simple strategies for smart saving and expense tracking.",
    icon: "PiggyBank",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100",
  },
  {
    slug: "banking-payments",
    name: "Banking & Payments",
    description: "Navigate banking, transfers, and digital payments.",
    icon: "Landmark",
    iconColor: "text-purple-600",
    iconBg: "bg-purple-100",
  },
  {
    slug: "credit-debt",
    name: "Credit & Debt",
    description: "Understand credit scores, loans, and debt management.",
    icon: "CreditCard",
    iconColor: "text-orange-500",
    iconBg: "bg-orange-100",
  },
  {
    slug: "investing",
    name: "Investing Basics",
    description: "Start investing with confidence, from stocks to ETFs.",
    icon: "TrendingUp",
    iconColor: "text-indigo-600",
    iconBg: "bg-indigo-100",
  },
  {
    slug: "fintech",
    name: "Fintech",
    description: "Discover the cutting edge of digital finance and technology.",
    icon: "Smartphone",
    iconColor: "text-cyan-600",
    iconBg: "bg-cyan-100",
  },
];

// --------------- Fintech Categories ---------------
export const FINTECH_CATEGORIES: FintechCategory[] = [
  {
    slug: "digital-banking",
    name: "Digital Banking",
    description: "Accounts, features and how it works.",
    icon: "Landmark",
    iconColor: "text-blue-600",
  },
  {
    slug: "payment-platforms",
    name: "Payment Platforms",
    description: "Apps, wallets and contactless payments.",
    icon: "Smartphone",
    iconColor: "text-green-600",
  },
  {
    slug: "money-transfers",
    name: "Money Transfers",
    description: "Send money locally and internationally.",
    icon: "ArrowRightLeft",
    iconColor: "text-orange-500",
  },
  {
    slug: "financial-apps",
    name: "Financial Apps",
    description: "Tools for budgeting, investing and more.",
    icon: "LayoutGrid",
    iconColor: "text-purple-600",
  },
  {
    slug: "security-safety",
    name: "Security & Safety",
    description: "Keep your money and data secure.",
    icon: "Shield",
    iconColor: "text-cyan-600",
  },
];

// --------------- Popular Search Tags ---------------
export const POPULAR_TOOL_TAGS = [
  "Compound Interest",
  "Loan Calculator",
  "Savings Goal",
  "Budget Planner",
];

export const POPULAR_FINTECH_TAGS = [
  "Digital banking",
  "Payment apps",
  "Money transfer",
  "Financial apps",
];

