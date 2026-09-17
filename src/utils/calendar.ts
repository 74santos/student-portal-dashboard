import type {
  Assignment,
  Course,
} from "../types";

// import {
//   minutesToCalendarOffset,
// } from "./time";

type CalendarEvent = {
  id: string;
  title: string;
  day: string;
  hour: string;
  startHour: number;
  courseName: string;

  top: number;
  height: number;
  lane?: number;
  totalLanes?: number;
  duration?: number;

  priority?: string;
  assignment: Assignment;

  
};

const dayMap = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
];

export function buildCalendarEvents(
  assignments: Assignment[],
  courses: Course[]
): CalendarEvent[] {

const HOUR_HEIGHT = 74;

const events = assignments
    .filter(
      (assignment) =>
        assignment.dueDate &&
        assignment.startTime
    )
    .map((assignment) => {
      const fullDate = `${assignment.dueDate}T${assignment.startTime}`;
      const date = new Date(fullDate);
    
      const hours = date.getHours();
      const minutes = date.getMinutes();

      const totalMinutes = (hours - 8) * 60 + minutes;
    
      const top = (totalMinutes / 60) * HOUR_HEIGHT;

    
      const height = ((assignment.duration || 60) / 60) * HOUR_HEIGHT;
    
      const course = courses.find(c => c.id === assignment.courseId);
    
      let hour = hours;
      const suffix = hour >= 12 ? "PM" : "AM";
      hour = hour % 12 || 12;
    
      return {
        id: assignment.id,
        title: assignment.title,
        day: dayMap[date.getDay()],
        hour: `${hour}${suffix}`,
        startHour: hours,
        courseName: course?.name || "Unknown Course",
        priority: assignment.priority,
        top,
        height,
        duration: assignment.duration || 60,
        assignment,
      };
    });
    return applyEventLanes(events);

}

function applyEventLanes(
  events: CalendarEvent[]
): CalendarEvent[] {

  const groupedByDay: Record<
    string,
    CalendarEvent[]
  > = {};

  events.forEach((event) => {

    if (!groupedByDay[event.day]) {
      groupedByDay[event.day] = [];
    }

    groupedByDay[event.day].push(event);
  });

  Object.values(groupedByDay).forEach(
    (dayEvents) => {

      dayEvents.sort(
        (a, b) => a.top - b.top
      );

      const active: CalendarEvent[] = [];

      dayEvents.forEach((event) => {

        active.forEach((activeEvent, index) => {

          const activeBottom =
            activeEvent.top +
            activeEvent.height;

          if (activeBottom <= event.top) {
            active.splice(index, 1);
          }
        });

        event.lane = active.length;

        active.push(event);

        const totalLanes =
          active.length;

        active.forEach((e) => {
          e.totalLanes = totalLanes;
        });

      });

    }
  );

  return events;
}