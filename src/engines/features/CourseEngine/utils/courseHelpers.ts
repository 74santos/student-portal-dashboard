import type { Course } from "../../../types";

//
// Filters
//

export function getActiveCourses(
    courses: Course[]
): Course[] {

    return courses.filter(

    course =>

      course.progress >= 40 &&

      course.progress < 80

    );

}

export function getCompletedCourses(
    courses: Course[]
): Course[] {

    return courses.filter(

        course => course.progress === 100

    );

}


export function getNearlyCompletedCourses(
  courses: Course[]
): Course[] {

  return courses.filter(

      course =>

          course.progress >= 80 &&

          course.progress < 100

  );

}



export function getAtRiskCourses(
    courses: Course[]
): Course[] {

    return courses.filter(

        course => course.progress < 40

    );

}


//
// Calculations
//


export function getAverageProgress(
  courses: Course[]
): number {

  if (courses.length === 0)

      return 0;

  const total = courses.reduce(

      (sum, course) =>

          sum + course.progress,

      0

  );

  return Math.round(total / courses.length);

}


//
// Counts
//


export function countActiveCourses(
  courses: Course[]
): number {

  return getActiveCourses(courses).length;

}

export function countCompletedCourses(
  courses: Course[]
): number {

  return getCompletedCourses(courses).length;

}

export function countAtRiskCourses(
  courses: Course[]
): number {

  return getAtRiskCourses(courses).length;

}


export function countNearlyCompletedCourses (
   courses: Course[]
): number {
   return getNearlyCompletedCourses(courses).length
}