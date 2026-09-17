import type {
  AcademicDecision,
  AcademicSnapshot,
} from "../types";


export function productivityDecisions(

  snapshot: AcademicSnapshot

): AcademicDecision[] {

  const decisions:
  AcademicDecision[] = [];

  const metrics = snapshot.metrics;

  if (
      metrics.productivityScore < 50
  ) {

      decisions.push({

          id: crypto.randomUUID(),

          type: "warning",

          priority: "high",

          title: "Low Productivity",

          description: "Study activity has slowed.",

          action: "Schedule a focused study session."

      });

  }

  return decisions;

}