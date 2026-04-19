type ConversionFactor = number | ((val: number) => number);

interface UnitDefinition {
  id: string;
  name: string;
  toBase: ConversionFactor;
  fromBase: ConversionFactor;
}

export const unitCategories: Record<string, { base: string; units: UnitDefinition[] }> = {
  length: {
    base: 'm',
    units: [
      { id: 'm', name: 'Meter', toBase: 1, fromBase: 1 },
      { id: 'cm', name: 'Centimeter', toBase: 0.01, fromBase: 100 },
      { id: 'mm', name: 'Millimeter', toBase: 0.001, fromBase: 1000 },
      { id: 'km', name: 'Kilometer', toBase: 1000, fromBase: 0.001 },
      { id: 'in', name: 'Inch', toBase: 0.0254, fromBase: 39.3701 },
      { id: 'ft', name: 'Foot', toBase: 0.3048, fromBase: 3.28084 },
      { id: 'yd', name: 'Yard', toBase: 0.9144, fromBase: 1.09361 },
      { id: 'mi', name: 'Mile', toBase: 1609.34, fromBase: 0.000621371 },
    ]
  },
  weight: {
    base: 'kg',
    units: [
      { id: 'kg', name: 'Kilogram', toBase: 1, fromBase: 1 },
      { id: 'g', name: 'Gram', toBase: 0.001, fromBase: 1000 },
      { id: 'mg', name: 'Milligram', toBase: 0.000001, fromBase: 1000000 },
      { id: 'lbs', name: 'Pound', toBase: 0.453592, fromBase: 2.20462 },
      { id: 'oz', name: 'Ounce', toBase: 0.0283495, fromBase: 35.274 },
    ]
  },
  temperature: {
    base: 'c',
    units: [
      { id: 'c', name: 'Celsius', toBase: (c) => c, fromBase: (c) => c },
      { id: 'f', name: 'Fahrenheit', toBase: (f) => (f - 32) * 5/9, fromBase: (c) => (c * 9/5) + 32 },
      { id: 'k', name: 'Kelvin', toBase: (k) => k - 273.15, fromBase: (c) => c + 273.15 },
    ]
  },
  area: {
    base: 'sqm',
    units: [
      { id: 'sqm', name: 'Square Meter', toBase: 1, fromBase: 1 },
      { id: 'sqkm', name: 'Square Kilometer', toBase: 1000000, fromBase: 0.000001 },
      { id: 'sqft', name: 'Square Foot', toBase: 0.092903, fromBase: 10.7639 },
      { id: 'acre', name: 'Acre', toBase: 4046.86, fromBase: 0.000247105 },
      { id: 'hectare', name: 'Hectare', toBase: 10000, fromBase: 0.0001 },
    ]
  },
  volume: {
    base: 'l',
    units: [
      { id: 'l', name: 'Liter', toBase: 1, fromBase: 1 },
      { id: 'ml', name: 'Milliliter', toBase: 0.001, fromBase: 1000 },
      { id: 'gal', name: 'US Gallon', toBase: 3.78541, fromBase: 0.264172 },
      { id: 'floz', name: 'US Fluid Ounce', toBase: 0.0295735, fromBase: 33.814 },
    ]
  },
  speed: {
    base: 'mps',
    units: [
      { id: 'mps', name: 'Meter per second', toBase: 1, fromBase: 1 },
      { id: 'kmph', name: 'Kilometer per hour', toBase: 0.277778, fromBase: 3.6 },
      { id: 'mph', name: 'Mile per hour', toBase: 0.44704, fromBase: 2.23694 },
      { id: 'knot', name: 'Knot', toBase: 0.514444, fromBase: 1.94384 },
    ]
  },
  data: {
    base: 'b',
    units: [
      { id: 'b', name: 'Byte', toBase: 1, fromBase: 1 },
      { id: 'kb', name: 'Kilobyte', toBase: 1024, fromBase: 1/1024 },
      { id: 'mb', name: 'Megabyte', toBase: 1024**2, fromBase: 1/(1024**2) },
      { id: 'gb', name: 'Gigabyte', toBase: 1024**3, fromBase: 1/(1024**3) },
      { id: 'tb', name: 'Terabyte', toBase: 1024**4, fromBase: 1/(1024**4) },
    ]
  }
};

export function convertUnit(value: number, fromUnitId: string, toUnitId: string, category: string): number {
  const cat = unitCategories[category];
  if (!cat) return value;

  const fromUnit = cat.units.find(u => u.id === fromUnitId);
  const toUnit = cat.units.find(u => u.id === toUnitId);

  if (!fromUnit || !toUnit) return value;

  let baseValue = 0;
  if (typeof fromUnit.toBase === 'function') {
    baseValue = fromUnit.toBase(value);
  } else {
    baseValue = value * fromUnit.toBase;
  }

  let finalValue = 0;
  if (typeof toUnit.fromBase === 'function') {
    finalValue = toUnit.fromBase(baseValue);
  } else {
    finalValue = baseValue * toUnit.fromBase;
  }

  // Handle minor floating point inaccuracy
  return Number(finalValue.toPrecision(10)) / 1;
}
