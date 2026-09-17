import type { AcademicAIContext, StudyPlan } from "../../services/ai/AcademicAIService";

export async function generateStudyPlan(
  context: AcademicAIContext
): Promise<StudyPlan> {
  // Server-side AI provider integration will go here.
  //
  // Important:
  // - Never expose an AI API key to the React client.
  // - Do not send passwords or authentication credentials.
  // - Only use the academic context needed to generate the plan.

  throw new Error("AI provider not connected yet.");
}