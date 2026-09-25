import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/AppContext";
import { HttpAcademicAIService } from "../HttpAcademicAIService";
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
        const aiService = new HttpAcademicAIService();

        const plan = await aiService.generateStudyPlan({
          courses: ctx.courses,
          assignments: ctx.assignments,
          student: {
            name: ctx.snapshot.student.name,
            targetGPA: ctx.snapshot.student.targetGPA,
            studyGoalHours: ctx.snapshot.student.studyGoalHours,
          },
        
          academic: {
            workload: ctx.snapshot.analysis.workload,
            goalStatus: ctx.snapshot.analysis.goalStatus,
            momentum: ctx.snapshot.analysis.momentum,
          },
        });

        setStudyPlan(plan);
      } catch {
        setError("Unable to generate your study plan.");
      } finally {
        setLoading(false);
      }
    };

    generatePlan();
  }, [
    ctx?.courses,
    ctx?.assignments,
    ctx?.snapshot,
  ]);

  return {
    studyPlan,
    loading,
    error,
  };
}