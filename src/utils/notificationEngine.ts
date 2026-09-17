import type {
  Assignment,
  Course,
  NotificationItem,
} from "../types";

import type { StudentProfile } from "../types/student";

import { calculateForecastGPA } from "./gpaForecast";

import { getOverdueAssignments, } from "./analytics";

// export type NotificationPriority =
//   | "critical"
//   | "warning"
//   | "good";


export function generateNotifications(
  assignments: Assignment[],
  courses: Course[],
  student: StudentProfile,
): NotificationItem[] {

  const notifications: NotificationItem[] = [];

  if (!student) {
    return notifications;
  }

  const forecastGPA =
  Number(
    calculateForecastGPA(
      assignments,
      courses,
      []
    )
  );

  const overdue = 
   getOverdueAssignments(
     assignments
   );

   if ( overdue > 0 ) {

    notifications.push({
      id: crypto.randomUUID(),

      title:
        "Overdue Work",

      message:
        `${overdue} assignment${
          overdue > 1 ? "s are" : " is"
        } overdue.`,

      priority:
        "critical",

      createdAt:
        new Date().toISOString(),
      
      read: false,
      category: "assignment"
    });
   }


   const upcoming =
    assignments.filter(
      (a) =>
        !a.completed
    ).length;

  if (upcoming >= 5) {

    notifications.push({
      id: crypto.randomUUID(),

      title:
        "Heavy Workload",

      message:
        `${upcoming} active assignments require attention.`,

      priority:
        "warning",

      createdAt:
        new Date().toISOString(),

      read: false,

      category: "assignment"
    });
  }


  const avgProgress =
    courses.length > 0
      ? courses.reduce(
          (sum, c) =>
            sum + c.progress,
          0
        ) / courses.length
      : 0;

  if (avgProgress >= 80) {

    notifications.push({
      id: crypto.randomUUID(),

      title:
        "Strong Progress",

      message:
        "You are ahead of schedule across most courses.",

      priority:
        "good",

      createdAt:
        new Date().toISOString(),
        
      read:false,

      category: "course"
    });
  }



  if (
    forecastGPA >=
    student.targetGPA
  ) {
  
    notifications.push({
  
      id: crypto.randomUUID(),
  
      title:
        "Goal Achieved",  
      message:
        `Forecast GPA (${forecastGPA}) has reached your target GPA.`,  
      priority:
        "good",
  
      createdAt:
        new Date().toISOString(),
  
      read: false,
  
      category: "goal",
  
    });
  
  }


  const gap =
  student.targetGPA -
  forecastGPA;

  if (
    gap > 0 &&
    gap <= 0.2
  ) {

    notifications.push({

      id: crypto.randomUUID(),

      title:
        "Goal Within Reach",

      message:
        `You are only ${gap.toFixed(1)} GPA points from your target.`,

      priority:
        "warning",

      createdAt:
        new Date().toISOString(),

      read: false,

      category: "goal",

    });

}


    const lowCourse =
      courses.find(
        (course) =>
          course.progress < 50
      );

      if (lowCourse) {

        notifications.push({
      
          id: crypto.randomUUID(),
      
          title:
            "Course Risk Alert",
      
          message:
            `${lowCourse.name} is below 50% progress.`,
      
          priority:
            "critical",
      
          createdAt:
            new Date().toISOString(),
      
          read: false,
      
          category: "course",
      
        });
      
      }

  return notifications;
}