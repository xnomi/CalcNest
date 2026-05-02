"use client";

import React, { useState, useEffect } from 'react';
import CalcLayout from '@/components/CalcLayout';
import NumberInput from '@/components/NumberInput';
import ResultCard from '@/components/ResultCard';
import { calculateBMI, getBMICategory, getHealthyWeightRange } from '@/lib/bmiUtils';

export default function BMIClient() {
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [feet, setFeet] = useState<string>('');
  const [inches, setInches] = useState<string>('');

  const [bmi, setBmi] = useState<number>(0);
  const [category, setCategory] = useState<string>('');
  const [color, setColor] = useState<"accent" | "accent2" | "success" | "warning" | "danger" | "default">('default');
  const [healthyRange, setHealthyRange] = useState<{min: string, max: string}>({min: '0', max: '0'});

  useEffect(() => {
    const w = parseFloat(weight);
    let h = 0;
    
    if (unit === 'metric') {
      h = parseFloat(height);
    } else {
      const f = parseFloat(feet) || 0;
      const i = parseFloat(inches) || 0;
      h = (f * 12) + i;
    }

    if (w > 0 && h > 0) {
      const calculatedBmi = calculateBMI(w, h, unit);
      const cat = getBMICategory(calculatedBmi);
      const range = getHealthyWeightRange(h, unit);
      
      setBmi(calculatedBmi);
      setCategory(cat.category);
      setColor(cat.color);
      setHealthyRange(range);
    } else {
      setBmi(0);
      setCategory('');
      setColor('default');
      setHealthyRange({min: '0', max: '0'});
    }
  }, [weight, height, feet, inches, unit]);

  const faqs = [
    { question: "What is a normal BMI?", answer: "A normal BMI ranges from 18.5 to 24.9. This range is considered healthy for most adults." },
    { question: "How is BMI calculated?", answer: "BMI is calculated by dividing your weight in kilograms by your height in meters squared (kg/m²). For pounds and inches, it is (lbs/in²) × 703." },
    { question: "Is BMI accurate?", answer: "BMI is a useful general screening tool but it doesn't measure body fat directly. It may not be accurate for athletes, pregnant women, or the elderly." },
    { question: "What should I do if my BMI is high?", answer: "If your BMI falls into the overweight or obese category, it's recommended to consult with a healthcare provider for personalized advice." },
    { question: "Can children use this BMI calculator?", answer: "This standard BMI calculator is meant for adults (age 20+). Children and teens require a different calculation that accounts for age and sex percentiles." }
  ];

  const formula = (
    <div className="text-center font-mono text-lg">
      <div>Metric: BMI = weight(kg) / [height(m)]²</div>
      <div className="mt-2">Imperial: BMI = 703 × weight(lbs) / [height(in)]²</div>
    </div>
  );

  return (
    <CalcLayout 
      title="BMI Calculator" 
      description="Check your Body Mass Index (BMI) to find out if you're at a healthy weight. Enter your height and weight below — supports metric and imperial units."
      formula={formula}
      faqs={faqs}
      breadcrumbs={[{ label: 'BMI Calculator' }]}
      adSlotTop="LEADERBOARD_TOP_SLOT"
      adSlotBottom="RECTANGLE_BOTTOM_SLOT"
    >
      <div className="flex justify-center mb-8">
        <div className="bg-muted/10 p-1 rounded-lg flex gap-1">
          <button 
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${unit === 'metric' ? 'bg-surface shadow-sm text-accent' : 'text-muted hover:text-text'}`}
            onClick={() => setUnit('metric')}
          >
            Metric (kg, cm)
          </button>
          <button 
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${unit === 'imperial' ? 'bg-surface shadow-sm text-accent' : 'text-muted hover:text-text'}`}
            onClick={() => setUnit('imperial')}
          >
            Imperial (lbs, ft/in)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="space-y-4">
            <NumberInput 
              label={`Weight (${unit === 'metric' ? 'kg' : 'lbs'})`}
              value={weight}
              onChange={setWeight}
              placeholder="e.g. 70"
            />

            {unit === 'metric' ? (
              <NumberInput 
                label="Height (cm)"
                value={height}
                onChange={setHeight}
                placeholder="e.g. 175"
              />
            ) : (
              <div className="grid grid-cols-2 gap-4">
                <NumberInput 
                  label="Height (ft)"
                  value={feet}
                  onChange={setFeet}
                  placeholder="e.g. 5"
                />
                <NumberInput 
                  label="Height (in)"
                  value={inches}
                  onChange={setInches}
                  placeholder="e.g. 9"
                />
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col justify-center">
          {bmi > 0 ? (
            <div className="space-y-4 animate-in fade-in duration-500">
              <ResultCard 
                title="Your BMI is"
                value={bmi.toString()}
                subtitle={category}
                variant={color}
              />
              <div className="bg-surface p-4 rounded-xl border border-muted/20 text-center text-sm text-muted">
                Healthy weight for your height: <br/>
                <strong className="text-text">{healthyRange.min} - {healthyRange.max} {unit === 'metric' ? 'kg' : 'lbs'}</strong>
              </div>
            </div>
          ) : (
            <div className="h-full border-2 border-dashed border-muted/20 rounded-xl flex items-center justify-center text-muted p-8 text-center min-h-[200px]">
              Enter your weight and height to see your BMI result here.
            </div>
          )}
        </div>
      </div>
    </CalcLayout>
  );
}
