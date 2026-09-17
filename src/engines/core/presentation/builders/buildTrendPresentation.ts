import type { TrendPresentation } from "../models/TrendPresentation";



export function buildTrendPresentation(

  trend: number

): TrendPresentation {

  if (trend > 0)

      return {

          label: `+${trend}%`,

          color: "success",

          icon: "completion",

      };

  if (trend < 0)

      return {

          label: `${trend}%`,

          color: "danger",

          icon: "overdue",

      };

  return {

      label: "0%",

      color: "primary",

      icon: "courses",

  };

}