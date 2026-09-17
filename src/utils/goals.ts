import type {
  Assignment,
  Course,
  Goal,
} from "../types";

// import {
//   getCompletionRate,
// } from "./analytics";

export function generateGoals(
  assignments: Assignment[],
  courses: Course[],
  productivityScore: number
): Goal[] {

  const completedAssignments =
    assignments.filter(
      (a) => a.completed
    ).length;

  const avgProgress =
    courses.length > 0
      ? Math.round(
          courses.reduce(
            (sum, course) =>
              sum + course.progress,
            0
          ) / courses.length
        )
      : 0;

  return [

    {
      id: "assignments",
      title: "Assignments Completed",
      current:
        completedAssignments,
      target: 10,
    },

    {
      id: "courses",
      title: "Course Progress",
      current:
        avgProgress,
      target: 80,
    },

    {
      id: "productivity",
      title: "Productivity Score",
      current:
        productivityScore,
      target: 80,
    },

  ];
}