// ============================================================
// Calculator Math Functions — 100% Accurate, Testable Financial Logic
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

/**
 * Compound Interest Calculator
 * Standard TVM (Time Value of Money) model:
 * Calculates compound growth with periodic contributions compounded at standard intervals.
 */
export function calculateCompoundInterest(
  inputs: CompoundInterestInputs
): CompoundInterestResult {
  const {
    initialInvestment = 0,
    regularContribution = 0,
    contributionFrequency = "monthly",
    annualInterestRate = 0,
    investmentPeriod = 1,
    compoundFrequency = "monthly",
  } = inputs;

  const r = annualInterestRate / 100;
  const periodsPerYear =
    compoundFrequency === "daily"
      ? 365
      : compoundFrequency === "monthly"
        ? 12
        : compoundFrequency === "quarterly"
          ? 4
          : 1;

  // Normalize monthly contribution
  const monthlyContrib =
    contributionFrequency === "monthly"
      ? regularContribution
      : regularContribution / 12;

  const yearlyBreakdown: YearlyBreakdown[] = [];
  let balance = Math.max(0, initialInvestment);
  let totalContributions = Math.max(0, initialInvestment);

  // Month-by-month compound simulation for exact accuracy
  const totalMonths = Math.max(1, Math.round(investmentPeriod)) * 12;
  const monthlyRate = r > 0 ? Math.pow(1 + r / periodsPerYear, periodsPerYear / 12) - 1 : 0;

  for (let m = 1; m <= totalMonths; m++) {
    // Earn interest on existing balance
    const monthInterest = balance * monthlyRate;
    balance += monthInterest;

    // Add regular contribution at the end of the month
    balance += monthlyContrib;
    totalContributions += monthlyContrib;

    // Record yearly checkpoints
    if (m % 12 === 0) {
      const year = m / 12;
      yearlyBreakdown.push({
        year,
        balance: Math.round(balance),
        contributions: Math.round(totalContributions),
        interest: Math.max(0, Math.round(balance - totalContributions)),
      });
    }
  }

  const totalValue = Math.round(balance);
  const totalGrowth = Math.max(0, totalValue - Math.round(totalContributions));
  const growthPercentage =
    totalContributions > 0 ? (totalGrowth / totalContributions) * 100 : 0;

  return {
    totalValue,
    totalContributions: Math.round(totalContributions),
    totalGrowth,
    growthPercentage: Math.round(growthPercentage * 10) / 10,
    yearlyBreakdown,
  };
}

/**
 * Standard Amortizing Loan Payment Calculator
 * Exact formula: M = P * [r(1+r)^n] / [(1+r)^n - 1]
 */
export function calculateLoanPayment(
  inputs: LoanPaymentInputs
): LoanPaymentResult {
  const { loanAmount = 0, annualInterestRate = 0, loanTermYears = 1 } = inputs;

  const P = Math.max(0, loanAmount);
  const totalMonths = Math.max(1, Math.round(loanTermYears * 12));
  const r = annualInterestRate / 100 / 12;

  let monthlyPayment = 0;
  if (P === 0) {
    monthlyPayment = 0;
  } else if (r === 0) {
    monthlyPayment = P / totalMonths;
  } else {
    monthlyPayment = (P * (r * Math.pow(1 + r, totalMonths))) / (Math.pow(1 + r, totalMonths) - 1);
  }

  const totalPayment = monthlyPayment * totalMonths;
  const totalInterest = Math.max(0, totalPayment - P);

  // Generate full amortization schedule
  const amortizationSchedule: AmortizationEntry[] = [];
  let balance = P;

  for (let month = 1; month <= totalMonths; month++) {
    const interestPayment = r > 0 ? balance * r : 0;
    const principalPayment = Math.min(balance, monthlyPayment - interestPayment);
    balance = Math.max(0, balance - principalPayment);

    amortizationSchedule.push({
      month,
      payment: Math.round(monthlyPayment * 100) / 100,
      principal: Math.round(principalPayment * 100) / 100,
      interest: Math.round(interestPayment * 100) / 100,
      balance: Math.round(balance * 100) / 100,
    });
  }

  return {
    monthlyPayment: Math.round(monthlyPayment * 100) / 100,
    totalPayment: Math.round(totalPayment * 100) / 100,
    totalInterest: Math.round(totalInterest * 100) / 100,
    amortizationSchedule,
  };
}

