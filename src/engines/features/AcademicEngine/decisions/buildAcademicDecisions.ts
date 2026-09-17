import type {
  AcademicDecision,
  AcademicAnalysis,
} from "../types";

import type {
  AcademicCoreAnalysis,
} from "../core/types";



export function buildAcademicDecisions(
  analysis: AcademicAnalysis,
  core: AcademicCoreAnalysis,

): AcademicDecision[] {

  const decisions: AcademicDecision[] = [];

  // 1. CRITICAL RISK DECISION
  if (analysis.academicStanding === "Needs Attention" || analysis.momentum === "Declining") {
    decisions.push({
      id: crypto.randomUUID(),
      type: "warning",
      priority: "critical",
      title: "Immediate Academic Attention Required",
      description: "Your academic performance is declining and requires urgent action.",
      action: "Review weakest course immediately",
    });
  }

  // 2. OVERDUE ASSIGNMENTS DECISION
  if (core.overdueAssignments > 3) {
    decisions.push({
      id: crypto.randomUUID(),
      type: "warning",
      priority: "high",
      title: "Backlog of Assignments",
      description: `${core.overdueAssignments} assignments are overdue.`,
      action: "Complete overdue assignments first",
    });
  }

  // 3. GOAL PROGRESS DECISION
  if (analysis.goalStatus === "Behind") {
    decisions.push({
      id: crypto.randomUUID(),
      type: "recommendation",
      priority: "high",
      title: "Behind on Academic Goals",
      description: "You are currently behind your target GPA trajectory.",
      action: "Increase weekly study hours",
    });
  }

  // 4. PRODUCTIVITY DECISION
  if (analysis.consistency === "Needs Work") {
    decisions.push({
      id: crypto.randomUUID(),
      type: "recommendation",
      priority: "medium",
      title: "Low Study Consistency",
      description: "Your study habits are inconsistent.",
      action: "Establish daily study routine",
    });
  }

  // 5. DEFAULT POSITIVE DECISION
  if (
    analysis.academicStanding === "Strong" &&
    analysis.goalStatus !== "Behind"
  ) {
    decisions.push({
      id: crypto.randomUUID(),
      type: "success",
      priority: "low",
      title: "Stable Academic Performance",
      description: "You are maintaining strong academic performance.",
      action: "Maintain current study habits",
    });
  }

  // 6. FALLBACK (if nothing triggered)
  if (decisions.length === 0) {
    decisions.push({
      id: crypto.randomUUID(),
      type: "recommendation",
      priority: "medium",
      title: "Stay on Track",
      description: "Continue following your current study plan.",
      action: "Review upcoming assignments",
    });
  }

  return decisions;
}