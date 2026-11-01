// ============================================================
// TheFinScoop — TypeScript Interfaces & Types
// ============================================================

// --------------- Author ---------------
export interface Author {
  name: string;
  slug: string;
  avatar: string;
  bio: string;
  role?: string;
  social?: {
    twitter?: string;
    linkedin?: string;
  };
}

// --------------- Table of Contents ---------------
export interface TOCItem {
  id: string;
  title: string;
  level: number; // 2 = H2, 3 = H3
  children?: TOCItem[];
}

// --------------- Article ---------------
export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  subcategory?: string;
  author: Author;
  publishedAt: string; // ISO date string
  updatedAt?: string;
  readTime: number; // minutes
  heroImage: string;
  tags: string[];
  featured: boolean;
  tableOfContents?: TOCItem[];
  relatedArticles?: string[]; // slugs
}

export type ArticleCategory =
  | "personal-finance"
  | "saving-budgeting"
  | "banking-payments"
  | "credit-debt"
  | "investing"
  | "fintech";

// --------------- Tool ---------------
export interface Tool {
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  category: ToolCategory;
  icon: string; // lucide icon name
  iconColor: string; // tailwind color class
  featured: boolean;
  popular: boolean;
  relatedTools?: string[]; // slugs
}

export type ToolCategory =
  | "savings-growth"
  | "loans-borrowing"
  | "budgeting-debt"
  | "investing-retirement";

// --------------- Calculator Inputs ---------------
export interface CompoundInterestInputs {
  initialInvestment: number;
  regularContribution: number;
  contributionFrequency: "monthly" | "yearly";
  annualInterestRate: number;
  investmentPeriod: number;
  compoundFrequency: "daily" | "monthly" | "quarterly" | "yearly";
}

export interface CompoundInterestResult {
  totalValue: number;
  totalContributions: number;
  totalGrowth: number;
  growthPercentage: number;
  yearlyBreakdown: YearlyBreakdown[];
}

export interface LoanPaymentInputs {
  loanAmount: number;
  annualInterestRate: number;
  loanTermYears: number;
}

export interface LoanPaymentResult {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
  amortizationSchedule: AmortizationEntry[];
}

export interface SavingsGoalInputs {
  targetAmount: number;
  currentSavings: number;
  timelineMonths: number;
  annualInterestRate: number;
}

export interface SavingsGoalResult {
  monthlyContributionNeeded: number;
  totalContributions: number;
  interestEarned: number;
}

export interface MortgageInputs {
  homePrice: number;
  downPayment: number;
  annualInterestRate: number;
  loanTermYears: number;
  propertyTax?: number;
  homeInsurance?: number;
}

export interface MortgageResult {
  monthlyPayment: number;
  principalAndInterest: number;
  totalPayment: number;
  totalInterest: number;
}

export interface DebtPayoffInputs {
  debts: DebtEntry[];
  extraMonthlyPayment: number;
  strategy: "avalanche" | "snowball";
}

export interface DebtEntry {
  name: string;
  balance: number;
  interestRate: number;
  minimumPayment: number;
}

export interface DebtPayoffResult {
  payoffDate: string;
  totalInterestPaid: number;
  totalPaid: number;
  interestSaved: number;
  debtOrder: string[];
}

export interface BudgetPlannerInputs {
  monthlyIncome: number;
  expenses: BudgetExpenseCategory[];
}

export interface BudgetExpenseCategory {
  name: string;
  amount: number;
  icon?: string;
}

export interface BudgetPlannerResult {
  totalExpenses: number;
  surplus: number;
  savingsRate: number;
  breakdown: { category: string; amount: number; percentage: number }[];
}

// --------------- Yearly/Amortization Data ---------------
export interface YearlyBreakdown {
  year: number;
  balance: number;
  contributions: number;
  interest: number;
}

export interface AmortizationEntry {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  balance: number;
}

// --------------- Navigation ---------------
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

// --------------- Search ---------------
export interface SearchResult {
  type: "article" | "tool" | "page";
  title: string;
  excerpt: string;
  href: string;
  category?: string;
  author?: string;
  date?: string;
  readTime?: number;
}

export interface SearchFilters {
  contentType: ("articles" | "tools" | "fintech" | "pages")[];
  category: string[];
  dateRange: "any" | "last30" | "last3months" | "lastyear";
}

// --------------- Fintech Category ---------------
export interface FintechCategory {
  slug: string;
  name: string;
  description: string;
  icon: string;
  iconColor: string;
}

// --------------- Newsletter ---------------
export interface NewsletterFormData {
  email: string;
}

// --------------- Comparison Table ---------------
export interface ComparisonRow {
  name: string;
  logo?: string;
  fields: Record<string, string | number | boolean>;
}

export interface ComparisonTable {
  title: string;
  columns: { key: string; label: string; sortable?: boolean }[];
  rows: ComparisonRow[];
}

