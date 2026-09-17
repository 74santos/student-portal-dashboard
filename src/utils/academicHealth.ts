import type {
  Assignment,
  Course,
  Activity,
} from "../types";

import {
  getCompletionRate,
  getOverdueAssignments,
} from "./analytics";

export function calculateAcademicHealth(
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
      activities.length * 2,
      20
    );

  let health =
    completionRate * 0.45 +
    avgProgress * 0.35 +
    activityScore -
    overdue * 10;

  health =
    Math.max(
      0,
      Math.min(
        100,
        Math.round(health)
      )
    );

  return health;
}