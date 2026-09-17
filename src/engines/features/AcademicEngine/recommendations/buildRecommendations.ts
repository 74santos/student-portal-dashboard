import type {
  AcademicRecommendation,
  AcademicAnalysis,
} from "../types";

import type {
  AcademicCoreAnalysis,
} from "../core/types";

export function buildRecommendations(
  analysis: AcademicAnalysis,
  core: AcademicCoreAnalysis
): AcademicRecommendation[] {

  const recommendations: AcademicRecommendation[] = [];

  // 1. High Risk Rule
  if (analysis.academicStanding === "Needs Attention" || analysis.workload === "Heavy") {
    recommendations.push({
      id: crypto.randomUUID(),
      title: "Immediate Focus Required",
      description: `Focus on your weakest course: ${core.weakestCourse?.name ?? "N/A"}.`,
      priority: "high",
      category: "course",
    });
  }

  // 2. Goal Behind Rule
  if (analysis.goalStatus === "Behind") {
    recommendations.push({
      id: crypto.randomUUID(),
      title: "Catch Up on Goals",
      description: "Increase study time this week to close the GPA gap.",
      priority: "high",
      category: "goal",
    });
  }

  // 3. Workload Rule
  if (analysis.workload === "Heavy") {
    recommendations.push({
      id: crypto.randomUUID(),
      title: "Manage Workload",
      description: "Prioritize overdue assignments before starting new tasks.",
      priority: "medium",
      category: "study",
    });
  }

  // 4. Consistency Rule
  if (analysis.consistency === "Needs Work") {
    recommendations.push({
      id: crypto.randomUUID(),
      title: "Build Consistency",
      description: "Study at least 30 minutes daily to improve retention.",
      priority: "medium",
      category: "study",
    });
  }

  // 5. Strong Performance Rule
  if (analysis.academicStanding === "Strong" || analysis.academicStanding === "Excellent") {
    recommendations.push({
      id: crypto.randomUUID(),
      title: "Maintain Performance",
      description: "Continue your current study habits to sustain results.",
      priority: "low",
      category: "health",
    });
  }

  return recommendations;
}