import type { Activity }
from "../types";

export function calculateStreak(
  activities: Activity[]
) {

  const completedActivities =
    activities.filter(
      (activity) =>
        activity.type ===
        "completed"
    );

  if (
    completedActivities.length === 0
  ) {
    return {
      current: 0,
      best: 0,
    };
  }

  const dates =
    completedActivities
      .map((activity) =>
        new Date(
          activity.time
        )
          .toDateString()
      );

  const uniqueDates =
    [...new Set(dates)];

  return {
    current:
      uniqueDates.length,
    best:
      uniqueDates.length,
  };
}