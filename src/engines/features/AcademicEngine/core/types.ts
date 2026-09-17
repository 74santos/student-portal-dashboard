// core/types.ts

import type { Course, Assignment } from "../../../../types";



export interface CourseCore {

  weakestCourse: Course | null;

  strongestCourse: Course | null;

  averageProgress: number;

  totalCourses: number;

  completedCourses: number;

  rankings: CoursePerformance[];

}

export interface CoursePerformance {

  course: Course;

  score: number;

  status:
    | "Strong"
    | "Moderate"
    | "Needs Attention";

}





export interface AssignmentCore {

  mostUrgentAssignment: Assignment | null;

  overdueAssignments: number;

  activeAssignments: number;

  completedAssignments: number;

}


export interface PerformanceCore {

  strongestMetric:

    | "Completion"
    | "Progress"
    | "Productivity"
    | "Consistency"
    | "Forecast GPA"
    | "Overall";

  weakestMetric:

    | "Completion"
    | "Progress"
    | "Productivity"
    | "Consistency"
    | "Forecast GPA"
    | "Overall";

  overallStrength: string;
  atRiskCourses: Course [];
  overallWeakness: string;

}


export interface TrendCore {

  improving: boolean;

  declining: boolean;

  stable: boolean;

  momentumDirection:

    | "Improving"
    | "Stable"
    | "Declining";

 trendSummary: string;

}



export interface AcademicCoreAnalysis

  extends CourseCore,

          AssignmentCore,

          PerformanceCore,

          TrendCore {}