// ============================================================
// Calculator Math Functions — Pure, Testable
// ============================================================
import type {
  CompoundInterestInputs,
  CompoundInterestResult,
  LoanPaymentInputs,
  LoanPaymentResult,
  SavingsGoalInputs,
  SavingsGoalResult,
  MortgageInputs,
  MortgageResult,
  DebtPayoffInputs,
  DebtPayoffResult,
  BudgetPlannerInputs,
  BudgetPlannerResult,
  YearlyBreakdown,
  AmortizationEntry,
} from "@/types";

// --------------- Compound Interest ---------------
export function calculateCompoundInterest(
  inputs: CompoundInterestInputs
): CompoundInterestResult {
  const {
    initialInvestment,
    regularContribution,
    contributionFrequency,
    annualInterestRate,
    investmentPeriod,
    compoundFrequency,
  } = inputs;

  const n =
    compoundFrequency === "daily"
      ? 365
      : compoundFrequency === "monthly"
        ? 12
        : compoundFrequency === "quarterly"
          ? 4
          : 1;

  const r = annualInterestRate / 100;
  const monthlyContrib =
    contributionFrequency === "monthly"
      ? regularContribution
      : regularContribution / 12;

  const yearlyBreakdown: YearlyBreakdown[] = [];
  let balance = initialInvestment;
  let totalContributions = initialInvestment;

  for (let year = 1; year <= investmentPeriod; year++) {
    const startBalance = balance;
    // Compound the principal
    balance = startBalance * Math.pow(1 + r / n, n);
    // Add monthly contributions compounded
    for (let month = 1; month <= 12; month++) {
      balance += monthlyContrib * Math.pow(1 + r / n, n / 12);
    }
    totalContributions += monthlyContrib * 12;
    yearlyBreakdown.push({
      year,
      balance: Math.round(balance),
      contributions: Math.round(totalContributions),
      interest: Math.round(balance - totalContributions),
    });
  }

  const totalValue = Math.round(balance);
  const totalGrowth = totalValue - totalContributions;
  const growthPercentage = (totalGrowth / totalContributions) * 100;

  return {
    totalValue,
    totalContributions: Math.round(totalContributions),
    totalGrowth: Math.round(totalGrowth),
    growthPercentage: Math.round(growthPercentage * 10) / 10,
    yearlyBreakdown,
  };
}

