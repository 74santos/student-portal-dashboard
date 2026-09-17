import type { Assignment } from '../../../../types';

import type { TimelineModel,  } from '../../../core/models/TimelineModel';

import  { buildTimelineSection } from "../../../core/builders/buildTimelineSection"

import {
  getTodayAssignments,
  getCompletedAssignments,
  getOverdueAssignments,
  getThisWeekAssignments,
  getUpcomingAssignments,
} from '../utils/assignmentHelpers';

export function buildTimeline(
  assignments: Assignment[]
): TimelineModel<Assignment> {
    
  const overdue = getOverdueAssignments(assignments);

  const today = getTodayAssignments(assignments);

  const thisWeek = getThisWeekAssignments(assignments);

  const upcoming = getUpcomingAssignments(assignments);

  const completed = getCompletedAssignments(assignments);


  const sections = [
    buildTimelineSection(

        "overdue",
        "Overdue",
        overdue,
        "Great job! No overdue assignments."

    ),

    buildTimelineSection(

        "today",
        "Due Today",
        today,

        "No assignments due today."

    ),

    buildTimelineSection(

        "week",

        "This Week",

        thisWeek,

        "Nothing scheduled this week."

    ),

    buildTimelineSection(

        "upcoming",

        "Upcoming",

        upcoming,

        "No upcoming assignments."

    ),

    buildTimelineSection(

        "completed",

        "Completed",

        completed,

        "No completed assignments yet."

    )
  ];

  

  return {
    sections,
  };
}





















// const sections: TimelineSection<Assignment>[] = [
//     {
//       id: 'overdue',
//       title: 'Overdue',
//       count: overdue.length,
//       items: overdue,
//       emptyMessage: 'Great job! No overdue assignments.',
//     },
//     {
//       id: 'today',
//       title: 'Due Today',
//       count: today.length,
//       items: today,
//       emptyMessage: 'No assignments due today.',
//     },

//     {
//       id: 'week',
//       title: 'This Week',
//       count: thisWeek.length,
//       items: thisWeek,
//       emptyMessage: 'Nothing scheduled this week.',
//     },

//     {
//       id: 'upcoming',
//       title: 'Upcoming',
//       count: upcoming.length,
//       items: upcoming,
//       emptyMessage: 'No upcoming assignments.',
//     },

//     {
//       id: 'completed',
//       title: 'Completed',
//       count: completed.length,
//       items: completed,
//       emptyMessage: 'No completed assignments yet.',
//     },
//   ];
