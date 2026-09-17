import type { Assignment } from "../../../../types";

import { getAssignmentStatus } from "../../../../utils/date";


export function getTodayAssignments (
    assignments: Assignment[]
): Assignment[] {

    return assignments.filter(

        assignment =>

            !assignment.completed &&

            getAssignmentStatus(
                assignment.dueDate
            ) === "today"

    );
}

export function getThisWeekAssignments(
    assignments: Assignment[]
): Assignment[] {

    return assignments.filter(

        assignment =>

            !assignment.completed &&

            getAssignmentStatus(
                assignment.dueDate
            ) === "upcoming"

    )
}


export function getUpcomingAssignments(
    assignments: Assignment[]
): Assignment[] {

    return assignments.filter(

        assignment =>

            !assignment.completed &&

            getAssignmentStatus(
                assignment.dueDate
            ) === "normal"

    )
}


export function getActiveAssignments(
    assignments: Assignment[]
): Assignment[] {

    return assignments.filter(

        assignment => !assignment.completed

    );

}

export function getCompletedAssignments(
    assignments: Assignment[]
): Assignment[] {

    return assignments.filter(

        assignment => assignment.completed

    );

}

export function getOverdueAssignments(
    assignments: Assignment[]
): Assignment[] {

    return assignments.filter(

        assignment =>

            !assignment.completed &&

            getAssignmentStatus(
                assignment.dueDate
            ) === "overdue"

    );

}

export function getHighPriorityAssignments(
    assignments: Assignment[]
): Assignment[] {

    return assignments.filter(

        assignment =>

            !assignment.completed &&

            assignment.priority === "high"

    );

}


export function countActiveAssignments(
    assignments: Assignment[]
): number {

    return getActiveAssignments(
        assignments
    ).length;

}

export function countCompletedAssignments(
    assignments: Assignment[]
): number {

    return getCompletedAssignments(
        assignments
    ).length;

}

export function countOverdueAssignments(
    assignments: Assignment[]
): number {

    return getOverdueAssignments(
        assignments
    ).length;

}

export function countHighPriorityAssignments(
    assignments: Assignment[]
): number {

    return getHighPriorityAssignments(
        assignments
    ).length;

}





export function sortAssignments(
    assignments: Assignment[]
): Assignment[] {

    const priorityOrder = {
        overdue: 0,
        today: 1,
        upcoming: 2,
        normal: 3,
    };

    return [...assignments].sort((a, b) => {

        if (a.completed && !b.completed) return 1;

        if (!a.completed && b.completed) return -1;

        const aStatus = getAssignmentStatus(a.dueDate);
        const bStatus = getAssignmentStatus(b.dueDate);

        return priorityOrder[aStatus] - priorityOrder[bStatus];

    });

}