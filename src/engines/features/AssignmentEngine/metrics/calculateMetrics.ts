
import type { Assignment } from "../../../../types";
import type { AssignmentMetrics } from "../models/AssignmentMetrics";

import {countActiveAssignments, countCompletedAssignments, countOverdueAssignments, getTodayAssignments, getUpcomingAssignments,getThisWeekAssignments, countHighPriorityAssignments } from "../utils/assignmentHelpers"

export function calculateMetrics(
    assignments: Assignment[]
): AssignmentMetrics {

    return {

        total: assignments.length,

        active: countActiveAssignments(assignments),

        completed: countCompletedAssignments(assignments),

        overdue: countOverdueAssignments(assignments),

        today: getTodayAssignments(assignments).length,

        upcoming:
            getUpcomingAssignments(assignments).length +
            getThisWeekAssignments(assignments).length,

        highPriority:
            countHighPriorityAssignments(assignments),

    };

}