// --------------- Loan Payment ---------------
export function calculateLoanPayment(
  inputs: LoanPaymentInputs
): LoanPaymentResult {
  const { loanAmount, annualInterestRate, loanTermYears } = inputs;

  const monthlyRate = annualInterestRate / 100 / 12;
  const numPayments = loanTermYears * 12;

  let monthlyPayment: number;
  if (monthlyRate === 0) {
    monthlyPayment = loanAmount / numPayments;
  } else {
    monthlyPayment =
      (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
      (Math.pow(1 + monthlyRate, numPayments) - 1);
  }

  const totalPayment = monthlyPayment * numPayments;
  const totalInterest = totalPayment - loanAmount;

  // Amortization schedule
  const amortizationSchedule: AmortizationEntry[] = [];
  let balance = loanAmount;

  for (let month = 1; month <= numPayments; month++) {
    const interestPayment = balance * monthlyRate;
    const principalPayment = monthlyPayment - interestPayment;
    balance -= principalPayment;

    amortizationSchedule.push({
      month,
      payment: Math.round(monthlyPayment * 100) / 100,
      principal: Math.round(principalPayment * 100) / 100,
      interest: Math.round(interestPayment * 100) / 100,
      balance: Math.max(0, Math.round(balance * 100) / 100),
    });
  }

  return {
    monthlyPayment: Math.round(monthlyPayment * 100) / 100,
    totalPayment: Math.round(totalPayment * 100) / 100,
    totalInterest: Math.round(totalInterest * 100) / 100,
    amortizationSchedule,
  };
}

// --------------- Savings Goal ---------------
export function calculateSavingsGoal(
  inputs: SavingsGoalInputs
): SavingsGoalResult {
  const { targetAmount, currentSavings, timelineMonths, annualInterestRate } =
    inputs;

  const monthlyRate = annualInterestRate / 100 / 12;
  const remaining = targetAmount - currentSavings * Math.pow(1 + monthlyRate, timelineMonths);

  let monthlyContributionNeeded: number;
  if (monthlyRate === 0) {
    monthlyContributionNeeded = remaining / timelineMonths;
  } else {
    monthlyContributionNeeded =
      (remaining * monthlyRate) /
      (Math.pow(1 + monthlyRate, timelineMonths) - 1);
  }

  const totalContributions = monthlyContributionNeeded * timelineMonths;
  const interestEarned = targetAmount - totalContributions - currentSavings;

  return {
    monthlyContributionNeeded: Math.max(0, Math.round(monthlyContributionNeeded * 100) / 100),
    totalContributions: Math.round(totalContributions * 100) / 100,
    interestEarned: Math.round(interestEarned * 100) / 100,
  };
}

// --------------- Mortgage ---------------
export function calculateMortgage(inputs: MortgageInputs): MortgageResult {
  const { homePrice, downPayment, annualInterestRate, loanTermYears, propertyTax = 0, homeInsurance = 0 } = inputs;

  const loanAmount = homePrice - downPayment;
  const monthlyRate = annualInterestRate / 100 / 12;
  const numPayments = loanTermYears * 12;

  let principalAndInterest: number;
  if (monthlyRate === 0) {
    principalAndInterest = loanAmount / numPayments;
  } else {
    principalAndInterest =
      (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
      (Math.pow(1 + monthlyRate, numPayments) - 1);
  }

  const monthlyPayment = principalAndInterest + propertyTax / 12 + homeInsurance / 12;
  const totalPayment = principalAndInterest * numPayments;
  const totalInterest = totalPayment - loanAmount;

  return {
    monthlyPayment: Math.round(monthlyPayment * 100) / 100,
    principalAndInterest: Math.round(principalAndInterest * 100) / 100,
    totalPayment: Math.round(totalPayment * 100) / 100,
    totalInterest: Math.round(totalInterest * 100) / 100,
  };
}

// --------------- Debt Payoff ---------------
export function calculateDebtPayoff(inputs: DebtPayoffInputs): DebtPayoffResult {
  const { debts, extraMonthlyPayment, strategy } = inputs;

  // Sort debts by strategy
  const sortedDebts = [...debts].sort((a, b) =>
    strategy === "avalanche"
      ? b.interestRate - a.interestRate // Highest interest first
      : a.balance - b.balance           // Lowest balance first
  );

  let totalInterestPaid = 0;
  let totalPaid = 0;
  let month = 0;
  const remainingBalances = sortedDebts.map((d) => ({ ...d }));

  while (remainingBalances.some((d) => d.balance > 0)) {
    month++;
    let extra = extraMonthlyPayment;

    for (const debt of remainingBalances) {
      if (debt.balance <= 0) continue;
      const interest = (debt.balance * debt.interestRate) / 100 / 12;
      totalInterestPaid += interest;
      const payment = Math.min(debt.balance + interest, debt.minimumPayment + extra);
      extra = Math.max(0, extra - Math.max(0, payment - debt.minimumPayment));
      debt.balance = Math.max(0, debt.balance + interest - payment);
      totalPaid += payment;
    }

    if (month > 600) break; // Safety cap at 50 years
  }

  // Calculate interest without extra payment for comparison
  const baseInterest = debts.reduce((sum, d) => {
    const months = Math.ceil(d.balance / d.minimumPayment);
    return sum + d.balance * (d.interestRate / 100 / 12) * months;
  }, 0);

  const payoffDate = new Date();
  payoffDate.setMonth(payoffDate.getMonth() + month);

  return {
    payoffDate: payoffDate.toLocaleDateString("en-US", { month: "long", year: "numeric" }),
    totalInterestPaid: Math.round(totalInterestPaid * 100) / 100,
    totalPaid: Math.round(totalPaid * 100) / 100,
    interestSaved: Math.round(Math.max(0, baseInterest - totalInterestPaid) * 100) / 100,
    debtOrder: sortedDebts.map((d) => d.name),
  };
}

// --------------- Budget Planner ---------------
export function calculateBudget(inputs: BudgetPlannerInputs): BudgetPlannerResult {
  const { monthlyIncome, expenses } = inputs;

  const totalExpenses = expenses.reduce((sum, e) => sum + e.amount, 0);
  const surplus = monthlyIncome - totalExpenses;
  const savingsRate = monthlyIncome > 0 ? (surplus / monthlyIncome) * 100 : 0;

  const breakdown = expenses.map((e) => ({
    category: e.name,
    amount: e.amount,
    percentage: monthlyIncome > 0 ? Math.round((e.amount / monthlyIncome) * 100) : 0,
  }));

  return {
    totalExpenses: Math.round(totalExpenses * 100) / 100,
    surplus: Math.round(surplus * 100) / 100,
    savingsRate: Math.round(savingsRate * 10) / 10,
    breakdown,
  };
}

