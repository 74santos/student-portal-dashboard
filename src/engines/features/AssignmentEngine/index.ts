import type { Assignment } from "../../../types";

import type { AssignmentModel, } from "./types";

import { buildStats } from "./sections/buildStats";

import { calculateMetrics } from "./metrics/calculateMetrics"
import { buildFilters}  from "./sections/buildFilters"
import { buildTimeline } from "./sections/buildTimeline";
import { buildInsights } from "./sections/buildInsights";
import { buildAssignmentDisplay } from "./sections/buildAssignmentDisplay"

import type { AssignmentRuleContext } from "../AssignmentEngine/models/AssignmentRuleContext";

export function buildAssignmentModel(

    assignments: Assignment[],
 
): AssignmentModel {
    const metrics =
      calculateMetrics(assignments)
   
    const timeline =
      buildTimeline(assignments)

    const context: AssignmentRuleContext = {
        assignments,
        metrics,
        timeline,
    };

    const display =
        buildAssignmentDisplay(

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
            buildFilters(assignments),

        timeline,

        insights:
            buildInsights( context ),

        display,

    };

}