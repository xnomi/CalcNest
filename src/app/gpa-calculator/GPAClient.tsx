"use client";

import React, { useState, useEffect } from 'react';
import CalcLayout from '@/components/CalcLayout';
import ResultCard from '@/components/ResultCard';
import { calculateSemesterGPA, calculateCumulativeGPA, Semester, Course } from '@/lib/gpaUtils';
import { Plus, Trash2 } from 'lucide-react';
import Chart from '@/components/Chart';

export default function GPAClient() {
  const [scale, setScale] = useState<'4.0' | '5.0'>('4.0');
  const [semesters, setSemesters] = useState<Semester[]>([
    {
      id: 'sem-1',
      name: 'Semester 1',
      courses: [
        { id: 'c1', name: '', grade: 'A', credits: 3 },
        { id: 'c2', name: '', grade: 'B+', credits: 3 },
        { id: 'c3', name: '', grade: 'A-', credits: 4 },
      ]
    }
  ]);

  const [cumulativeGpa, setCumulativeGpa] = useState<number>(0);
  const [gradeDistribution, setGradeDistribution] = useState<Record<string, number>>({});

  useEffect(() => {
    const cgpa = calculateCumulativeGPA(semesters, scale);
    setCumulativeGpa(cgpa);

    const dist: Record<string, number> = {};
    semesters.forEach(sem => {
      sem.courses.forEach(course => {
        if (course.grade && course.credits > 0) {
          const letter = course.grade.charAt(0);
          dist[letter] = (dist[letter] || 0) + 1;
        }
      });
    });
    setGradeDistribution(dist);
  }, [semesters, scale]);

  const addSemester = () => {
    setSemesters([
      ...semesters, 
      {
        id: `sem-${Date.now()}`,
        name: `Semester ${semesters.length + 1}`,
        courses: [
          { id: `c-${Date.now()}-1`, name: '', grade: 'A', credits: 3 },
          { id: `c-${Date.now()}-2`, name: '', grade: 'B', credits: 3 },
        ]
      }
    ]);
  };

  const removeSemester = (semId: string) => {
    setSemesters(semesters.filter(s => s.id !== semId));
  };

  const addCourse = (semId: string) => {
    setSemesters(semesters.map(sem => {
      if (sem.id === semId) {
        return {
          ...sem,
          courses: [...sem.courses, { id: `c-${Date.now()}`, name: '', grade: 'A', credits: 3 }]
        };
      }
      return sem;
    }));
  };

  const removeCourse = (semId: string, courseId: string) => {
    setSemesters(semesters.map(sem => {
      if (sem.id === semId) {
        return {
          ...sem,
          courses: sem.courses.filter(c => c.id !== courseId)
        };
      }
      return sem;
    }));
  };

  const updateCourse = (semId: string, courseId: string, field: keyof Course, value: string | number) => {
    setSemesters(semesters.map(sem => {
      if (sem.id === semId) {
        return {
          ...sem,
          courses: sem.courses.map(c => c.id === courseId ? { ...c, [field]: value } : c)
        };
      }
      return sem;
    }));
  };

  const grades = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'F'];

  const faqs = [
    { question: "What is the difference between a 4.0 and 5.0 scale?", answer: "A 4.0 scale is the standard unweighted scale where an A=4.0. A 5.0 scale is typically a weighted scale used in high schools where advanced classes (like AP or Honors) grant an extra grade point (A=5.0)." },
    { question: "How is Cumulative GPA calculated?", answer: "Cumulative GPA is calculated by dividing the total number of grade points earned across all semesters by the total number of credit hours attempted." }
  ];

  const chartData = {
    labels: Object.keys(gradeDistribution).sort(),
    datasets: [
      {
        label: 'Grade Distribution',
        data: Object.keys(gradeDistribution).sort().map(k => gradeDistribution[k]),
        backgroundColor: '#4f46e5',
        borderRadius: 4,
      }
    ]
  };

  return (
    <CalcLayout 
      title="GPA Calculator" 
      description="Calculate your semester and cumulative GPA easily. Supports both 4.0 and 5.0 scales."
      faqs={faqs}
    >
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-grow space-y-8">
          <div className="flex items-center gap-4 bg-muted/5 p-4 rounded-xl border border-muted/10">
            <span className="font-semibold text-text">Grading Scale:</span>
            <div className="bg-surface rounded-lg border border-muted/20 flex text-sm overflow-hidden">
              <button 
                className={`px-4 py-2 font-medium transition-colors ${scale === '4.0' ? 'bg-accent text-white' : 'text-text hover:bg-muted/10'}`}
                onClick={() => setScale('4.0')}
              >
                4.0 Scale
              </button>
              <button 
                className={`px-4 py-2 font-medium transition-colors ${scale === '5.0' ? 'bg-accent text-white' : 'text-text hover:bg-muted/10'}`}
                onClick={() => setScale('5.0')}
              >
                5.0 Scale
              </button>
            </div>
          </div>

          {semesters.map((sem) => {
            const { gpa } = calculateSemesterGPA(sem.courses, scale);

            return (
              <div key={sem.id} className="bg-surface border border-muted/20 rounded-2xl p-4 sm:p-6 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-heading font-bold text-accent">{sem.name}</h3>
                  <div className="flex items-center gap-4">
                    <div className="text-sm hidden sm:block">
                      <span className="text-muted">GPA:</span> <span className="font-bold text-text">{gpa.toFixed(2)}</span>
                    </div>
                    {semesters.length > 1 && (
                      <button onClick={() => removeSemester(sem.id)} className="text-muted hover:text-danger transition-colors p-1">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="grid grid-cols-12 gap-2 text-xs font-semibold text-muted uppercase tracking-wider mb-2 px-1">
                    <div className="col-span-5 sm:col-span-6">Course Name</div>
                    <div className="col-span-3 sm:col-span-3">Grade</div>
                    <div className="col-span-3 sm:col-span-2">Credits</div>
                    <div className="col-span-1"></div>
                  </div>

                  {sem.courses.map((course) => (
                    <div key={course.id} className="grid grid-cols-12 gap-2 items-center">
                      <div className="col-span-5 sm:col-span-6">
                        <input
                          type="text"
                          placeholder="Optional"
                          value={course.name}
                          onChange={(e) => updateCourse(sem.id, course.id, 'name', e.target.value)}
                          className="w-full px-3 py-2 bg-muted/5 border border-muted/20 rounded-lg text-sm focus:outline-none focus:border-accent"
                        />
                      </div>
                      <div className="col-span-3 sm:col-span-3">
                        <select
                          value={course.grade}
                          onChange={(e) => updateCourse(sem.id, course.id, 'grade', e.target.value)}
                          className="w-full px-1 sm:px-3 py-2 bg-muted/5 border border-muted/20 rounded-lg text-sm focus:outline-none focus:border-accent appearance-none text-center sm:text-left"
                        >
                          {grades.map(g => <option key={g} value={g}>{g}</option>)}
                        </select>
                      </div>
                      <div className="col-span-3 sm:col-span-2">
                        <input
                          type="number"
                          min="0"
                          step="0.5"
                          value={course.credits}
                          onChange={(e) => updateCourse(sem.id, course.id, 'credits', parseFloat(e.target.value) || 0)}
                          className="w-full px-2 sm:px-3 py-2 bg-muted/5 border border-muted/20 rounded-lg text-sm focus:outline-none focus:border-accent"
                        />
                      </div>
                      <div className="col-span-1 flex justify-center">
                        <button 
                          onClick={() => removeCourse(sem.id, course.id)} 
                          className="text-muted hover:text-danger p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}

                  <div className="flex justify-between items-center mt-4">
                    <button 
                      onClick={() => addCourse(sem.id)}
                      className="flex items-center gap-2 text-sm font-medium text-accent hover:text-accent2 transition-colors py-2"
                    >
                      <Plus className="w-4 h-4" /> Add Course
                    </button>
                    <div className="text-sm font-semibold sm:hidden">
                       GPA: {gpa.toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <button 
            onClick={addSemester}
            className="w-full py-4 border-2 border-dashed border-muted/30 rounded-2xl text-muted font-medium hover:border-accent hover:text-accent transition-colors flex items-center justify-center gap-2"
          >
            <Plus className="w-5 h-5" /> Add Another Semester
          </button>
        </div>

        <div className="w-full md:w-80 flex-shrink-0">
          <div className="sticky top-24 space-y-6">
            <ResultCard 
              title="Cumulative GPA" 
              value={cumulativeGpa.toFixed(2)} 
              variant="accent" 
            />
            
            {Object.keys(gradeDistribution).length > 0 && (
              <div className="bg-surface border border-muted/20 rounded-xl p-5 shadow-sm">
                <h4 className="text-sm font-semibold text-text mb-4 text-center">Grade Distribution</h4>
                <div className="h-48">
                  <Chart type="bar" data={chartData} options={{ maintainAspectRatio: false, plugins: { legend: { display: false } } }} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </CalcLayout>
  );
}
