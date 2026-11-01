import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Merge tailwind classes safely
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format currency
export function formatCurrency(
  amount: number,
  currency: string = "USD",
  locale: string = "en-US"
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

// Format percentage
export function formatPercentage(value: number, decimals: number = 1): string {
  return `${value.toFixed(decimals)}%`;
}

// Format number with commas
export function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-US").format(value);
}

// Calculate read time from word count
export function calculateReadTime(wordCount: number): number {
  const wordsPerMinute = 200;
  return Math.ceil(wordCount / wordsPerMinute);
}

// Format date
export function formatDate(
  dateString: string,
  format: "short" | "long" = "long"
): string {
  const date = new Date(dateString);
  if (format === "short") {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

// Truncate text
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + "...";
}

// Slugify text
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

// Get category label (display name)
export function getCategoryLabel(slug: string): string {
  const labels: Record<string, string> = {
    "personal-finance": "Personal Finance",
    "saving-budgeting": "Saving & Budgeting",
    "banking-payments": "Banking & Payments",
    "credit-debt": "Credit & Debt",
    investing: "Investing",
    fintech: "Fintech",
    "savings-growth": "Savings & Growth",
    "loans-borrowing": "Loans & Borrowing",
    "budgeting-debt": "Budgeting & Debt",
    "investing-retirement": "Investing & Retirement",
  };
  return labels[slug] ?? slug;
}

// Get category color classes
export function getCategoryColor(category: string): {
  bg: string;
  text: string;
  border: string;
} {
  const colors: Record<string, { bg: string; text: string; border: string }> =
    {
      "personal-finance": {
        bg: "bg-green-50",
        text: "text-green-700",
        border: "border-green-200",
      },
      "saving-budgeting": {
        bg: "bg-blue-50",
        text: "text-blue-700",
        border: "border-blue-200",
      },
      "banking-payments": {
        bg: "bg-purple-50",
        text: "text-purple-700",
        border: "border-purple-200",
      },
      "credit-debt": {
        bg: "bg-orange-50",
        text: "text-orange-700",
        border: "border-orange-200",
      },
      investing: {
        bg: "bg-indigo-50",
        text: "text-indigo-700",
        border: "border-indigo-200",
      },
      fintech: {
        bg: "bg-cyan-50",
        text: "text-cyan-700",
        border: "border-cyan-200",
      },
    };
  return (
    colors[category] ?? {
      bg: "bg-gray-50",
      text: "text-gray-700",
      border: "border-gray-200",
    }
  );
}

