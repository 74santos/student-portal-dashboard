import type {
  Assignment,
  Course,
  Activity
} from "../../../../types";

// import type {
//   StudentProfile,
// } from "../../../types/student";


import type {
  AcademicMetrics ,
} from "../types";


import {
  calculateCompletion,
  calculateAverageProgress,
  calculateForecast,
  calculateOverdue,
  calculateActiveAssignment,
  calculateCompletedAssignment,
} from "../calculations";

export function buildAcademicMetrics(
  // student: StudentProfile,
  courses: Course[],
  assignments: Assignment[],
  activities: Activity[]
): AcademicMetrics {

  // Performance
  const completionRate =
  calculateCompletion(assignments);

  const averageProgress =
  calculateAverageProgress(courses);

  const forecastGPA =
    calculateForecast(
      assignments,
      courses,
      activities
    );


  // Assignments
  const totalAssignments =
  assignments.length;

  const completedAssignments =
  calculateCompletedAssignment(assignments);

  const activeAssignments =
  calculateActiveAssignment(assignments);

  const overdueAssignments =
  calculateOverdue(assignments);

  
   // Courses
  const totalCourses =
      courses.length;

  const completedCourses =
      courses.filter(
          c => c.progress >= 100
      ).length;


  // Scores
  const attendance = 94;
  // TODO:
 // Replace with real attendance tracking

  const healthScore =
  Math.round(
    (
      completionRate +
      averageProgress +
      attendance
    ) / 3
  );


  const activityScore =
  Math.min(
    activities.length * 5,
    20
  );

  const productivityScore =
  Math.min(
    100,
    Math.round(
      completionRate * 0.4 +
      averageProgress * 0.3 +
      activityScore -
      overdueAssignments * 10
    )
  );

  const overallScore =
  Math.round(
    (
      healthScore +
      productivityScore +
      averageProgress +
      completionRate
    ) / 4
  );


 // Risk   // Higher score means heavier workload
  const workloadScore =
  overdueAssignments * 20 +
  (100 - completionRate) * 0.3 +
  (100 - averageProgress) * 0.4;


  const workloadLevel =
  workloadScore < 30
    ? "Light"
    : workloadScore < 60
    ? "Moderate"
    : "Heavy";


  const riskScore =
  Math.min(
    100,
    Math.round(workloadScore)
  );


  const riskLevel =
  riskScore >= 70
    ? "High"
    : riskScore >= 40
    ? "Moderate"
    : "Low";

  
  
 // Trend. // Weighted productivity model
  const momentumScore =
  completionRate * 5 +
  averageProgress -
  overdueAssignments * 10;


  const momentum =
  momentumScore >= 90
    ? "Improving"
    : momentumScore >= 60
    ? "Consistent"
    : "Declining";


  const studyConsistency =
    activities.length >= 10
      ? "Strong"
      : activities.length >= 5
      ? "Moderate"
      : "Needs Work";


    const metrics: AcademicMetrics = {
      completionRate,

      averageProgress,
  
      forecastGPA,
  
      healthScore,

      activityScore,
  
      productivityScore,
  
      attendance,
  
      totalAssignments,
  
      completedAssignments,
  
      activeAssignments,
  
      overdueAssignments,
  
      totalCourses,
  
      completedCourses,
  
      workloadScore: Math.round(workloadScore),
  
      workloadLevel,
  
      riskScore,
  
      riskLevel,
      
      momentum,
  
      overallScore,
  
      studyConsistency,
    }


  return metrics;

}



