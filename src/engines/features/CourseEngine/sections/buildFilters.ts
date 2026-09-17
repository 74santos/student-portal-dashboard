import type { Course } from "../../../../types";

import type { CourseFilters } from "../types";

import {
    countActiveCourses,
    countCompletedCourses,
    countAtRiskCourses,
    countNearlyCompletedCourses,
} from "../utils/courseHelpers";

export function buildFilters(

    courses: Course[]

): CourseFilters {

    return {

        total: courses.length,

        active: countActiveCourses(courses),

        nearly: countNearlyCompletedCourses(courses),

        completed: countCompletedCourses(courses),

        risk: countAtRiskCourses(courses),

    };

}