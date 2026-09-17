import type { Assignment } from "../../../types";

import type { AssignmentMetrics } from "./models/AssignmentMetrics"

import type { EngineModel } from "../../core/models/EngineModel";

import type { RuleResult }
from "../../core/models/RuleResult";


export interface AssignmentSummary {

    total: number;

    active: number;

    completed: number;

    overdue: number;

    highPriority: number;

}



export interface AssignmentFilterGroup {

    label: string;

    assignments: Assignment[];

}

export interface AssignmentFilters {

    all: AssignmentFilterGroup;

    active: AssignmentFilterGroup;

    completed: AssignmentFilterGroup;

    overdue: AssignmentFilterGroup;

    highPriority: AssignmentFilterGroup;

}





export interface AssignmentInsight 
    extends RuleResult {}


export interface AssignmentInsights {

    items: AssignmentInsight[];

}




export interface AssignmentDisplaySection {

    id: string;

    title: string;

    count: number;

    assignments: Assignment[];

    emptyMessage?: string;

}


export interface AssignmentDisplayModel {

    sections: AssignmentDisplaySection[];

    totalVisible: number;

}



export interface AssignmentModel
    extends EngineModel<

        AssignmentMetrics,

        Assignment,

        AssignmentFilters,

        AssignmentInsights

    > {}























// export interface TimelineGroup {

//     id: string;

//     title: string;

//     count: number;

//     assignments: Assignment[];

// }

// export interface AssignmentTimeline {

//     overdue: TimelineGroup;

//     today: TimelineGroup;

//     thisWeek: TimelineGroup;

//     upcoming: TimelineGroup;

//     completed: TimelineGroup;

// }
















// export interface AssignmentModel {

//     stats: MetricCardModel[];

//     metrics: AssignmentMetrics;

//     filters: AssignmentFilters;

//     timeline: TimelineModel<Assignment>;

//     insights: AssignmentInsights;

//     display: DisplayModel<Assignment>;

// }