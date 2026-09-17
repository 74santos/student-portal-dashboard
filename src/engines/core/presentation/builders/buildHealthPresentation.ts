
import type { HealthPresentation } from "../models/HealthPresentation";


export function buildHealthPresentation(

  score: number

): HealthPresentation {

  return {

      score,

      label: `${score}%`,

      color:

          score >= 90
              ? "success"
              : score >= 75
              ? "primary"
              : score >= 60
              ? "warning"
              : "danger",

  };

}