import type {
  Assignment,
  Course,
  Insight,
} from "../types";

import {
  getOverdueAssignments,
  getCompletionRate,
} from "./analytics";

export function generateInsights(
  assignments: Assignment[],
  courses: Course[], 
) {

  const insights: Insight[] = [];

  const overdue =
    getOverdueAssignments(
      assignments
    );

  const completionRate =
    getCompletionRate(
      assignments
    );

  if (overdue > 0) {

    insights.push({
      title: "Overdue Assignments",
    
      message:
        `You have ${overdue} overdue assignment${
          overdue > 1 ? "s" : ""
        }.`,
    
      priority: "critical",
    
      recommendation:
        "Complete overdue work before starting new assignments.",
    });
  }

  if (completionRate >= 80) {

    insights.push({
      title: "Strong Completion Rate",
    
      message:
        `You have completed ${completionRate}% of assignments.`,
    
      priority: "good",
    
      recommendation:
        "Maintain your current study pace.",
    });

  } else if (
    completionRate < 50
  ) {

    insights.push({
      title: "Low Completion Rate",
    
      message:
        `Only ${completionRate}% of assignments are completed.`,
    
      priority: "warning",
    
      recommendation:
        "Focus on completing pending assignments this week.",
    });
  }

  const avgProgress =
    courses.length > 0
      ? courses.reduce(
          (sum, course) =>
            sum + course.progress,
          0
        ) / courses.length
      : 0;

    if (avgProgress >= 75) {

      insights.push({
        title: "Course Progress Strong",
    
        message:
          `Average course progress is ${Math.round(avgProgress)}%.`,
    
        priority: "good",
    
        recommendation:
          "Keep maintaining progress across your courses.",
      });
    
    } else if (
    avgProgress < 50
  ) {

    insights.push({
      title: "Course Progress Alert",
    
      message:
        "Average course progress is below 50%",
    
      priority: "warning",
    
      recommendation:
        "Schedule dedicated study sessions for weaker courses.",
    });
  }

  return insights;
}