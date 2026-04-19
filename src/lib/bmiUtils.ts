export function calculateBMI(weight: number, height: number, unit: 'metric' | 'imperial'): number {
  if (weight <= 0 || height <= 0) return 0;
  let bmi = 0;
  if (unit === 'metric') {
    // weight in kg, height in cm
    const heightInMeters = height / 100;
    bmi = weight / (heightInMeters * heightInMeters);
  } else {
    // weight in lbs, height in inches
    bmi = (weight / (height * height)) * 703;
  }
  return Number(bmi.toFixed(1));
}

export function getBMICategory(bmi: number): { category: string; color: 'success' | 'warning' | 'danger' | 'accent' | 'default' } {
  if (bmi <= 0) return { category: '', color: 'default' };
  if (bmi < 18.5) return { category: 'Underweight', color: 'accent' };
  if (bmi >= 18.5 && bmi < 25) return { category: 'Normal weight', color: 'success' };
  if (bmi >= 25 && bmi < 30) return { category: 'Overweight', color: 'warning' };
  return { category: 'Obese', color: 'danger' };
}

export function getHealthyWeightRange(height: number, unit: 'metric' | 'imperial'): { min: string; max: string } {
  if (height <= 0) return { min: '0', max: '0' };
  
  if (unit === 'metric') {
    const heightInMeters = height / 100;
    const min = (18.5 * (heightInMeters * heightInMeters)).toFixed(1);
    const max = (24.9 * (heightInMeters * heightInMeters)).toFixed(1);
    return { min, max };
  } else {
    const min = ((18.5 * (height * height)) / 703).toFixed(1);
    const max = ((24.9 * (height * height)) / 703).toFixed(1);
    return { min, max };
  }
}
