"use client";

import React, { useState, useEffect } from 'react';
import CalcLayout from '@/components/CalcLayout';
import { unitCategories, convertUnit } from '@/lib/unitUtils';
import { ArrowLeftRight } from 'lucide-react';

export default function UnitClient() {
  const [category, setCategory] = useState<string>('length');
  const [fromUnit, setFromUnit] = useState<string>('m');
  const [toUnit, setToUnit] = useState<string>('ft');
  
  const [fromValue, setFromValue] = useState<string>('1');
  const [toValue, setToValue] = useState<string>('');

  useEffect(() => {
    // Reset units when category changes
    const units = unitCategories[category]?.units;
    if (units) {
      setFromUnit(units[0].id);
      setToUnit(units[1] ? units[1].id : units[0].id);
    }
  }, [category]);

  useEffect(() => {
    const val = parseFloat(fromValue);
    if (!isNaN(val)) {
      const res = convertUnit(val, fromUnit, toUnit, category);
      setToValue(res.toString());
    } else {
      setToValue('');
    }
  }, [fromValue, fromUnit, toUnit, category]);

  const handleToValueChange = (valStr: string) => {
    setToValue(valStr);
    const val = parseFloat(valStr);
    if (!isNaN(val)) {
      const res = convertUnit(val, toUnit, fromUnit, category);
      setFromValue(res.toString());
    } else {
      setFromValue('');
    }
  };

  const handleSwap = () => {
    const tempUnit = fromUnit;
    setFromUnit(toUnit);
    setToUnit(tempUnit);
    
    const tempVal = fromValue;
    setFromValue(toValue);
    setToValue(tempVal);
  };

  const faqs = [
    { question: "How accurate is the conversion?", answer: "Our unit converter uses high-precision math to ensure accuracy up to 10 decimal places, making it suitable for both everyday use and scientific calculations." },
    { question: "Can I convert backwards?", answer: "Yes! Our converter is bidirectional. You can type in either the 'From' or 'To' box, and the other box will update instantly." }
  ];

  return (
    <CalcLayout 
      title="Unit Converter" 
      description="Convert between units of length (km, miles, feet), weight (kg, lbs), temperature (°C, °F, K), area, volume, speed, and digital data. Bidirectional and instant."
      faqs={faqs}
      breadcrumbs={[{ label: 'Unit Converter' }]}
      adSlotTop="LEADERBOARD_TOP_SLOT"
      adSlotBottom="RECTANGLE_BOTTOM_SLOT"
    >
      <div className="flex overflow-x-auto border-b border-muted/20 mb-8 pb-2 gap-2 scrollbar-hide">
        {Object.keys(unitCategories).map(cat => (
          <button
            key={cat}
            className={`px-4 py-2 font-medium text-sm whitespace-nowrap rounded-lg transition-colors ${category === cat ? 'bg-accent text-white' : 'bg-muted/10 text-text hover:bg-muted/20'}`}
            onClick={() => setCategory(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="flex-1 w-full bg-surface p-4 rounded-xl border border-muted/20 focus-within:ring-2 focus-within:ring-accent focus-within:border-transparent transition-all">
          <select 
            value={fromUnit} 
            onChange={(e) => setFromUnit(e.target.value)}
            className="w-full mb-4 px-3 py-2 rounded-md border border-muted/30 bg-bg focus:outline-none focus:ring-1 focus:ring-accent"
          >
            {unitCategories[category]?.units.map(u => (
              <option key={u.id} value={u.id}>{u.name}</option>
            ))}
          </select>
          <input
            type="number"
            inputMode="decimal"
            value={fromValue}
            onChange={(e) => setFromValue(e.target.value)}
            className="w-full text-3xl font-heading font-bold bg-transparent border-none focus:outline-none"
            placeholder="0"
          />
        </div>

        <button 
          onClick={handleSwap}
          className="p-3 bg-muted/10 hover:bg-muted/20 rounded-full transition-colors flex-shrink-0"
          aria-label="Swap units"
        >
          <ArrowLeftRight className="w-6 h-6 text-accent" />
        </button>

        <div className="flex-1 w-full bg-accent/5 p-4 rounded-xl border border-accent/20 focus-within:ring-2 focus-within:ring-accent focus-within:border-transparent transition-all">
          <select 
            value={toUnit} 
            onChange={(e) => setToUnit(e.target.value)}
            className="w-full mb-4 px-3 py-2 rounded-md border border-accent/30 bg-bg focus:outline-none focus:ring-1 focus:ring-accent"
          >
            {unitCategories[category]?.units.map(u => (
              <option key={u.id} value={u.id}>{u.name}</option>
            ))}
          </select>
          <input
            type="number"
            inputMode="decimal"
            value={toValue}
            onChange={(e) => handleToValueChange(e.target.value)}
            className="w-full text-3xl font-heading font-bold bg-transparent border-none focus:outline-none text-accent"
            placeholder="0"
          />
        </div>
      </div>
    </CalcLayout>
  );
}
