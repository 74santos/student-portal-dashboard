import type { Course, Assignment } from "../../../../types";
import type { CourseCore, CoursePerformance } from "./types";

import {
    calculateCoursePerformance,
    getCoursePerformanceStatus,
  } from "./calculateCoursePerformance";
  

export function buildCourseCore(
  courses: Course[],
  assignments: Assignment[]

): CourseCore {

    const completedCourseList =
        courses.filter(
            course => course.progress >= 100
        );

    const rankings: CoursePerformance[] =
    courses
        .map(course => {

        const score =
            calculateCoursePerformance(
            course,
            assignments
            );

        return {

            course,

            score,

            status:
            getCoursePerformanceStatus(
                score
            ),

        };

        })
        .sort(
        (a, b) =>
            b.score - a.score
        );

    const strongestCourse =
        rankings.length
            ? rankings[0].course
            : null;
        
    
    const weakestCourse =
        rankings.length
          ? rankings[rankings.length - 1].course
          : null;
    
    
    const averageProgress =
        courses.length
          ? Math.round(
              courses.reduce(
                (sum, course) =>
                  sum + course.progress,
                0
              ) / courses.length
            )
          : 0;
    
    
    const totalCourses =
        courses.length;
    
    
    const completedCourses =
        completedCourseList.length;




  return {

    weakestCourse,

    strongestCourse,

    averageProgress,

    totalCourses,

    completedCourses,

    rankings,

  };

}