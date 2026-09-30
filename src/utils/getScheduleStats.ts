import type {
  Assignment,
  Course,
  Activity,
} from "../types";

export function getScheduleStats(
  _courses: Course[],
  assignments: Assignment[],
  _activities: Activity[]
) {
  const upcomingAssignments = assignments.filter(
    (assignment) =>
      !assignment.completed &&
      new Date(assignment.dueDate) >= new Date()
  ).length;

  return {
    todaysClasses: 0,
    upcomingAssignments,
    studyHours: 0,
  };
}