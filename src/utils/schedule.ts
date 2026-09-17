import type { Assignment } from "../types";


export function getUpcomingAssignments(
  assignments: Assignment[]
): Assignment[] {
  const now = new Date();

  return [...assignments]
    .filter(
      (assignment) =>
        !assignment.completed
    )
    .filter(
      (assignment) =>
        !isNaN(
          new Date(
            assignment.dueDate
          ).getTime()
        )
    )
    .filter(
      (assignment) =>
        new Date(
          assignment.dueDate
        ) >= now
    )
    .sort(
      (a, b) =>
        new Date(a.dueDate).getTime() -
        new Date(b.dueDate).getTime()
    );
}