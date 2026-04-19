export interface AmortizationRow {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  balance: number;
}

export function calculateEMI(principal: number, annualRate: number, months: number): {
  emi: number;
  totalInterest: number;
  totalPayment: number;
  schedule: AmortizationRow[];
} {
  if (principal <= 0 || annualRate <= 0 || months <= 0) {
    return { emi: 0, totalInterest: 0, totalPayment: 0, schedule: [] };
  }

  const monthlyRate = annualRate / 12 / 100;
  const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
  
  const schedule: AmortizationRow[] = [];
  let balance = principal;
  let totalInterest = 0;

  for (let i = 1; i <= months; i++) {
    const interest = balance * monthlyRate;
    const principalPayment = emi - interest;
    balance -= principalPayment;
    if (balance < 0) balance = 0;
    
    totalInterest += interest;

    schedule.push({
      month: i,
      payment: emi,
      principal: principalPayment,
      interest: interest,
      balance: balance
    });
  }

  return {
    emi,
    totalInterest,
    totalPayment: principal + totalInterest,
    schedule
  };
}
