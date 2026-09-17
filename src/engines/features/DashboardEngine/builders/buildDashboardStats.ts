import type { AcademicSnapshot } from "../../AcademicEngine/types";
import type { MetricCardModel } from "../../../core/models/MetricCardModel";

export function buildDashboardStats(
    snapshot: AcademicSnapshot
): MetricCardModel[] {

    const {
        metrics,
        student,
    } = snapshot;

    return [

        {
            id: "courses",

            title: "Active Courses",

            value: String(metrics.totalCourses),

            trend:
                `${metrics.completedCourses} completed this semester`,

            icon: "courses",

            color: "primary",

            route:"/courses",
        },

        {
            id: "completion",

            title: "Completion Rate",

            value:
                `${metrics.completionRate}%`,

            trend:
                `${metrics.completedAssignments}/${metrics.totalAssignments} completed`,

            icon: "completion",

            color:
                metrics.completionRate >= 80
                    ? "success"
                    : metrics.completionRate >= 60
                    ? "warning"
                    : "danger",
        },

        {
            id: "forecast",

            title: "Forecast GPA",

            value:
                metrics.forecastGPA.toFixed(2),

            trend:
                metrics.forecastGPA >= student.targetGPA
                    ? "Goal Achieved"
                    : "Below Target",

            icon: "gpa",

            color:
                metrics.forecastGPA >= student.targetGPA
                    ? "success"
                    : "warning",
        },

        {
            id: "overdue",

            title: "Overdue Tasks",

            value:
                String(metrics.overdueAssignments),

            trend:
                metrics.overdueAssignments === 0
                    ? "All caught up"
                    : "Needs attention",

            icon: "overdue",

            color:
                metrics.overdueAssignments === 0
                    ? "success"
                    : "danger",
        }

    ];

}