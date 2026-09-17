import type { Assignment, Course, Activity } from "../../types";
import type { StudentProfile } from "../../types/student";
import type { AcademicSnapshot } from "./types";


import { buildAcademicMetrics } from "./metrics/buildAcademicMetrics"
import { buildAcademicAnalysis } from "./analysis/buildAcademicAnalysis";
import { analyzeAcademicCore } from "./core/analyzeAcademicCore";
import { buildAcademicReport }  from "./report/buildAcademicReport"
import { buildRecommendations } from "./recommendations/buildRecommendations";
import { buildAchievements } from "./achievements/buildAchievements";
import { buildAcademicDecisions } from "./decisions/buildAcademicDecisions";
import { buildInsights } from "./insights/buildInsights"
 

export function buildAcademicSnapshot(
  student: StudentProfile,
  courses: Course[],
  assignments: Assignment[],
  activities: Activity[]

): AcademicSnapshot {

 // Metrics

const metrics = buildAcademicMetrics( 
    courses,
    assignments,
    activities
);

const core =
analyzeAcademicCore(
    metrics,
    courses,
    assignments,
);


const analysis =
buildAcademicAnalysis(
   student,
   metrics,
   core
);

const {strengths, weaknesses }= buildInsights(
  analysis,
  metrics,
  core
)

const recommendations = buildRecommendations(
  analysis,
  core
)

const achievements = buildAchievements(
  metrics,
)

const decisions = buildAcademicDecisions(
  analysis,
  core
)



const report =
buildAcademicReport(
  decisions,
  recommendations,
  achievements,
  strengths,
  weaknesses
)


         



// ---------------- Snapshot ----------------
   

    return {

      student,

      metrics,

      core,

      report,

      analysis,

      weakestCourse: core.weakestCourse,

      strongestCourse: core.strongestCourse,

      nextDeadline: core.mostUrgentAssignment,

     

  };


  }







 
