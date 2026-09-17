// import type { Course, Assignment } from "../../types";

export interface WeeklyStudyPoint {
  day: string;
  hours: number;
}

export interface CourseProgressPoint {
  course: string;
  progress: number;
}

export interface AssignmentCompletionDataset {
  completed: number;
  active: number;
  overdue: number;
}

export interface AnalyticsInsight {
  title: string;
  description: string;
  severity:
    | "info"
    | "success"
    | "warning";
}

export interface AnalyticsModel {
  weeklyStudy: WeeklyStudyPoint[];

  courseProgress: CourseProgressPoint[];

  assignmentCompletion: AssignmentCompletionDataset;

  insights: AnalyticsInsight[];
}