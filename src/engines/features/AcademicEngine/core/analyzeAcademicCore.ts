import type { Assignment,  Course } from "../../../../types";

import type {  AcademicMetrics } from "../types";

import type { AcademicCoreAnalysis } from "./types"

import { buildCourseCore } from "./buildCourseCore";

import { buildAssignmentCore } from "./buildAssignmentCore";

import { buildPerformanceCore } from "./buildPerformanceCore";

import { buildTrendCore } from "./buildTrendCore";


export function analyzeAcademicCore(
  metrics: AcademicMetrics,
  courses: Course[],
  assignments: Assignment[]
): AcademicCoreAnalysis {

  const course = buildCourseCore(courses, assignments);
  const assignment = buildAssignmentCore(assignments);
  const performance = buildPerformanceCore(courses, metrics);
  const trend = buildTrendCore(metrics);



  return {

    ...course,

    ...assignment,

    ...performance,

    ...trend,
    
  };
}










// more explicit 

// Course Core
// weakestCourse: course.weakestCourse,
// strongestCourse: course.strongestCourse,
// completedCourses: course.completedCourses,
// averageProgress: course.averageProgress,
// totalCourses: course.totalCourses,

// Assignment Core
// mostUrgentAssignment: assignment.mostUrgentAssignment,
// overdueAssignments: assignment.overdueAssignments,
// activeAssignments: assignment.activeAssignments,
// completedAssignments: assignment.completedAssignments,

// Performance Core
// strongestMetric: performance.strongestMetric,
// weakestMetric: performance.weakestMetric,
// overallStrength: performance.overallStrength,
// overallWeakness: performance.overallWeakness,
// atRiskCourses: performance.atRiskCourses,

// Trend Core
// improving: trend.improving,
// declining: trend.declining,
// stable: trend.stable,
// momentumDirection: trend.momentumDirection,
// trendSummary: trend.trendSummary,