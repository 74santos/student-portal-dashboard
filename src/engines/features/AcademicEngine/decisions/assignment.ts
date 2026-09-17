import type {
  AcademicDecision,
  AcademicSnapshot,
} from "../types";

export function assignmentDecisions(
  snapshot: AcademicSnapshot
): AcademicDecision[] {

  const metrics = snapshot.metrics;

  const decisions: AcademicDecision[] = [];

  if (metrics.overdueAssignments > 0) {

    decisions.push({

      id: crypto.randomUUID(),

      type: "warning",

      priority: "critical",

      title: "Complete overdue work",

      description:
        `${metrics.overdueAssignments} overdue assignment${
          metrics.overdueAssignments > 1
            ? "s"
            : ""
        } found.`,

      action:
        "Complete overdue assignments today.",

    });

  }

  if (metrics.workloadLevel === "Heavy") {

    decisions.push({

      id: crypto.randomUUID(),

      type: "warning",

      priority: "critical",

      title: "Heavy workload",

      description:
        "Several assignments require attention.",

      action:
        "Break work into smaller study sessions.",

    });

  }

  return decisions;

}