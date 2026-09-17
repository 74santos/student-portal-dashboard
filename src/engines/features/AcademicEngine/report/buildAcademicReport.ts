import type {
  
  AcademicDecision,

  AcademicRecommendation,

  AcademicReport,

  Achievement,

  AcademicInsight,

} from "../types";




export function buildAcademicReport(

    decisions: AcademicDecision[],

    recommendations: AcademicRecommendation[],

    achievements: Achievement[],

    strengths: AcademicInsight[],

    weaknesses: AcademicInsight[]


): AcademicReport {


  return {
    strengths,

    weaknesses,

    recommendations,

    achievements,

    decisions,

    generatedAt: new Date().toISOString(),
  };
}
