import type {
  AcademicSnapshot,
  AcademicInsight,
} from "./types";

export function generateInsights(
  snapshot: AcademicSnapshot
): AcademicInsight[] {

  const insights: AcademicInsight[] = [];

  if (
    snapshot.metrics.overdueAssignments > 0
  ) {
  
    insights.push({
  
      id: crypto.randomUUID(),

      type: "warning",
  
      title:
        "Overdue Assignments",
  
      description:
        `You have ${snapshot.metrics.overdueAssignments} overdue assignment${
          snapshot.metrics.overdueAssignments > 1
            ? "s"
            : ""
        }.`,
  
      confidence: 60,

      importance:"critical",
  
    });
  
  }

  if (
    snapshot.metrics.riskLevel === "High"
  ) {
  
    insights.push({
  
      id: crypto.randomUUID(),

      type: "warning",
  
      title:
        "Academic Risk",
  
      description:
        "Your overall academic risk is high.",
  
      confidence:65,

      importance: "high",
  
    });
  
  }

  if (
    snapshot.metrics.forecastGPA >=
    snapshot.student.targetGPA
  ) {
  
    insights.push({
  
      id: crypto.randomUUID(),

      type: "achievement",
  
      title:
        "Goal Achieved",
  
      description:
        "You're on track to reach your target GPA.",
  
      confidence: 86 ,

      importance: "low",
  
    });
  
  }

  if (
    snapshot.metrics.productivityScore >= 85
  ) {
  
    insights.push({
  
      id: crypto.randomUUID(),

      type: "strength" ,
  
      title:  "Excellent Productivity",
  
      description:
        "Your productivity is consistently high.",
  
      confidence: 96,

      importance: "low",
  
    });
  
  }


  if (
    snapshot.weakestCourse
  ) {
  
    insights.push({

      id: crypto.randomUUID(),
  
      type: "trend",
  
      title: "Focus Course",
  
      description:
          `${snapshot.weakestCourse.name} currently requires additional attention.`,
  
      confidence: 82,

      importance: "medium",
  
  });
  
  }

  return insights;

}