import type {
  AcademicAIContext,
  AcademicAIService,
  StudyPlan,
} from "./AcademicAIService";

export class HttpAcademicAIService implements AcademicAIService {
  async generateStudyPlan(
    context: AcademicAIContext
  ): Promise<StudyPlan> {
    const response = await fetch("/api/ai/study-plan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(context),
    });

    if (!response.ok) {
      throw new Error(
        `AI service request failed: ${response.status}`
      );
    }

    const studyPlan = (await response.json()) as StudyPlan;

    return studyPlan;
  }
}