

import type {
  AcademicInsight,
  AcademicAnalysis,
  AcademicMetrics,
} from "../types";

import type {
  AcademicCoreAnalysis,
} from "../core/types";

export interface InsightCollection {

  strengths: AcademicInsight[];

  weaknesses: AcademicInsight[];

}

export function buildInsights(

  analysis: AcademicAnalysis,

  metrics: AcademicMetrics,

  core: AcademicCoreAnalysis

): InsightCollection {


const strengths: AcademicInsight[] = [];
const weaknesses: AcademicInsight[] = [];


  // ---------- Strengths ----------

if (metrics.completionRate >= 90) {

  strengths.push({

      id: crypto.randomUUID(),

      type: "strength",

      title: "Excellent Completion",

      description:
          "Assignments are consistently completed on time.",

      confidence: 96,

      importance: "high",

  });

}

if (metrics.productivityScore >= 80) {

  strengths.push({

      id: crypto.randomUUID(),

      type: "strength",

      title: "High Productivity",

      description:
          "Study productivity is above average.",

      confidence: 90,

      importance: "medium",

  });

}

if (analysis.goalStatus === "Ahead") {

  strengths.push({

      id: crypto.randomUUID(),

      type: "achievement",

      title: "Ahead of Academic Goal",

      description:
          "You're exceeding your GPA target.",

      confidence: 95,

      importance: "high",

  });

}

if (metrics.riskLevel === "Low") {

  strengths.push({

    id: crypto.randomUUID(),

    type: "trend",

    title: "Low Academic Risk",

    description:
      "Current academic performance is stable.",

    confidence: 88,

    importance: "medium",

  });

}

// ---------- Weaknesses ----------

if (metrics.riskLevel === "High") {

  weaknesses.push({

      id: crypto.randomUUID(),

      type: "warning",

      title: "Academic Risk",

      description:
          "Current performance indicates elevated academic risk.",

      confidence: 94,

      importance: "critical",

  });

}

if (core.weakestCourse) {

  weaknesses.push({

      id: crypto.randomUUID(),

      type: "warning",

      title: "Lowest Performing Course",

      description:
          `${core.weakestCourse.name} requires additional attention.`,

      confidence: 89,

      importance: "high",

  });

}


if (metrics.overdueAssignments > 0) {

  weaknesses.push({

      id: crypto.randomUUID(),

      type: "warning",

      title: "Overdue Work",

      description:
          `${metrics.overdueAssignments} assignment(s) are overdue.`,

      confidence: 98,

      importance: "critical",

  });

}

if (analysis.goalStatus === "Behind") {

  weaknesses.push({

    id: crypto.randomUUID(),

    type: "warning",

    title: "Behind Target GPA",

    description:
      "Current forecast is below your target GPA.",

    confidence: 89,

    importance: "high",

  });

}

return {

  strengths,

  weaknesses,

};


}