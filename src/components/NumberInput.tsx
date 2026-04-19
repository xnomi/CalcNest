import React, { InputHTMLAttributes } from 'react';

interface NumberInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  label: string;
  value: number | string;
  onChange: (value: string) => void;
  suffix?: string;
  error?: string;
}

export default function NumberInput({ label, value, onChange, suffix, error, ...props }: NumberInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="flex flex-col mb-4">
      <label className="text-sm font-semibold text-text mb-1">{label}</label>
      <div className="relative">
        <input
          type="number"
          inputMode="decimal"
          value={value}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border ${error ? 'border-danger focus:ring-danger' : 'border-muted/30 focus:ring-accent'} bg-surface text-text text-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all`}
          {...props}
        />
        {suffix && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted font-medium">
            {suffix}
          </span>
        )}
      </div>
      {error && <span className="text-danger text-sm mt-1">{error}</span>}
    </div>
  );
}
