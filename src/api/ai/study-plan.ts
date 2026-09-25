import OpenAI from "openai";
import type {
  AcademicAIContext,
  StudyPlan,
} from "../../services/ai/AcademicAIService";

import { formatCoachDueDate } from "../../utils/date"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});



const systemPrompt = `
You are an academic planning assistant inside a student portal.

Analyze the student's courses, assignments, academic goals, and current academic status.

Return a practical study plan.

Rules:
- Prioritize incomplete assignments.
- Consider assignment priority and due dates.
- Consider course progress and academic workload.
- Never invent assignments or courses.
- Never expose or infer passwords, authentication credentials, or unrelated personal information.
- Recommended hours must be realistic.
- Return only the requested structured data.

Date formatting:
- Return dueDate as a concise display string.
- Use "Mon D · h:mm AM/PM" format.
- Do not include the year unless necessary to avoid ambiguity.
- Example: "Oct 20 · 11:59 AM".
`;


export async function generateStudyPlan(
  context: AcademicAIContext
): Promise<StudyPlan> {
   
  console.log("🔥 STUDY PLAN API HIT");
  const response = await openai.responses.create({
    model: "gpt-5.6-luna",
    input: [
      {
        role: "system",
        content:
          systemPrompt,
      },
      {
        role: "user",
        content: JSON.stringify({
          courses: context.courses,
          assignments: context.assignments,
          student: context.student,
          academic: context.academic,
        }),
      },
    ],
  });

  const output = response.output_text;

  if (!output) {
    throw new Error("AI provider returned an empty response.");
  }

  const studyPlan = JSON.parse(output) as StudyPlan;

  console.log("AI RAW DUE DATE:", studyPlan.recommendations[0]?.dueDate);

const formattedStudyPlan: StudyPlan = {
  ...studyPlan,
  recommendations: studyPlan.recommendations.map((recommendation) => {
    const assignment = context.assignments.find(
      (assignment) => assignment.id === recommendation.assignmentId
    );

    console.log("MATCHED ASSIGNMENT:", assignment);
    console.log("FORMATTED DATE:", assignment
      ? formatCoachDueDate(assignment.dueDate, assignment.dueTime)
      : "NO MATCH"
    );

    if (!assignment) {
      return recommendation;
    }

    return {
      ...recommendation,
      dueDate: formatCoachDueDate(
        assignment.dueDate,
        assignment.dueTime
      ),
    };
  }),
};

return formattedStudyPlan;
}