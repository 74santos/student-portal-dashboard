import type {
  Assignment,
  Course,
  Activity,
} from "../../../types";

import {
  getCompletionRate,
  getOverdueAssignments,
  getActiveAssignments,
  getCompletedAssignments,
} from "../../../utils/analytics";

import {
  calculateForecastGPA,
} from "../../../utils/gpaForecast";

export function calculateCompletion(
  assignments: Assignment[]
) {
  return getCompletionRate(assignments);
}

export function calculateActiveAssignment (
  assignments: Assignment[]
) {
  return getActiveAssignments(assignments);
}

export function calculateOverdue(
  assignments: Assignment[]
) {
  return getOverdueAssignments(assignments);
}

export function calculateCompletedAssignment (
   assignments: Assignment[]
) {
   return getCompletedAssignments(assignments);
}

export function calculateAverageProgress(
  courses: Course[]
) {
  if (courses.length === 0) return 0;

  return Math.round(
    courses.reduce(
      (sum, course) => sum + course.progress,
      0
    ) / courses.length
  );
}

export function calculateForecast(
  assignments: Assignment[],
  courses: Course[],
  activities: Activity[]
) {
  return Number(
    calculateForecastGPA(
      assignments,
      courses,
      activities
    )
  );
}