import type { Course } from "../../../../types";

import type { CourseMetrics } from "../models/CourseMetrics";
import type { TimelineModel } from "../../../core/models/TimelineModel";

export interface CourseRuleContext {

    courses: Course[];

    metrics: CourseMetrics;

    timeline: TimelineModel<Course>;

}