import type { Course } from "../../../types";

import type { CourseModel } from "./types";
import type { CourseRuleContext } from "./models/CourseRuleContext";

import { calculateMetrics } from "./metrics/calculateMetrics";

import { buildSummary } from "./sections/buildSummary";
import { buildStats } from "./sections/buildStats";
import { buildTimeline } from "./sections/buildTimeline";
import { buildFilters } from "./sections/buildFilters";
import { buildInsights } from "./sections/buildInsights";
import { buildCourseDisplay } from "./sections/buildCourseDisplay";

export function buildCourseModel(

    courses: Course[]

): CourseModel {

    //
    // Metrics
    //

    const metric =
        calculateMetrics(courses);

    //
    // Summary
    //

    const metrics =
        buildSummary(metric);

    //
    // Timeline
    //

    const timeline =
        buildTimeline(courses);

    //
    // Context
    //

    const context: CourseRuleContext = {
        courses,
        metrics,
        timeline,
    };

    const display =
    buildCourseDisplay(

        timeline,

        {
            search: "",
            filter: "all",
        }

    );

    

    return {

        metrics,

        stats:
            buildStats(context),

        filters:
            buildFilters(courses),

        timeline,

        insights:
            buildInsights(context),

        display,

    };

}