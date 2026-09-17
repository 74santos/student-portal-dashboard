import type {
  AcademicDecision,
  AcademicSnapshot,
} from "../types";

export function courseDecisions(
  snapshot: AcademicSnapshot
): AcademicDecision[] {

  const decisions: AcademicDecision[] = [];
  const {metrics, summary} = snapshot

  if (metrics.riskLevel === "High") {

    decisions.push({

      id: crypto.randomUUID(),

      type: "warning",

      priority: "high",

      title: "Academic Risk",

      description:
        "Overall academic performance has declined.",

      action:
        "Focus on your weakest course.",

    });

  }

  if (summary.weakestCourse) {

    decisions.push({

      id: crypto.randomUUID(),

      type: "warning",

      priority: "high",

      title: "Focus Area",

      description:
        `${summary.weakestCourse.name} has the lowest progress.`,

      action:
        "Schedule an additional study session.",

    });

  }

  return decisions;

}