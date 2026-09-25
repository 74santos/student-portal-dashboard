import type {
  Assignment,
  Course,
} from "../../types";

import type {
  AcademicAIContext,
  AcademicAIService,
  StudyPlan,
  StudyRecommendation,
} from "./AcademicAIService";

export class MockAcademicAIService implements AcademicAIService {
  async generateStudyPlan(
    context: AcademicAIContext
  ): Promise<StudyPlan> {
    const { courses, assignments, snapshot } = context;

    const activeAssignments = assignments
      .filter((assignment) => !assignment.completed)
      .sort((a, b) => {
        const priorityScore = {
          high: 3,
          medium: 2,
          low: 1,
        };

        const priorityDifference =
          priorityScore[b.priority] -
          priorityScore[a.priority];

        if (priorityDifference !== 0) {
          return priorityDifference;
        }

        return (
          new Date(a.dueDate).getTime() -
          new Date(b.dueDate).getTime()
        );
      });

    const recommendations: StudyRecommendation[] =
      activeAssignments.slice(0, 3).map((assignment) => {
        const course = courses.find(
          (course) => course.id === assignment.courseId
        );

        const recommendedHours =
          assignment.duration && assignment.duration > 0
            ? assignment.duration
            : assignment.priority === "high"
              ? 2
              : assignment.priority === "medium"
                ? 1.5
                : 1;

        return {
          assignmentId: assignment.id,
          title: assignment.title,
          courseName: course?.name ?? "Course",
          dueDate: this.formatDueDate(
            assignment.dueDate,
            assignment.dueTime
          ),
          priority: assignment.priority,
          recommendedHours,
          reason: this.getReason(
            assignment,
            course,
            snapshot
          ),
        };
      });

    const totalRecommendedHours =
      recommendations.reduce(
        (total, recommendation) =>
          total + recommendation.recommendedHours,
        0
      );

    return {
      greeting: `${this.getGreeting()}, ${snapshot.student.name.split(" ")[0]}.`,
      recommendations,
      totalRecommendedHours,
      summary: this.getSummary(
        recommendations,
        snapshot
      ),
    };
  }

  private getReason(
    assignment: Assignment,
    course: Course | undefined,
    snapshot: AcademicAIContext["snapshot"]
  ): string {
    if (assignment.priority === "high") {
      return `High-priority work for ${
        course?.name ?? "this course"
      } should be handled first.`;
    }

    if (snapshot.analysis.goalStatus === "Behind") {
      return "This assignment can help you get back on track with your academic goals.";
    }

    if (course && course.progress < 70) {
      return `Your progress in ${course.name} suggests this is a good area to focus on.`;
    }

    return "Completing this work will keep your current workload manageable.";
  }

  private getSummary(
    recommendations: StudyRecommendation[],
    snapshot: AcademicAIContext["snapshot"]
  ): string {
    if (recommendations.length === 0) {
      return "You're caught up. I recommend using your available study time to review upcoming course material.";
    }
  
    if (snapshot.analysis.workload === "Heavy") {
      return "I found the assignments that deserve the most attention based on priority, deadlines, and your current course workload.";
    }
  
    return "I prioritized your next study tasks using assignment priority, deadlines, and your current academic progress.";
  }

  private getGreeting(): string {
    const hour = new Date().getHours();
  
    if (hour < 12) {
      return "Good morning";
    }
  
    if (hour < 18) {
      return "Good afternoon";
    }
  
    return "Good evening";
  }
  
  private formatDueDate(
    dueDate: string,
    dueTime?: string
  ): string {
    const date = new Date(dueDate);
  
    if (Number.isNaN(date.getTime())) {
      return dueDate;
    }
  
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
    }).format(date);
  
    if (!dueTime) {
      return formattedDate;
    }
  
    return `${formattedDate} · ${dueTime}`;
  }
}