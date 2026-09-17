import type {
  AcademicDecision,
  AcademicSnapshot,
} from "../types";

export function goalDecisions(
  snapshot: AcademicSnapshot
): AcademicDecision[] {

  const decisions: AcademicDecision[] = [];

  const forecastGPA = snapshot.metrics.forecastGPA;
  const targetGPA = snapshot.student.targetGPA;

  if (
    forecastGPA >= targetGPA
  ) {

    decisions.push({

      id: crypto.randomUUID(),
    
      type: "success",
    
      priority: "medium",
    
      title: "Target GPA Progress",
    
      description:
        forecastGPA >= targetGPA
          ? `Forecast GPA: ${forecastGPA}`
          : `${(
              targetGPA - forecastGPA
            ).toFixed(1)} GPA points remaining.`,
    
      action:
        forecastGPA >= targetGPA
          ? "Maintain your current study habits."
          : "Complete upcoming assignments consistently.",
    
    });

  } else {

    const gap =
      (
        targetGPA - forecastGPA
      ).toFixed(1);

    decisions.push({

      id: crypto.randomUUID(),

      type: "achievement",

      priority: "medium",

      title: "Continue Progress",

      description:
        `${gap} GPA points remain.`,

      action:
        "Complete upcoming assignments consistently.",

    });

  }

  return decisions;

}