import type { CourseSummary } from "../types";

import type { CourseMetrics } from "../models/CourseMetrics";



export function buildSummary(

  metrics: CourseMetrics

): CourseSummary {

  return metrics;

}