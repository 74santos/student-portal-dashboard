import type {
  Assignment,
  Course,
} from "../../../types";
import type { StudentProfile } from "../../../types/student";

import type { AcademicCoreAnalysis } from "./core/types"


export interface AcademicSnapshot  {

  student: StudentProfile;

  metrics: AcademicMetrics;

  core: AcademicCoreAnalysis;

  analysis: AcademicAnalysis;

  report: AcademicReport;

  summary: AcademicSummary;


}



export interface AcademicSummary {

  strongestCourse: Course | null;

  weakestCourse: Course | null;

  nextDeadline: Assignment | null;

}



export interface AcademicMetrics 
  extends
    PerformanceMetrics,
    AssignmentMetrics,
    CourseMetrics,
    RiskMetrics,
    TrendMetrics {}


export interface PerformanceMetrics {

  completionRate:number;

  averageProgress:number;

  activityScore: number;

  forecastGPA:number;

  healthScore:number;

  productivityScore:number;

  overallScore:number;

}



export interface AssignmentMetrics {

  totalAssignments:number;

  activeAssignments:number;

  completedAssignments:number;

  overdueAssignments:number;

}



export interface CourseMetrics {

  totalCourses:number;

  completedCourses:number;

}


export interface RiskMetrics {

  riskScore:number;

  riskLevel:

      | "Low"
      | "Moderate"
      | "High";

  workloadScore:number;

  workloadLevel:

      | "Light"
      | "Moderate"
      | "Heavy";

}

export interface TrendMetrics {

  momentum:

      | "Improving"
      | "Consistent"
      | "Declining";

  studyConsistency:

      | "Strong"
      | "Moderate"
      | "Needs Work";

  attendance:number;

}

export interface AcademicRecommendation  {

  id: string;

  title: string;

  description: string;

  priority:
    | "high"
    | "medium"
    | "low";

  category:
    | "study"
    | "course"
    | "goal"
    | "health";

};


export interface AcademicInsight  {

  id: string;

  type:
    | "strength"
    | "warning"
    | "achievement"
    | "trend";

  title: string;

  description: string;

  confidence: number;

  importance:
    | "critical"
    | "high"
    | "medium"
    | "low";

  // relatedCourse?: Course;

  // relatedAssignment?: Assignment;

  // createdAt: string;


};


export interface AcademicDecision {

  id: string;

  type:
    | "warning"
    | "success"
    | "achievement"
    | "recommendation";

  priority:
    | "critical"
    | "high"
    | "medium"
    | "low";

  title: string;

  description: string;

  action?: string;         // e.g. "View Course", "Mark Complete"

  // Optional fields
  // actionUrl?: string;
  // createdAt?: string;

}



export interface Achievement {

  id: string;

  title: string;

  description: string;

  unlocked: boolean;

}


export type AcademicStanding =
    | "Excellent"
    | "Strong"
    | "Moderate"
    | "Needs Attention";

export type AcademicMomentum =
    | "Improving"
    | "Stable"
    | "Declining";

export type AcademicWorkload =
    | "Light"
    | "Moderate"
    | "Heavy";

export type AcademicConsistency =
    | "Strong"
    | "Moderate"
    | "Needs Work";

export type AcademicGoalStatus =
    | "Ahead"
    | "On Track"
    | "Behind";


export interface AcademicAnalysis {

  academicStanding: AcademicStanding;

  momentum: AcademicMomentum;

  workload: AcademicWorkload;

  consistency: AcademicConsistency;

  goalStatus: AcademicGoalStatus;

  focusCourse: Course | null;

}


export interface AcademicReport {

  strengths: AcademicInsight[];

  weaknesses: AcademicInsight[];

  recommendations: AcademicRecommendation[];

  achievements: Achievement[];

  decisions: AcademicDecision[];

  generatedAt: string;

}



// export interface AcademicCoreAnalysis {


//   // Course Intelligence
//   weakestCourse: Course | null;
//   strongestCourse: Course | null;
//   atRiskCourses: Course[];


//   // Assignment Intelligence
//   mostUrgentAssignment: Assignment | null;

//   upcomingAssignments: Assignment[];

//   overdueAssignments: Assignment[];

  
//   // Performance Intelligence
//   strongestMetric:
//     | "Completion"
//     | "Progress"
//     | "Productivity"
//     | "Consistency"
//     | "Forecast GPA";

//   weakestMetric:
//     | "Completion"
//     | "Progress"
//     | "Productivity"
//     | "Consistency"
//     | "Forecast GPA";

  
//   // Trend Intelligence
//   improving: boolean;

//   declining: boolean;

// }
