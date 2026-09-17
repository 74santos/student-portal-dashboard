import type {
  Course,
  Assignment,
} from "../../../../types";

export function calculateCoursePerformance(
  course: Course,
  assignments: Assignment[]
): number {

  const courseAssignments =
    assignments.filter(
      assignment =>
        assignment.courseId === course.id
    );

  const total =
    courseAssignments.length;

  const completed =
    courseAssignments.filter(
      assignment =>
        assignment.completed
    ).length;

  const completionRate =
    total > 0
      ? (completed / total) * 100
      : 100;

  return Math.round(
    course.progress * 0.6 +
    completionRate * 0.4
  );
}


export function getCoursePerformanceStatus(
  score: number
):
  | "Strong"
  | "Moderate"
  | "Needs Attention" {

  if (score >= 85) {
    return "Strong";
  }

  if (score >= 70) {
    return "Moderate";
  }

  return "Needs Attention";
}