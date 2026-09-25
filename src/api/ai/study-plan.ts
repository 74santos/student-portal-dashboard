import OpenAI from "openai";
import type {
  AcademicAIContext,
  StudyPlan,
} from "../../services/ai/AcademicAIService";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateStudyPlan(
  context: AcademicAIContext
): Promise<StudyPlan> {
  const response = await openai.responses.create({
    model: "gpt-5.6-luna",
    input: [
      {
        role: "system",
        content:
          "You are an academic planning assistant. Create practical, concise study recommendations from the student's academic data. Do not expose or infer passwords, authentication credentials, or unrelated personal information.",
      },
      {
        role: "user",
        content: JSON.stringify({
          courses: context.courses,
          assignments: context.assignments,
          snapshot: context.snapshot,
        }),
      },
    ],
  });

  const output = response.output_text;

  if (!output) {
    throw new Error("AI provider returned an empty response.");
  }

  return JSON.parse(output) as StudyPlan;
}