import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/AppContext";
import { MockAcademicAIService } from "../MockAcademicAIService";
import type { StudyPlan } from "../AcademicAIService";

export function useAcademicCoach() {
  const ctx = useContext(AppContext);

  const [studyPlan, setStudyPlan] = useState<StudyPlan | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!ctx?.snapshot || !ctx.courses || !ctx.assignments) {
      return;
    }

    const generatePlan = async () => {
      setLoading(true);
      setError("");

      try {
        const aiService = new MockAcademicAIService();

        const plan = await aiService.generateStudyPlan({
          courses: ctx.courses,
          assignments: ctx.assignments,
          snapshot: ctx.snapshot,
        });

        setStudyPlan(plan);
      } catch {
        setError("Unable to generate your study plan.");
      } finally {
        setLoading(false);
      }
    };

    generatePlan();
  }, [ctx]);

  return {
    studyPlan,
    loading,
    error,
  };
}