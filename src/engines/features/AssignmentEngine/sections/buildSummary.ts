import type { Assignment } from "../../../../types";

import type {
    AssignmentSummary,
} from "../types";

import {
    countCompletedAssignments,
    countActiveAssignments,
    countOverdueAssignments,
    countHighPriorityAssignments,
} from "../utils/assignmentHelpers";

export function buildSummary(

    assignments: Assignment[]

): AssignmentSummary {

    return {

        total:
            assignments.length,

        active:
            countActiveAssignments(assignments),

        completed:
            countCompletedAssignments(assignments),

        overdue:
            countOverdueAssignments(assignments),

        highPriority:
            countHighPriorityAssignments(assignments),

    };

}