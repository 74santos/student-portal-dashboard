import type {
  Assignment,
  Course,
  Activity,
} from "../types";

export function getScheduleStats(
  courses: Course[],
  assignments: Assignment[],
  activities: Activity[]
) {
  const upcomingAssignments = assignments.filter(
    assignment =>
      !assignment.completed &&
      new Date(assignment.dueDate) >= new Date()
  ).length;

  const studyHours = activities.reduce(
    (total, activity) => {
      // Only use this if Activity eventually stores duration/hours.
      return total;
    },
    0
  );

  return {
    todaysClasses: 0, // derive from actual schedule/class data
    upcomingAssignments,
    studyHours,
  };
}