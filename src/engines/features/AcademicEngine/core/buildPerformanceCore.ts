import type { Course } from "../../../../types";
import type {
  AcademicMetrics,
} from "../types";

import type {
  PerformanceCore,
} from "./types";

export function buildPerformanceCore(
  courses: Course[],
  metrics: AcademicMetrics

): PerformanceCore {



  const scores = [
    {
      name: "Completion",
      value: metrics.completionRate,
    },

    {
      name: "Progress",
      value: metrics.averageProgress,
    },

    {
      name: "Productivity",
      value: metrics.productivityScore,
    },

    {
      name: "Consistency",
      value:
        metrics.studyConsistency === "Strong"
          ? 100
          : metrics.studyConsistency === "Moderate"
          ? 70
          : 40,
    },

    {
      name: "Forecast GPA",
      value:
        metrics.forecastGPA * 25,
    },

    {
      name: "Overall",
      value:
        metrics.overallScore,
    },

  ] as const;


const strongestMetric =

  [...scores].sort(
    (a, b) =>
      b.value - a.value

  )[0].name;


const weakestMetric =
  [...scores].sort(
    (a, b) =>

      a.value - b.value

  )[0].name;


  const atRiskCourses =
  courses.filter(course => course.progress < 60);


const overallStrength =

  `Strongest area: ${strongestMetric}`;

const overallWeakness =

  `Needs improvement: ${weakestMetric}`;


return {

  strongestMetric,

  weakestMetric,

  overallStrength,

  overallWeakness,

  atRiskCourses,

};

}