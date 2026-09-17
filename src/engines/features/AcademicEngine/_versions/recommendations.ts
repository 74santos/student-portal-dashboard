import type {
  AcademicSnapshot,
  AcademicRecommendation,
} from "./types";



export function generateRecommendations(

  snapshot: AcademicSnapshot

): AcademicRecommendation[] {

  const recommendations:
  AcademicRecommendation[] = [];



  if (
    snapshot.metrics.overdueAssignments > 0
) {

    recommendations.push({

        id: crypto.randomUUID(),

        title: "Complete overdue work",

        description:
            `You have ${snapshot.metrics.overdueAssignments} overdue assignments.`,

        priority: "high",

        category: "study"

    });

}



  if (
    snapshot.metrics.riskLevel === "High"
  ) {

    recommendations.push({

        id: crypto.randomUUID(),

        title: "Reduce academic risk",

        description:
            "Focus on your lowest-performing course this week.",

        priority: "high",

        category: "course"

    });

  }

  if (
    snapshot.metrics.forecastGPA <
    snapshot.student.targetGPA
)  {

  recommendations.push({

      id: crypto.randomUUID(),

      title: "Improve GPA",

      description:
          `Current forecast is ${snapshot.metrics.forecastGPA}.`,

      priority: "medium",

      category: "goal"

  });

}


  return recommendations;

  

}

