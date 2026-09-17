import type {
  Course,
  Assignment,
} from "../types";

export function getCoursePerformance(
  course: Course,
  assignments: Assignment[]
) {

  const courseAssignments =
    assignments.filter(
      (a) =>
        a.courseId === course.id
    );

  const completed =
    courseAssignments.filter(
      (a) => a.completed
    ).length;

  const total =
    courseAssignments.length;

  const completionRate =
    total > 0
      ? (completed / total) * 100
      : 100;

  const score =
    Math.round(
      course.progress * 0.6 +
      completionRate * 0.4
    );

  return score;
}


export function getPerformanceStatus(
  score: number
) {

  if (score >= 80) {
    return "Excellent";
  }

  if (score >= 60) {
    return "Good";
  }

  if (score >= 40) {
    return "Needs Attention";
  }

  return "At Risk";
}