export interface Course {
  id: string;
  name: string;
  grade: string;
  credits: number;
}

export interface Semester {
  id: string;
  name: string;
  courses: Course[];
}

const gradePoints4: Record<string, number> = {
  'A+': 4.0, 'A': 4.0, 'A-': 3.7,
  'B+': 3.3, 'B': 3.0, 'B-': 2.7,
  'C+': 2.3, 'C': 2.0, 'C-': 1.7,
  'D+': 1.3, 'D': 1.0, 'F': 0.0
};

const gradePoints5: Record<string, number> = {
  'A+': 5.0, 'A': 5.0, 'A-': 4.7,
  'B+': 4.3, 'B': 4.0, 'B-': 3.7,
  'C+': 3.3, 'C': 3.0, 'C-': 2.7,
  'D+': 2.3, 'D': 2.0, 'F': 0.0
};

export function calculateSemesterGPA(courses: Course[], scale: '4.0' | '5.0'): { gpa: number; totalCredits: number } {
  let totalPoints = 0;
  let totalCredits = 0;
  
  const map = scale === '4.0' ? gradePoints4 : gradePoints5;

  courses.forEach(course => {
    if (course.grade && course.credits > 0) {
      const points = map[course.grade] || 0;
      totalPoints += points * course.credits;
      totalCredits += course.credits;
    }
  });

  return {
    gpa: totalCredits > 0 ? totalPoints / totalCredits : 0,
    totalCredits
  };
}

export function calculateCumulativeGPA(semesters: Semester[], scale: '4.0' | '5.0'): number {
  let totalPoints = 0;
  let totalCredits = 0;
  
  const map = scale === '4.0' ? gradePoints4 : gradePoints5;

  semesters.forEach(sem => {
    sem.courses.forEach(course => {
      if (course.grade && course.credits > 0) {
        const points = map[course.grade] || 0;
        totalPoints += points * course.credits;
        totalCredits += course.credits;
      }
    });
  });

  return totalCredits > 0 ? totalPoints / totalCredits : 0;
}
