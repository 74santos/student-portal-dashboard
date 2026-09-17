import type {
  Course,
  Assignment,
  // Activity,
} from "../../../types";

import type {
  AnalyticsModel,
} from "./types";

import {
  buildWeeklyStudyDataset,
} from "./datasets/buildWeeklyStudyDataset";

import {
  buildCourseProgressDataset,
} from "./datasets/buildCourseProgressDataset";

import {
  buildAssignmentDataset,
} from "./datasets/buildAssignmentDataset";

import {
  buildAnalyticsInsights,
} from "./insights/buildAnalyticsInsights";

export function buildAnalytics(

  courses: Course[],

  assignments: Assignment[],

  // activities: Activity[]

): AnalyticsModel {

  return {

      weeklyStudy:
          buildWeeklyStudyDataset(
              assignments
          ),

      courseProgress:
          buildCourseProgressDataset(
              courses
          ),

      assignmentCompletion:
          buildAssignmentDataset(
              assignments
          ),

      insights:
          buildAnalyticsInsights(),

  };

}