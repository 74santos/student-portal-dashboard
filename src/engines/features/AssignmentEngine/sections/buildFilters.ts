import type { Assignment } from "../../../../types";

import type {
    AssignmentFilters,
} from "../types";

import {
    getActiveAssignments,
    getCompletedAssignments,
    getOverdueAssignments,
    getHighPriorityAssignments,
} from "../utils/assignmentHelpers";

export function buildFilters(

    assignments: Assignment[]

): AssignmentFilters {

    return {

        all: {

            label: "All",

            assignments,

        },

        active: {

            label: "Active",

            assignments:
                getActiveAssignments(assignments),

        },

        completed: {

            label: "Completed",

            assignments:
                getCompletedAssignments(assignments),

        },

        overdue: {

            label: "Overdue",

            assignments:
                getOverdueAssignments(assignments),

        },

        highPriority: {

            label: "High Priority",

            assignments:
                getHighPriorityAssignments(assignments),

        },

    };

}