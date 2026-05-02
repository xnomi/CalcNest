"use client";

import React, { useState, useEffect } from 'react';
import CalcLayout from '@/components/CalcLayout';
import NumberInput from '@/components/NumberInput';
import ResultCard from '@/components/ResultCard';
import Chart from '@/components/Chart';
import { calculateEMI, AmortizationRow } from '@/lib/emiUtils';

export default function EMIClient() {
  const [principal, setPrincipal] = useState<string>('10000');
  const [rate, setRate] = useState<string>('5');
  const [tenure, setTenure] = useState<string>('5');
  const [tenureType, setTenureType] = useState<'years' | 'months'>('years');
  const [currency, setCurrency] = useState<string>('$');

  const [result, setResult] = useState<{emi: number, totalInterest: number, totalPayment: number, schedule: AmortizationRow[]}>({
    emi: 0, totalInterest: 0, totalPayment: 0, schedule: []
  });

  useEffect(() => {
    const p = parseFloat(principal) || 0;
    const r = parseFloat(rate) || 0;
    const t = parseFloat(tenure) || 0;
    
    const months = tenureType === 'years' ? t * 12 : t;

    if (p > 0 && r > 0 && months > 0) {
      setResult(calculateEMI(p, r, months));
    } else {
      setResult({ emi: 0, totalInterest: 0, totalPayment: 0, schedule: [] });
    }
  }, [principal, rate, tenure, tenureType]);

  const faqs = [
    { question: "How is EMI calculated?", answer: "EMI is calculated using the formula: EMI = [P × R × (1+R)^N] / [(1+R)^N - 1], where P is Principal, R is monthly interest rate, and N is the number of months." },
    { question: "What is a good loan tenure?", answer: "A shorter tenure means higher EMIs but lower total interest paid. A longer tenure means lower EMIs but higher total interest paid. Choose based on your monthly repayment capacity." },
    { question: "What is an amortization schedule?", answer: "An amortization schedule is a complete table of periodic loan payments, showing the amount of principal and the amount of interest that comprise each payment until the loan is paid off at the end of its term." },
  ];

  const formula = (
    <div className="text-center font-mono text-lg">
      EMI = [P × R × (1+R)<sup>N</sup>] / [(1+R)<sup>N</sup> - 1]
      <div className="text-sm mt-2 text-muted font-sans">Where: P = Principal, R = Monthly Interest Rate, N = Tenure in Months</div>
    </div>
  );

  const formatCurrency = (val: number) => {
    return `${currency}${val.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const chartData = {
    labels: ['Principal', 'Total Interest'],
    datasets: [
      {
        data: [parseFloat(principal) || 0, result.totalInterest],
        backgroundColor: ['#4f46e5', '#06b6d4'],
        borderWidth: 0,
      },
    ],
  };

  return (
    <CalcLayout 
      title="EMI Calculator" 
      description="Calculate your Equated Monthly Installment (EMI) for home loans, car loans, or personal loans. Get total interest, payment breakdown, and full amortization schedule."
      formula={formula}
      faqs={faqs}
      breadcrumbs={[{ label: 'EMI Calculator' }]}
      adSlotTop="LEADERBOARD_TOP_SLOT"
      adSlotBottom="RECTANGLE_BOTTOM_SLOT"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
        <div className="lg:col-span-5 space-y-4">
          <div className="flex flex-col mb-4">
            <label className="text-sm font-semibold text-text mb-1">Currency</label>
            <select 
              value={currency} 
              onChange={(e) => setCurrency(e.target.value)}
              className="px-4 py-3 rounded-lg border border-muted/30 bg-surface text-text focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <option value="$">USD ($)</option>
              <option value="₹">INR (₹)</option>
              <option value="€">EUR (€)</option>
              <option value="£">GBP (£)</option>
              <option value="Rs ">PKR (Rs)</option>
            </select>
          </div>

          <NumberInput 
            label="Principal Amount"
            value={principal}
            onChange={setPrincipal}
            placeholder="10000"
            suffix={currency}
          />
          <NumberInput 
            label="Interest Rate (% p.a.)"
            value={rate}
            onChange={setRate}
            placeholder="5"
            suffix="%"
          />
          
          <div>
             <div className="flex justify-between items-center mb-1">
                <label className="text-sm font-semibold text-text">Loan Tenure</label>
                <div className="bg-muted/10 p-1 rounded flex text-xs">
                  <button 
                    className={`px-2 py-1 rounded ${tenureType === 'years' ? 'bg-surface shadow-sm text-accent font-medium' : 'text-muted'}`}
                    onClick={() => setTenureType('years')}
                  >Years</button>
                  <button 
                    className={`px-2 py-1 rounded ${tenureType === 'months' ? 'bg-surface shadow-sm text-accent font-medium' : 'text-muted'}`}
                    onClick={() => setTenureType('months')}
                  >Months</button>
                </div>
             </div>
             <NumberInput 
                label=""
                value={tenure}
                onChange={setTenure}
                placeholder="5"
                suffix={tenureType}
              />
          </div>
        </div>

        <div className="lg:col-span-7">
          {result.emi > 0 ? (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <ResultCard 
                  title="Monthly EMI"
                  value={formatCurrency(result.emi)}
                  variant="accent"
                />
                <ResultCard 
                  title="Total Interest"
                  value={formatCurrency(result.totalInterest)}
                  variant="accent2"
                />
                <ResultCard 
                  title="Total Payment"
                  value={formatCurrency(result.totalPayment)}
                  variant="default"
                />
              </div>
              <div className="h-64 mt-8 flex justify-center">
                 <div className="w-64 h-64">
                   <Chart type="pie" data={chartData} options={{ maintainAspectRatio: false }} />
                 </div>
              </div>
            </div>
          ) : (
            <div className="h-full border-2 border-dashed border-muted/20 rounded-xl flex items-center justify-center text-muted p-8 text-center min-h-[300px]">
              Enter loan details to calculate your EMI and view the chart.
            </div>
          )}
        </div>
      </div>

      {result.schedule.length > 0 && (
        <div className="mt-12 overflow-x-auto">
          <h3 className="text-xl font-heading font-semibold mb-4">Amortization Schedule</h3>
          <div className="max-h-96 overflow-y-auto rounded-xl border border-muted/20">
            <table className="w-full text-left border-collapse">
              <thead className="sticky top-0 bg-surface shadow-sm">
                <tr className="bg-muted/5 border-b border-muted/20">
                  <th className="py-3 px-4 font-semibold text-sm">Month</th>
                  <th className="py-3 px-4 font-semibold text-sm">Payment</th>
                  <th className="py-3 px-4 font-semibold text-sm">Principal</th>
                  <th className="py-3 px-4 font-semibold text-sm">Interest</th>
                  <th className="py-3 px-4 font-semibold text-sm">Balance</th>
                </tr>
              </thead>
              <tbody>
                {result.schedule.map((row) => (
                  <tr key={row.month} className="border-b border-muted/10 hover:bg-muted/5 transition-colors">
                    <td className="py-3 px-4 text-sm">{row.month}</td>
                    <td className="py-3 px-4 text-sm">{formatCurrency(row.payment)}</td>
                    <td className="py-3 px-4 text-sm">{formatCurrency(row.principal)}</td>
                    <td className="py-3 px-4 text-sm">{formatCurrency(row.interest)}</td>
                    <td className="py-3 px-4 text-sm">{formatCurrency(row.balance)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </CalcLayout>
  );
}
