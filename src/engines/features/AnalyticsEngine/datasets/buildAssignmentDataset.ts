import type { Assignment } from "../../../../types";
import type { AssignmentCompletionDataset } from "../types";

export function buildAssignmentDataset(
    assignments: Assignment[]
): AssignmentCompletionDataset {

    const completed =
        assignments.filter(a => a.completed).length;

    const active =
        assignments.filter(a => !a.completed).length;

    const overdue =
        assignments.filter(a =>
            !a.completed &&
            new Date(a.dueDate) < new Date()
        ).length;

    return {

        completed,

        active,

        overdue,

    };

}