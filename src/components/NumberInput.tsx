import React, { InputHTMLAttributes } from 'react';

interface NumberInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  label: string;
  value: number | string;
  onChange: (value: string) => void;
  suffix?: string;
  error?: string;
  hint?: string;
}

export default function NumberInput({
  label,
  value,
  onChange,
  suffix,
  error,
  hint,
  ...props
}: NumberInputProps) {
  return (
    <div className="flex flex-col mb-4">
      {label && (
        <label className="form-label">
          {label}
          {hint && <span className="ml-1 font-normal text-muted2 text-xs">({hint})</span>}
        </label>
      )}
      <div className="relative">
        <input
          type="number"
          inputMode="decimal"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`form-input text-lg pr-14 ${
            error
              ? 'border-danger focus:border-danger'
              : ''
          }`}
          style={{
            background: 'var(--surface2)',
            border: `2px solid ${error ? 'var(--danger)' : 'var(--border)'}`,
          }}
          {...props}
        />
        {suffix && (
          <span
            className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold pointer-events-none"
            style={{ color: 'var(--muted)' }}
          >
            {suffix}
          </span>
        )}
      </div>
      {error && (
        <span className="text-danger text-xs mt-1.5 font-medium">{error}</span>
      )}
    </div>
  );
}
