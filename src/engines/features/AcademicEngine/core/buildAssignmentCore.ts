import type { Assignment } from "../../../../types";

import type {
    AssignmentCore,
} from "./types";

export function buildAssignmentCore(

    assignments: Assignment[]

): AssignmentCore {

    const completedAssignmentsList =
        assignments.filter(
            assignment => assignment.completed
        );

    const activeAssignmentsList =
        assignments.filter(
            assignment => !assignment.completed
        );

    const overdueAssignmentsList =
        activeAssignmentsList.filter(
            assignment =>
                new Date(assignment.dueDate) <
                new Date()
        );

    const upcomingAssignments =
        activeAssignmentsList
            .filter(
                assignment =>
                    new Date(assignment.dueDate) >=
                    new Date()
            )
            .sort(
                (a, b) =>
                    new Date(a.dueDate).getTime()
                    -
                    new Date(b.dueDate).getTime()
            );

    const mostUrgentAssignment =
        upcomingAssignments.length
            ? upcomingAssignments[0]
            : null;
            

    const completedAssignments = completedAssignmentsList.length;
    const activeAssignments = activeAssignmentsList.length;        
    const overdueAssignments = overdueAssignmentsList.length;
    


            
    return {

        mostUrgentAssignment,
        
        overdueAssignments,
       
        completedAssignments,

        activeAssignments,

    };

}