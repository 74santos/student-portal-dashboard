import type {
  Assignment,
  Course,
} from "../types";

import {
  getOverdueAssignments,
  getCompletionRate,
} from "./analytics";

export type Recommendation = {
  title: string;
  message: string;
  priority:
    | "high"
    | "medium"
    | "low";
};

export function generateRecommendations(
  assignments: Assignment[],
  courses: Course[]
) {

  const recommendations: Recommendation[] = [];

  const overdue =
    getOverdueAssignments(
      assignments
    );

  const completionRate =
    getCompletionRate(
      assignments
    );

  if (overdue > 0) {

    recommendations.push({
      title: "Urgent Deadlines",
      message: `Complete ${overdue} overdue assignment${
        overdue > 1 ? "s" : ""
      } first.`,
      priority: "high",
    });
  }

  if (completionRate < 70) {

    recommendations.push({
      title: "Increase Completion Rate",
      message:
        "Focus on finishing pending assignments this week.",
      priority: "medium",
    });
  }

  const lowCourses =
    courses.filter(
      (c) => c.progress < 50
    );

  if (lowCourses.length > 0) {

    recommendations.push({
      title: "Course Improvement",
      message: `Increase study time for ${lowCourses[0].name}.`,
      priority: "medium",
    });
  }

  if (
    overdue === 0 &&
    completionRate >= 80
  ) {

    recommendations.push({
      title: "Great Progress",
      message:
        "Excellent work. Maintain your current pace.",
      priority: "low",
    });
  }

  return recommendations;
}