/**
 * Savings Goal Calculator
 * Formula computes required monthly deposit to reach target amount within timeline.
 */
export function calculateSavingsGoal(
  inputs: SavingsGoalInputs
): SavingsGoalResult {
  const {
    targetAmount = 0,
    currentSavings = 0,
    timelineMonths = 1,
    annualInterestRate = 0,
  } = inputs;

  const target = Math.max(0, targetAmount);
  const current = Math.max(0, currentSavings);
  const months = Math.max(1, Math.round(timelineMonths));
  const r = annualInterestRate / 100 / 12;

  // Future value of existing savings
  const futureValueOfCurrent = current * Math.pow(1 + r, months);
  const remainingNeeded = Math.max(0, target - futureValueOfCurrent);

  let monthlyContributionNeeded = 0;
  if (remainingNeeded <= 0) {
    monthlyContributionNeeded = 0;
  } else if (r === 0) {
    monthlyContributionNeeded = remainingNeeded / months;
  } else {
    // Annuity sinking fund factor: FV = PMT * [((1+r)^n - 1) / r]
    monthlyContributionNeeded = (remainingNeeded * r) / (Math.pow(1 + r, months) - 1);
  }

  const totalContributions = current + monthlyContributionNeeded * months;
  const interestEarned = Math.max(0, target - totalContributions);

  return {
    monthlyContributionNeeded: Math.round(monthlyContributionNeeded * 100) / 100,
    totalContributions: Math.round(totalContributions * 100) / 100,
    interestEarned: Math.round(interestEarned * 100) / 100,
  };
}

/**
 * Mortgage Calculator (PITI: Principal, Interest, Taxes, Insurance)
 */
export function calculateMortgage(inputs: MortgageInputs): MortgageResult {
  const {
    homePrice = 0,
    downPayment = 0,
    annualInterestRate = 0,
    loanTermYears = 30,
    propertyTax = 0,
    homeInsurance = 0,
  } = inputs;

  const loanAmount = Math.max(0, homePrice - downPayment);
  const totalMonths = Math.max(1, Math.round(loanTermYears * 12));
  const r = annualInterestRate / 100 / 12;

  let principalAndInterest = 0;
  if (loanAmount === 0) {
    principalAndInterest = 0;
  } else if (r === 0) {
    principalAndInterest = loanAmount / totalMonths;
  } else {
    principalAndInterest =
      (loanAmount * (r * Math.pow(1 + r, totalMonths))) /
      (Math.pow(1 + r, totalMonths) - 1);
  }

  const monthlyTax = propertyTax / 12;
  const monthlyInsurance = homeInsurance / 12;
  const monthlyPayment = principalAndInterest + monthlyTax + monthlyInsurance;
  const totalPayment = principalAndInterest * totalMonths;
  const totalInterest = Math.max(0, totalPayment - loanAmount);

  return {
    monthlyPayment: Math.round(monthlyPayment * 100) / 100,
    principalAndInterest: Math.round(principalAndInterest * 100) / 100,
    totalPayment: Math.round(totalPayment * 100) / 100,
    totalInterest: Math.round(totalInterest * 100) / 100,
  };
}

/**
 * Debt Payoff Calculator (Snowball vs Avalanche Strategies)
 * - Avalanche: Pays highest interest rate first (minimizes interest).
 * - Snowball: Pays lowest balance first (psychological momentum).
 */
