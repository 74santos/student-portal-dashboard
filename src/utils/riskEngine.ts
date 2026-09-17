import type {
  Assignment,
  Course,
  CourseRisk,
} from "../types";

export function calculateCourseRisks(
  courses: Course[],
  assignments: Assignment[]
): CourseRisk[] {

  return courses.map((course) => {

    const courseAssignments =
      assignments.filter(
        (a) =>
          a.courseId === course.id
      );

    const overdue =
      courseAssignments.filter(
        (a) =>
          !a.completed &&
          new Date(a.dueDate) <
            new Date()
      ).length;

    const completionRate =
      courseAssignments.length > 0
        ? (
            courseAssignments.filter(
              (a) => a.completed
            ).length /
            courseAssignments.length
          ) * 100
        : 100;

    let score = 100;

    score -= overdue * 20;

    score -=
      (100 - course.progress) *
      0.4;

    score -=
      (100 - completionRate) *
      0.3;

    score =
      Math.max(
        0,
        Math.round(score)
      );

    let risk:
      | "low"
      | "medium"
      | "high";

    if (score < 50) {

      risk = "high";

    } else if (
      score < 75
    ) {

      risk = "medium";

    } else {

      risk = "low";
    }

    let reason =
      "Course performance is stable.";

    let recommendation =
      "Maintain current pace.";

    if (risk === "high") {

      reason =
        `${overdue} overdue assignments and low course progress.`;

      recommendation =
        "Prioritize this course and schedule additional study sessions.";
    }

    if (risk === "medium") {

      reason =
        "Progress is slowing.";

      recommendation =
        "Focus on upcoming assignments this week.";
    }

    return {
      courseId: course.id,
      courseName: course.name,
      risk,
      score,
      reason,
      recommendation,
    };
  });
}