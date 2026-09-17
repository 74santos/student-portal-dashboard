import type{ Course } from "../types";
import type{ Assignment } from "../types";

export const mockCourses: Course[] = [
  {
    id: "1",
    name: "Machine Learning",
    professor: "Dr. Sarah Chen",
    progress: 78,
    nextClass: "Mon 10:00 AM"
  },
  {
    id: "2",
    name: "Web Development",
    professor: "Prof. Mark Davis",
    progress: 92,
    nextClass: "Tue 2:00 PM"
  },
  {
    id:"3",
    name: "TypeScript Mastery",
    professor:"Chris Dev",
    progress: 90,
    nextClass: "Wed 12:30 AM"
  }
];


export const mockAssignments: Assignment[] = [
  {
    id: "a1",
    title: "Linear Regression Quiz",
    dueDate: "2026-09-10",
    dueTime: "11:59 AM",
    priority: "high",
    completed: false,
    courseId: "1",
    startTime: "2026-09-07T10:00:00",
    duration: 2,
  },

  {
    id: "a2",
    title: "React Dashboard UI",
    dueDate: "2026-09-09",
    dueTime: "11:59 PM",
    priority: "medium",
    completed: false,
    courseId: "2",
    startTime: "2026-09-08T14:00:00",
    duration: 1.5,
  },

  {
    id: "a3",
    title: "TypeScript Generics",
    dueDate: "2026-09-12",
    dueTime: "11:59 PM",
    priority: "low",
    completed: true,
    courseId: "3",
    startTime: "2026-09-10T09:00:00",
    duration: 2,
  },
];