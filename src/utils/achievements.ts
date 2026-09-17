import type {
  Assignment,
  Course,
} from "../types";

export type Achievement = {
  id: string;
  title: string;
  description: string;
};

export function getAchievements(
  assignments: Assignment[],
  courses: Course[]
): Achievement[] {

  const achievements: Achievement[] = [];

  const completedAssignments =
    assignments.filter(
      (a) => a.completed
    ).length;

  if (completedAssignments >= 10) {

    achievements.push({
      id: "assignment-master",
      title: "🏆 Assignment Master",
      description:
        "Completed 10 assignments",
    });

  }

  const completionRate =
    assignments.length > 0
      ? Math.round(
          (completedAssignments /
            assignments.length) *
            100
        )
      : 0;

  if (completionRate >= 80) {

    achievements.push({
      id: "consistent-learner",
      title: "🏆 Consistent Learner",
      description:
        "Maintained 80% completion rate",
    });

  }

  const completedCourses =
    courses.filter(
      (c) => c.progress === 100
    );

  if (completedCourses.length > 0) {

    achievements.push({
      id: "course-finisher",
      title: "🏆 Course Finisher",
      description:
        "Completed a course",
    });

  }

  return achievements;
}