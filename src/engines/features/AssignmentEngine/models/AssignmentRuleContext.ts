import type { Assignment } from "../../../../types";

import type { AssignmentMetrics } from "./AssignmentMetrics";

import type { TimelineModel } from "../../../core/models/TimelineModel";

export interface AssignmentRuleContext {

    assignments: Assignment[];

    metrics: AssignmentMetrics;

    timeline: TimelineModel<Assignment>;

}




// metrics: AssignmentMetrics;