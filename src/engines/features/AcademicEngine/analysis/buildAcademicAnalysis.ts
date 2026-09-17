import type { StudentProfile } from "../../../../types/student";

import type { AcademicMetrics, AcademicAnalysis } from "../types";

import type { AcademicCoreAnalysis } from "../core/types";
  
export function buildAcademicAnalysis(
  
    student: StudentProfile,

    metrics: AcademicMetrics,

    core: AcademicCoreAnalysis
  
  ): AcademicAnalysis {
  
    const academicStanding =
      metrics.overallScore >= 90
        ? "Excellent"
        : metrics.overallScore >= 75
        ? "Strong"
        : metrics.overallScore >= 60
        ? "Moderate"
        : "Needs Attention";
  
    const goalStatus =
      metrics.forecastGPA >= student.targetGPA
        ? "Ahead"
        : metrics.forecastGPA >=
          student.targetGPA - 0.3
        ? "On Track"
        : "Behind";

    const focusCourse =
      core.weakestCourse;
  
    const consistency =
      metrics.studyConsistency;
  
    const workload =
      metrics.workloadLevel;
  
    const momentum =
      metrics.momentum === "Improving"
  
          ? "Improving"
  
          : metrics.momentum === "Consistent"
  
          ? "Stable"
  
          : "Declining";

      
  
    return {
  
      academicStanding,
  
      momentum,
  
      workload,
  
      consistency,
  
      goalStatus,
  
      focusCourse,
  
    };
  
  }