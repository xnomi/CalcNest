"use client";

import React, { useState } from 'react';
import CalcLayout from '@/components/CalcLayout';
import NumberInput from '@/components/NumberInput';
import ResultCard from '@/components/ResultCard';

export default function PercentageClient() {
  const [activeTab, setActiveTab] = useState(0);

  // Mode 0: What is X% of Y?
  const [val1, setVal1] = useState<string>('');
  const [val2, setVal2] = useState<string>('');
  
  // Mode 1: X is what % of Y?
  const [val3, setVal3] = useState<string>('');
  const [val4, setVal4] = useState<string>('');

  // Mode 2: % change from X to Y
  const [val5, setVal5] = useState<string>('');
  const [val6, setVal6] = useState<string>('');

  const calculateResult0 = () => {
    const x = parseFloat(val1);
    const y = parseFloat(val2);
    if (!isNaN(x) && !isNaN(y)) return (x / 100) * y;
    return null;
  };

  const calculateResult1 = () => {
    const x = parseFloat(val3);
    const y = parseFloat(val4);
    if (!isNaN(x) && !isNaN(y) && y !== 0) return (x / y) * 100;
    return null;
  };

  const calculateResult2 = () => {
    const x = parseFloat(val5);
    const y = parseFloat(val6);
    if (!isNaN(x) && !isNaN(y) && x !== 0) return ((y - x) / Math.abs(x)) * 100;
    return null;
  };

  const res0 = calculateResult0();
  const res1 = calculateResult1();
  const res2 = calculateResult2();

  const faqs = [
    { question: "How do I calculate percentage?", answer: "To calculate a percentage, divide the part by the whole and multiply by 100. For example, if you scored 80 out of 100, your percentage is (80/100) * 100 = 80%." },
    { question: "How do I find a percentage of a number?", answer: "Multiply the number by the percentage fraction. For example, 20% of 50 is (20/100) * 50 = 10." },
    { question: "How is percentage increase/decrease calculated?", answer: "Subtract the old value from the new value, divide by the absolute old value, and multiply by 100." }
  ];

  return (
    <CalcLayout 
      title="Percentage Calculator" 
      description="Calculate percentages three easy ways: find X% of Y, find what percentage X is of Y, or calculate the percentage change between two values."
      faqs={faqs}
      breadcrumbs={[{ label: 'Percentage Calculator' }]}
      adSlotTop="LEADERBOARD_TOP_SLOT"
      adSlotBottom="RECTANGLE_BOTTOM_SLOT"
    >
      <div className="flex border-b border-muted/20 mb-8 overflow-x-auto">
        <button 
          className={`px-4 py-3 font-medium text-sm whitespace-nowrap transition-colors ${activeTab === 0 ? 'border-b-2 border-accent text-accent' : 'text-muted hover:text-text'}`}
          onClick={() => setActiveTab(0)}
        >
          What is X% of Y?
        </button>
        <button 
          className={`px-4 py-3 font-medium text-sm whitespace-nowrap transition-colors ${activeTab === 1 ? 'border-b-2 border-accent text-accent' : 'text-muted hover:text-text'}`}
          onClick={() => setActiveTab(1)}
        >
          X is what % of Y?
        </button>
        <button 
          className={`px-4 py-3 font-medium text-sm whitespace-nowrap transition-colors ${activeTab === 2 ? 'border-b-2 border-accent text-accent' : 'text-muted hover:text-text'}`}
          onClick={() => setActiveTab(2)}
        >
          Percentage Change
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          {activeTab === 0 && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <NumberInput label="What is (%)" value={val1} onChange={setVal1} placeholder="e.g. 20" suffix="%" />
              <NumberInput label="of" value={val2} onChange={setVal2} placeholder="e.g. 150" />
            </div>
          )}
          {activeTab === 1 && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <NumberInput label="Value (X)" value={val3} onChange={setVal3} placeholder="e.g. 30" />
              <NumberInput label="is what % of (Y)" value={val4} onChange={setVal4} placeholder="e.g. 150" />
            </div>
          )}
          {activeTab === 2 && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <NumberInput label="From Value (Old)" value={val5} onChange={setVal5} placeholder="e.g. 100" />
              <NumberInput label="To Value (New)" value={val6} onChange={setVal6} placeholder="e.g. 120" />
            </div>
          )}
        </div>

        <div className="flex flex-col justify-center">
          {activeTab === 0 && res0 !== null && (
            <ResultCard title="Result" value={parseFloat(res0.toFixed(4)).toString()} variant="accent" />
          )}
          {activeTab === 1 && res1 !== null && (
            <ResultCard title="Result" value={`${parseFloat(res1.toFixed(4)).toString()}%`} variant="accent2" />
          )}
          {activeTab === 2 && res2 !== null && (
            <ResultCard 
              title={res2 >= 0 ? "Percentage Increase" : "Percentage Decrease"} 
              value={`${Math.abs(parseFloat(res2.toFixed(4))).toString()}%`} 
              variant={res2 >= 0 ? "success" : "danger"} 
            />
          )}

          {((activeTab === 0 && res0 === null) || 
            (activeTab === 1 && res1 === null) || 
            (activeTab === 2 && res2 === null)) && (
            <div className="h-full border-2 border-dashed border-muted/20 rounded-xl flex items-center justify-center text-muted p-8 text-center min-h-[150px]">
              Enter values to see the result.
            </div>
          )}
        </div>
      </div>
    </CalcLayout>
  );
}
