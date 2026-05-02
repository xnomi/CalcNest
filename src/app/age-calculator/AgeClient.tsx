"use client";

import React, { useState, useEffect } from 'react';
import CalcLayout from '@/components/CalcLayout';
import ResultCard from '@/components/ResultCard';
import dayjs from 'dayjs';

export default function AgeClient() {
  const [dob, setDob] = useState<string>('');
  
  const [age, setAge] = useState<{years: number, months: number, days: number} | null>(null);
  const [nextBirthday, setNextBirthday] = useState<number | null>(null);
  const [dayOfWeek, setDayOfWeek] = useState<string>('');
  const [hoursLived, setHoursLived] = useState<number>(0);
  const [zodiac, setZodiac] = useState<string>('');
  
  const getZodiacSign = (day: number, month: number) => {
    if ((month == 1 && day <= 19) || (month == 12 && day >= 22)) return "Capricorn";
    if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) return "Aquarius";
    if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) return "Pisces";
    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return "Aries";
    if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) return "Taurus";
    if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) return "Gemini";
    if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) return "Cancer";
    if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) return "Leo";
    if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) return "Virgo";
    if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) return "Libra";
    if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) return "Scorpio";
    if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) return "Sagittarius";
    return "";
  }

  useEffect(() => {
    if (!dob) {
      setAge(null);
      return;
    }

    const birthDate = dayjs(dob);
    const today = dayjs();

    if (birthDate.isValid() && birthDate.isBefore(today)) {
      const years = today.diff(birthDate, 'year');
      const birthDateThisYear = birthDate.add(years, 'year');
      const months = today.diff(birthDateThisYear, 'month');
      const birthDateThisMonth = birthDateThisYear.add(months, 'month');
      const days = today.diff(birthDateThisMonth, 'day');

      setAge({ years, months, days });

      const nextBday = dayjs(`${today.year()}-${birthDate.month() + 1}-${birthDate.date()}`);
      if (nextBday.isBefore(today, 'day') || nextBday.isSame(today, 'day')) {
         setNextBirthday(nextBday.add(1, 'year').diff(today, 'day'));
      } else {
         setNextBirthday(nextBday.diff(today, 'day'));
      }

      setDayOfWeek(birthDate.format('dddd'));
      setHoursLived(today.diff(birthDate, 'hour'));
      setZodiac(getZodiacSign(birthDate.date(), birthDate.month() + 1));
    } else {
      setAge(null);
    }
  }, [dob]);

  const faqs = [
    { question: "How does the age calculator work?", answer: "It takes your date of birth and calculates the exact time difference between that date and today's date, breaking it down into years, months, and days." },
    { question: "Can I find out the day of the week I was born?", answer: "Yes! Once you enter your date of birth, our calculator will tell you exactly which day of the week you were born on." },
    { question: "Does it account for leap years?", answer: "Yes, our age calculator uses standard calendar algorithms that accurately account for leap years." }
  ];

  return (
    <CalcLayout 
      title="Age Calculator" 
      description="Enter your date of birth to find your exact age in years, months, and days. Discover fun facts: hours lived, days until next birthday, zodiac sign, and more."
      faqs={faqs}
      breadcrumbs={[{ label: 'Age Calculator' }]}
      adSlotTop="LEADERBOARD_TOP_SLOT"
      adSlotBottom="RECTANGLE_BOTTOM_SLOT"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-4 space-y-4">
          <div className="flex flex-col mb-4">
            <label className="text-sm font-semibold text-text mb-1">Date of Birth</label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              max={dayjs().format('YYYY-MM-DD')}
              className="w-full px-4 py-3 rounded-lg border border-muted/30 bg-surface text-text text-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
            />
          </div>
        </div>

        <div className="md:col-span-8">
          {age ? (
            <div className="space-y-6 animate-in fade-in duration-500">
              <div className="bg-accent/10 border border-accent/20 p-6 sm:p-8 rounded-2xl text-center">
                <h3 className="text-sm font-medium text-accent mb-2">Exact Age</h3>
                <div className="text-4xl sm:text-5xl font-heading font-bold text-accent mb-2">
                  {age.years} <span className="text-2xl font-sans font-normal text-text">years</span> 
                </div>
                <div className="text-2xl font-heading font-bold text-text">
                  {age.months} <span className="text-lg font-sans font-normal text-muted">months</span>, {age.days} <span className="text-lg font-sans font-normal text-muted">days</span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <ResultCard title="Next Birthday" value={nextBirthday?.toString()} subtitle="days" variant="accent2" />
                <ResultCard title="Born On" value={dayOfWeek} variant="default" />
                <ResultCard title="Zodiac Sign" value={zodiac} variant="default" />
                <ResultCard title="Hours Lived" value={hoursLived.toLocaleString()} variant="success" />
              </div>
            </div>
          ) : (
            <div className="h-full border-2 border-dashed border-muted/20 rounded-xl flex items-center justify-center text-muted p-8 text-center min-h-[250px]">
              Select your date of birth to reveal your exact age and fun facts!
            </div>
          )}
        </div>
      </div>
    </CalcLayout>
  );
}
