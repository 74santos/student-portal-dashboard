// utils/scheduleWorkload.ts

import type { Assignment } from "../types";

export type WorkloadDay = {
  day: string;
  count: number;
};

const days = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
];

export function buildWeeklyWorkload(
  assignments: Assignment[]
): WorkloadDay[] {

  return days.map((day) => {

    const count = assignments.filter(
      (assignment) => {

        const dueDay =
          new Date(
            assignment.dueDate
          ).toLocaleDateString(
            "en-US",
            {
              weekday: "short",
            }
          );

        return dueDay === day;
      }
    ).length;

    return {
      day,
      count,
    };
  });
}