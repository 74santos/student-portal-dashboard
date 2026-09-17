import type {
  Achievement,
  AcademicMetrics,
} from "../types";

export function buildAchievements(
  metrics: AcademicMetrics
): Achievement[] {

  const achievements: Achievement[] = [];

  // 1. Perfect Completion
  if (metrics.completionRate === 100) {
    achievements.push({
      id: crypto.randomUUID(),
      title: "Perfect Completion",
      description: "All assignments have been completed.",
      unlocked: true,
    });
  }

  // 2. High Performer
  if (metrics.productivityScore >= 85) {
    achievements.push({
      id: crypto.randomUUID(),
      title: "High Performer",
      description: "Productivity score is consistently high.",
      unlocked: true,
    });
  }

  // 3. Consistent Learner
  if (metrics.studyConsistency === "Strong") {
    achievements.push({
      id: crypto.randomUUID(),
      title: "Consistent Learner",
      description: "Maintains a strong study routine.",
      unlocked: true,
    });
  }

  // 4. Academic Stability
  if (metrics.riskLevel === "Low" && metrics.healthScore >= 80) {
    achievements.push({
      id: crypto.randomUUID(),
      title: "Academic Stability",
      description: "Maintains low risk and strong academic health.",
      unlocked: true,
    });
  }

  // 5. Course Master
  if (metrics.completedCourses >= 3) {
    achievements.push({
      id: crypto.randomUUID(),
      title: "Course Master",
      description: "Completed multiple courses successfully.",
      unlocked: true,
    });
  }

  // 6. On Track Scholar
  if (metrics.forecastGPA >= 3.5) {
    achievements.push({
      id: crypto.randomUUID(),
      title: "On Track Scholar",
      description: "Forecast GPA is meeting academic goals.",
      unlocked: true,
    });
  }

  return achievements;
}