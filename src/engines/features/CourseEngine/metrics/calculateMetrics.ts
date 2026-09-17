import type { Course } from "../../../../types";

import type { CourseMetrics } from "../models/CourseMetrics";

export function calculateMetrics(

    courses: Course[]

): CourseMetrics {

    const metrics: CourseMetrics = {

        total: courses.length,

        active: 0,

        completed: 0,

        averageProgress: 0,

        atRisk: 0,

    };

    let totalProgress = 0;

    for (const course of courses) {

        totalProgress += course.progress;

        if (course.progress >= 100) {

            metrics.completed++;

        } else {

            metrics.active++;

        }

        if (course.progress < 40) {

            metrics.atRisk++;

        }

    }

    metrics.averageProgress =

        metrics.total === 0

            ? 0

            : Math.round(totalProgress / metrics.total);

    return metrics;

}