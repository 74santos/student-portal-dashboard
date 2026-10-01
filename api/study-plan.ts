import OpenAI from "openai";
import { formatCoachDueDate } from "../../src/utils/date";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const context = await req.json();

    if (
      !context?.courses ||
      !context?.assignments ||
      !context?.student ||
      !context?.academic
    ) {
      return Response.json(
        {
          error: "Invalid academic context.",
        },
        { status: 400 }
      );
    }

    const response = await openai.responses.create({
      model: "gpt-5.6-luna",

      input: [
        {
          role: "system",
          content: `
You are an academic planning assistant inside a student portal.

Analyze the student's courses, assignments, and academic context.

Return a practical study plan.

Rules:
- Prioritize incomplete assignments.
- Consider assignment priority and due dates.
- Consider course progress and academic workload.
- Never invent assignments or courses.
- Never expose or infer passwords, authentication credentials, or unrelated personal information.
- Recommended hours must be realistic.
- Return only the requested structured data.
          `,
        },
        {
          role: "user",
          content: JSON.stringify(context),
        },
      ],

      text: {
        format: {
          type: "json_schema",
          name: "study_plan",
          strict: true,
          schema: {
            type: "object",
            additionalProperties: false,

            properties: {
              greeting: {
                type: "string",
              },

              recommendations: {
                type: "array",

                items: {
                  type: "object",
                  additionalProperties: false,

                  properties: {
                    assignmentId: {
                      type: "string",
                    },

                    title: {
                      type: "string",
                    },

                    courseName: {
                      type: "string",
                    },

                    dueDate: {
                      type: "string",
                    },

                    priority: {
                      type: "string",
                      enum: ["high", "medium", "low"],
                    },

                    recommendedHours: {
                      type: "number",
                    },

                    reason: {
                      type: "string",
                    },
                  },

                  required: [
                    "assignmentId",
                    "title",
                    "courseName",
                    "dueDate",
                    "priority",
                    "recommendedHours",
                    "reason",
                  ],
                },
              },

              totalRecommendedHours: {
                type: "number",
              },

              summary: {
                type: "string",
              },
            },

            required: [
              "greeting",
              "recommendations",
              "totalRecommendedHours",
              "summary",
            ],
          },
        },
      },
    });

    const studyPlan = JSON.parse(response.output_text);

    const formattedStudyPlan = {
      ...studyPlan,

      recommendations: studyPlan.recommendations.map(
        (recommendation: {
          assignmentId: string;
          dueDate: string;
        }) => {
          const assignment = context.assignments.find(
            (assignment: { id: string; dueDate: string; dueTime?: string }) =>
              assignment.id === recommendation.assignmentId
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
        }
      ),
    };

    return Response.json(formattedStudyPlan);
  } catch (error) {
    console.error("AI study plan error:", error);

    return Response.json(
      {
        error: "Unable to generate study plan.",
      },
      { status: 500 }
    );
  }
}