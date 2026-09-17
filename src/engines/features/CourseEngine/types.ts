import type { Course } from "../../../types";

import type { EngineModel } from "../../core/models/EngineModel";

import type { CourseMetrics } from "./models/CourseMetrics"


import type { RuleResult }
from "../../core/models/RuleResult";



export interface CourseSummary  extends CourseMetrics{}


export interface CourseFilters {

    total: number;

    active: number;

    nearly: number;

    completed: number;

    risk: number;

}

export interface CourseInsight 
    extends RuleResult {}
    

export interface CourseInsights {

  items: CourseInsight[];

}


export interface CourseModel
    extends EngineModel<

        CourseMetrics,

        Course,

        CourseFilters,

        CourseInsights

    > {}




















// export interface CourseModel {

//   summary: CourseSummary;

//   stats: MetricCardModel[];

//   filters: CourseFilters;

//   timeline: TimelineModel<Course>;

//   insights: CourseInsights;

//   display: DisplayModel<Course>;

// }