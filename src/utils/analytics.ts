import type { Assignment }
from "../types";



export function getCompletionRate(
  assignments: Assignment[]
) {

  if (assignments.length === 0) {
    return 0;
  }

  const completed =
    assignments.filter(
      (a) => a.completed
    ).length;

  return Math.round(
    (completed / assignments.length) * 100
  );
}



export function getOverdueAssignments(
  assignments: Assignment[]
) {

  const today = new Date();

  today.setHours(0, 0, 0, 0);

  return assignments.filter(
    (assignment) => {

      if (assignment.completed) {
        return false;
      }

      const dueDate =
        new Date(assignment.dueDate);

      dueDate.setHours(0, 0, 0, 0);

      return dueDate < today;

    }
  ).length;

}



export function getCompletedAssignments(
  assignments: Assignment[]
) {

  return assignments.filter(
    (a) => a.completed
  ).length;

}


export function getActiveAssignments(
  assignments: Assignment[]
) {
  return (
    assignments.length
    - getCompletedAssignments(assignments)
    - getOverdueAssignments(assignments)
  );
}



export function getHighPriorityAssignments(
  assignments: Assignment[]
) {
  return assignments.filter(
    (a) => a.priority === "high" && !a.completed
  ).length;
}