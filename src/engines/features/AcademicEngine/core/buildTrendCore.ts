import type {  AcademicMetrics } from "../types";
import type {  TrendCore } from "./types";


export function buildTrendCore(

  metrics: AcademicMetrics

): TrendCore {

  const improving =  metrics.momentum === "Improving";
  const declining =  metrics.momentum === "Declining";
  const stable =  metrics.momentum === "Consistent";


  let trendSummary = "";

  if (improving) {
    
    trendSummary =
      "Academic performance is improving.";
  }

  else if (declining) {

    trendSummary =
      "Performance has started to decline.";

  }

  else {

    trendSummary =
      "Performance is remaining consistent.";

  }


  return {

    improving,

    declining,

    stable,

    momentumDirection:

      improving

        ? "Improving"

        : declining

        ? "Declining"

        : "Stable",

    trendSummary,

  };

}