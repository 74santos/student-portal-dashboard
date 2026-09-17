import type { Activity } from "../types";

type Notification = Activity & {
  priority: "critical" | "normal";
};

export function generateNotifications(
  activities: Activity[]
): Notification[] {

  return activities
    .map((activity) => {

      let priority: "critical" | "normal" = "normal";

      if (activity.type === "warning") {
        priority = "critical";
      }

      if (activity.type === "deleted") {
        priority = "critical";
      }

      return {
        ...activity,
        priority,
      };

    })
    .sort((a, b) => {

      // critical first
      if (a.priority === "critical" && b.priority !== "critical") return -1;
      if (a.priority !== "critical" && b.priority === "critical") return 1;

      // newest first
      return new Date(b.time).getTime() - new Date(a.time).getTime();

    });
}