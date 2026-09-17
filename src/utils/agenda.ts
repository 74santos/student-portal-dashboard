import type {
  Assignment,
} from "../types";

function startOfDay(date: Date) {

  const d = new Date(date);

  d.setHours(0, 0, 0, 0);

  return d;
}

export function getTodaysAssignments(
  assignments: Assignment[]
) {

  const today =
    startOfDay(new Date());

  return assignments.filter(
    (assignment) => {

      const due =
        startOfDay(
          new Date(
            assignment.dueDate
          )
        );

      return (
        due.getTime() ===
        today.getTime()
      );
    }
  );
}

export function getUpcomingAssignments(
  assignments: Assignment[]
) {

  const today =
    startOfDay(new Date());

  return assignments.filter(
    (assignment) => {

      const due =
        startOfDay(
          new Date(
            assignment.dueDate
          )
        );

      return due > today;
    }
  );
}

export function getOverdueAssignments(
  assignments: Assignment[]
) {

  const today =
    startOfDay(new Date());

  return assignments.filter(
    (assignment) => {

      if (assignment.completed)
        return false;

      const due =
        startOfDay(
          new Date(
            assignment.dueDate
          )
        );

      return due < today;
    }
  );
}