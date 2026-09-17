import type { Assignment, Course } from "../../../types"

import type { MetricCardModel } from "../../core/models/MetricCardModel";



import type { 
  ProgressPresentation,
  StandingPresentation,
  HealthPresentation,
  MomentumPresentation,
  PriorityPresentation,
  ExecutiveSummary,

} from "../../core/presentation";


export interface DashboardHero {

  greeting: string;

  studentName: string;

  title: string;

  subtitle: string;

  academicStanding: StandingPresentation;

  health: HealthPresentation;

  // healthScore: number;

  momentum: MomentumPresentation;

  nextDeadline: Assignment | null;

  focusCourse: Course | null;


}





export interface DashboardOverview {

  strongestCourse: Course | null;

  weakestCourse: Course | null;

  nextDeadline: Assignment | null;

  summary: ExecutiveSummary;

  health: HealthPresentation;

}



export interface DashboardFocus {

  title: string;

  description: string;

  priority: PriorityPresentation;

  score: number;

  route?: string;

  progress?: ProgressPresentation;

  // completed: boolean;

  // action?: string;

}




export interface DashboardModel {
  hero: DashboardHero;

  stats: MetricCardModel[];

  overview: DashboardOverview;

  focus: DashboardFocus[];

  // widgets: DashboardWidget[];

  // achievements?: Achievement[];

  // insights?: AcademicInsight[];
}










// export interface DashboardStatViewModel {

//   id: string;

//   title: string;

//   displayValue: string;

//   trend: string;

//   Icon: IconType;

//   color: string;

//   route?: string;

// }
