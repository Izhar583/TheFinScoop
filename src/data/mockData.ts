// ============================================================
// Mock Data — Articles, Authors
// ============================================================
import type { Author, Article } from "@/types";

export const AUTHORS: Author[] = [
  {
    name: "Sarah Mitchell",
    slug: "sarah-mitchell",
    avatar: "/authors/sarah-mitchell.jpg",
    bio: "Sarah is a personal finance writer with 8+ years of experience covering saving, budgeting, and investing.",
    role: "Senior Finance Writer",
    social: {
      twitter: "https://twitter.com/sarahmitchell",
      linkedin: "https://linkedin.com/in/sarahmitchell",
    },
  },
  {
    name: "James Carter",
    slug: "james-carter",
    avatar: "/authors/james-carter.jpg",
    bio: "James covers fintech, digital banking, and emerging payment technologies.",
    role: "Fintech Writer",
  },
  {
    name: "Emily Roberts",
    slug: "emily-roberts",
    avatar: "/authors/emily-roberts.jpg",
    bio: "Emily specializes in credit, debt management, and consumer finance topics.",
    role: "Finance Writer",
  },
];

export const MOCK_ARTICLES: Article[] = [
  {
    slug: "how-to-build-a-budget-that-works-in-real-life",
    title: "How to Build a Budget That Works in Real Life",
    excerpt:
      "A practical guide to understanding income, recurring expenses, flexible spending, and savings.",
    category: "personal-finance",
    subcategory: "Money Management",
    author: AUTHORS[0],
    publishedAt: "2025-04-20",
    updatedAt: "2025-04-20",
    readTime: 8,
    heroImage: "/articles/budget-hero.jpg",
    tags: ["budgeting", "personal finance", "money management"],
    featured: true,
    tableOfContents: [
      { id: "what-is-budget", title: "What is a budget?", level: 2 },
      { id: "types-of-budgets", title: "Types of budgets", level: 2 },
      { id: "50-30-20-rule", title: "The 50/30/20 rule", level: 3 },
      { id: "zero-based-budget", title: "Zero-based budgeting", level: 3 },
      { id: "how-to-start", title: "How to start budgeting", level: 2 },
      { id: "tools", title: "Budgeting tools and apps", level: 2 },
    ],
  },
  {
    slug: "best-digital-banks-for-everyday-banking-2025",
    title: "Best Digital Banks for Everyday Banking in 2025",
    excerpt:
      "Compare features, fees and benefits of top digital banks to find the right fit for your money.",
    category: "fintech",
    subcategory: "Digital Banking",
    author: AUTHORS[0],
    publishedAt: "2025-04-18",
    readTime: 8,
    heroImage: "/articles/digital-banks-hero.jpg",
    tags: ["digital banking", "fintech", "banking"],
    featured: true,
    tableOfContents: [
      { id: "what-is-digital-bank", title: "What is a digital bank?", level: 2 },
      { id: "top-digital-banks", title: "Top digital banks in 2025", level: 2 },
      { id: "key-features", title: "Key features to compare", level: 2 },
      { id: "pros-cons", title: "Pros and cons", level: 2 },
      { id: "which-is-right", title: "Which digital bank is right for you?", level: 2 },
    ],
  },
  {
    slug: "10-simple-ways-to-save-more-without-feeling-deprived",
    title: "10 Simple Ways to Save More Without Feeling Deprived",
    excerpt: "Small changes can make a big difference in your finances.",
    category: "saving-budgeting",
    author: AUTHORS[2],
    publishedAt: "2025-04-12",
    readTime: 6,
    heroImage: "/articles/save-more-hero.jpg",
    tags: ["savings", "budgeting", "money habits"],
    featured: false,
  },
  {
    slug: "understanding-credit-scores-and-how-to-improve-yours",
    title: "Understanding Credit Scores and How to Improve Yours",
    excerpt: "A higher credit score can open more financial opportunities.",
    category: "credit-debt",
    author: AUTHORS[2],
    publishedAt: "2025-04-03",
    readTime: 6,
    heroImage: "/articles/credit-score-hero.jpg",
    tags: ["credit score", "credit", "debt"],
    featured: false,
  },
  {
    slug: "how-to-set-financial-goals-you-ll-actually-achieve",
    title: "How to Set Financial Goals You'll Actually Achieve",
    excerpt:
      "Turn your dreams into a plan with these practical steps.",
    category: "personal-finance",
    author: AUTHORS[2],
    publishedAt: "2025-04-08",
    readTime: 7,
    heroImage: "/articles/financial-goals-hero.jpg",
    tags: ["financial goals", "planning", "personal finance"],
    featured: false,
  },
  {
    slug: "digital-banking-vs-traditional-banks-which-is-right-for-you",
    title: "Digital Banking vs Traditional Banks: Which Is Right For You?",
    excerpt:
      "Compare features, fees and convenience to help find the best fit.",
    category: "banking-payments",
    author: AUTHORS[1],
    publishedAt: "2025-03-28",
    readTime: 5,
    heroImage: "/articles/digital-vs-traditional-hero.jpg",
    tags: ["digital banking", "banking", "comparison"],
    featured: false,
  },
];

