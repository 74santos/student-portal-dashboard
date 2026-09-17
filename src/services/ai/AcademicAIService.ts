import type { Course, Assignment  } from "../../types";
import type { AcademicSnapshot } from "../../engines/features/AcademicEngine/types";


export type AcademicAIContext = {
  courses: Course[];
  assignments: Assignment[];
  snapshot: AcademicSnapshot;
};

export type StudyRecommendation = {
  assignmentId: string;
  title: string;
  courseName: string;
  dueDate: string;
  priority: "high" | "medium" | "low";
  recommendedHours: number;
  reason: string;
};

export type StudyPlan = {
  greeting: string;
  recommendations: StudyRecommendation[];
  totalRecommendedHours: number;
  summary: string;
};

export interface AcademicAIService {
  generateStudyPlan(
    context: AcademicAIContext
  ): Promise<StudyPlan>;
}