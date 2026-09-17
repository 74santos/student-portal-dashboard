import type {
  Assignment,
  Course,
  Activity,
} from "../types";

import {
  getCompletionRate,
  getOverdueAssignments,
} from "./analytics";

export function calculateForecastGPA(
  assignments: Assignment[],
  courses: Course[],
  activities: Activity[]
) {

  const completionRate =
    getCompletionRate(
      assignments
    );

  const overdue =
    getOverdueAssignments(
      assignments
    );

  const avgProgress =
    courses.length > 0
      ? courses.reduce(
          (sum, course) =>
            sum + course.progress,
          0
        ) / courses.length
      : 0;

  const activityScore =
    Math.min(
      activities.length,
      20
    );

  let gpa =
    2.5 +
    completionRate * 0.01 +
    avgProgress * 0.01 +
    activityScore * 0.01 -
    overdue * 0.05;

  gpa =
    Math.max(
      0,
      Math.min(4.0, gpa)
    );

  return gpa.toFixed(2);
}