import type { Course } from "../../../../types";
import type { CourseProgressPoint } from "../types";

export function buildCourseProgressDataset(
    courses: Course[]
): CourseProgressPoint[] {

    return courses.map(course => ({
        course: course.name,
        progress: course.progress,
    }));

}