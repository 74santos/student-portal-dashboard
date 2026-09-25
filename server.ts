import "dotenv/config";
import express from "express";
import OpenAI from "openai";


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "student-portal-api",
  });
});


app.post("/api/ai/study-plan", async (req, res) => {
    try {
      const context = req.body;
  
      if (!context?.courses || !context?.assignments || !context?.student || !context?.academic
        ) {
        return res.status(400).json({
          error: "Invalid academic context.",
        });
      }
  
    const response = await openai.responses.create({
        model: "gpt-5.6-luna",
      
        input: [
          {
            role: "system",
            content: `
      You are an academic planning assistant inside a student portal.
      
      Analyze the student's courses, assignments, and academic snapshot.
      
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

    return res.json(studyPlan);
    } catch (error) {
      console.error("AI study plan error:", error);
  
      return res.status(500).json({
        error: "Unable to generate study plan.",
      });
    }
  });



app.listen(PORT, () => {
  console.log(`Student Portal API running on port ${PORT}`);
});