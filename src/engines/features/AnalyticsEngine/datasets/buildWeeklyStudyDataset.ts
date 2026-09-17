

import { parseLocalDate } from "../../../../utils/date";

import type {  Assignment } from "../../../../types";
import type { WeeklyStudyPoint } from "../types";

export function buildWeeklyStudyDataset(
  
  assignments: Assignment[]
): WeeklyStudyPoint[] {
  const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const hoursMap = new Map<string, number>(
    dayNames.map((day) => [day, 0])
  );

  // Scheduled academic work from assignments
  (assignments || []).forEach((assignment) => {
    if (!assignment.startTime || !assignment.duration) return;

    const duration = Number(assignment.duration);

    if (!Number.isFinite(duration) || duration <= 0) return;

    try {
      const dateOnly = assignment.startTime.split("T")[0];
      const date = parseLocalDate(dateOnly);

      if (isNaN(date.getTime())) return;

      const dayIndex = date.getDay();
      const dayName =
        dayNames[dayIndex === 0 ? 6 : dayIndex - 1];

      const currentHours = hoursMap.get(dayName) ?? 0;

      hoursMap.set(dayName, currentHours + duration);
    } catch {
      // Ignore invalid assignment dates.
    }
  });

  // Activity records currently represent events, not duration.
  // They should not contribute hours until the Activity model
  // explicitly supports a duration value.

  return dayNames.map((day) => ({
    day,
    hours:
      Math.round((hoursMap.get(day) ?? 0) * 10) / 10,
  }));
}















// import { parseLocalDate } from "../../../../utils/date";

// import type { Activity, Assignment } from "../../../../types";
// import type { WeeklyStudyPoint } from "../types";

// export function buildWeeklyStudyDataset(
//   activities: Activity[],
//   assignments: Assignment[]
// ): WeeklyStudyPoint[] {
//   const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // Initialize week with 0 hours
  // const hoursMap = new Map<string, number>(
  //   dayNames.map((day) => [day, 0])
  // );

  // // Combine both sources
  // const sources = [
  //   ...(activities || []),
  //   ...(assignments || []),
  // ];

  // sources.forEach((item) => {
  //   let dateStr: string | undefined;
  //   let duration = 0;

    // === Handle Activity ===
    // if ("time" in item && item.time) {
    //   dateStr = item.time;
    //   duration = (item as any).duration ?? 1; // default 1 hour
    // }
    // === Handle Assignment ===
    // else if ("startTime" in item && item.startTime) {
    //   dateStr = item.startTime;
    //   duration = (item as any).duration ?? 2; // default 2 hours
    // }

    // if (!dateStr) return;

    // try {
      // Take only the date part
  //     const dateOnly = dateStr.split("T")[0];
  //     const date = parseLocalDate(dateOnly);

  //     if (isNaN(date.getTime())) return;

  //     const dayIndex = date.getDay(); // 0 = Sunday, 1 = Monday, ...
  //     const dayName = dayNames[dayIndex === 0 ? 6 : dayIndex - 1]; // Mon-Sun order

  //     const currentHours = hoursMap.get(dayName) || 0;
  //     hoursMap.set(dayName, currentHours + duration);
  //   } catch (e) {
  //     // Skip invalid dates silently
  //   }
  // });

  // Convert to array format for charts (e.g. Recharts)
//   return dayNames.map((day) => ({
//     day,
//     hours: Math.round((hoursMap.get(day) || 0) * 10) / 10, // 1 decimal place
//   }));
// }