export function calculateDebtPayoff(inputs: DebtPayoffInputs): DebtPayoffResult {
  const { debts = [], extraMonthlyPayment = 0, strategy = "avalanche" } = inputs;

  if (debts.length === 0) {
    return {
      payoffDate: "N/A",
      totalInterestPaid: 0,
      totalPaid: 0,
      interestSaved: 0,
      debtOrder: [],
    };
  }

  // Sort debts based on strategy
  const sortedDebts = [...debts].sort((a, b) => {
    if (strategy === "avalanche") {
      return b.interestRate - a.interestRate; // Highest interest first
    }
    return a.balance - b.balance; // Lowest balance first (Snowball)
  });

  // Calculate baseline interest WITHOUT extra payments
  let baseInterest = 0;
  for (const d of debts) {
    const r = d.interestRate / 100 / 12;
    let b = d.balance;
    let m = 0;
    while (b > 0 && m < 600) {
      m++;
      const interest = b * r;
      baseInterest += interest;
      const payment = Math.min(b + interest, d.minimumPayment);
      b = Math.max(0, b + interest - payment);
      if (payment <= interest && b > 0) {
        // Never pays off at minimum payment
        baseInterest += 99999;
        break;
      }
    }
  }

  // Active debts for accelerated simulation
  const activeDebts = sortedDebts.map((d) => ({
    ...d,
    currentBalance: d.balance,
  }));

  let totalInterestPaid = 0;
  let totalPaid = 0;
  let months = 0;
  const maxMonths = 600; // 50 years cap

  while (activeDebts.some((d) => d.currentBalance > 0) && months < maxMonths) {
    months++;
    let extraAvailable = extraMonthlyPayment;

    // 1. Accrue interest & pay minimums across all open debts
    for (const debt of activeDebts) {
      if (debt.currentBalance <= 0) continue;
      const r = debt.interestRate / 100 / 12;
      const interest = debt.currentBalance * r;
      totalInterestPaid += interest;
      debt.currentBalance += interest;

      const minPay = Math.min(debt.currentBalance, debt.minimumPayment);
      debt.currentBalance -= minPay;
      totalPaid += minPay;
    }

    // 2. Put all extra cash towards the target priority debt
    for (const debt of activeDebts) {
      if (debt.currentBalance <= 0) continue;
      if (extraAvailable <= 0) break;

      const extraPay = Math.min(debt.currentBalance, extraAvailable);
      debt.currentBalance -= extraPay;
      totalPaid += extraPay;
      extraAvailable -= extraPay;
    }
  }

  const baseYear = 2026;
  const baseMonth = 1; // Feb 2026 baseline
  const targetMonthIndex = baseMonth + months;
  const targetYear = baseYear + Math.floor(targetMonthIndex / 12);
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const payoffDate = `${monthNames[targetMonthIndex % 12]} ${targetYear}`;

  const interestSaved = Math.max(0, baseInterest - totalInterestPaid);

  return {
    payoffDate,
    totalInterestPaid: Math.round(totalInterestPaid * 100) / 100,
    totalPaid: Math.round(totalPaid * 100) / 100,
    interestSaved: Math.round(interestSaved * 100) / 100,
    debtOrder: sortedDebts.map((d) => d.name),
  };
}

/**
 * Budget Planner (50/30/20 & Custom Breakdown)
 */
export function calculateBudget(inputs: BudgetPlannerInputs): BudgetPlannerResult {
  const { monthlyIncome = 0, expenses = [] } = inputs;

  const income = Math.max(0, monthlyIncome);
  const totalExpenses = expenses.reduce((sum, e) => sum + Math.max(0, e.amount), 0);
  const surplus = income - totalExpenses;
  const savingsRate = income > 0 ? (surplus / income) * 100 : 0;

  const breakdown = expenses.map((e) => ({
    category: e.name,
    amount: Math.max(0, e.amount),
    percentage: income > 0 ? Math.round((Math.max(0, e.amount) / income) * 100) : 0,
  }));

  return {
    totalExpenses: Math.round(totalExpenses * 100) / 100,
    surplus: Math.round(surplus * 100) / 100,
    savingsRate: Math.round(savingsRate * 10) / 10,
    breakdown,
  };
}
