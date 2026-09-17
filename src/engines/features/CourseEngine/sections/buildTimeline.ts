import type { Course } from "../../../../types";

import type {  TimelineModel, } from "../../../core/models/TimelineModel";

import  { buildTimelineSection } from "../../../core/builders/buildTimelineSection"

import {

    getActiveCourses,

    getCompletedCourses,

    getNearlyCompletedCourses,

    getAtRiskCourses,

} from "../utils/courseHelpers";




export function buildTimeline(

    courses: Course[]

): TimelineModel<Course> {

    const active =
        getActiveCourses(courses);

    const nearly =
        getNearlyCompletedCourses(courses);

    const completed =
        getCompletedCourses(courses);

    const atRisk =
        getAtRiskCourses(courses);


    const sections = [
        buildTimelineSection(
            "active",
            "Active",
            active,
            "No active courses."
        ),

        buildTimelineSection(
            "nearly",
            "Nearly Complete",
            nearly,
            "Nothing close to completion."
        ),

        buildTimelineSection(
            "completed",
            "Completed",
            completed,
            "No completed courses."
        ),

        buildTimelineSection(
            "risk",
            "Needs Attention",
            atRisk,
           "Great work! No courses need attention."
        ),

    ]

    

    return {

        sections,

    };

}






























// const sections: TimelineSection<Course>[] = [

//     {

//         id: "active",

//         title: "Active",

//         count: active.length,

//         items: active,

//         emptyMessage:
//             "No active courses."

//     },

//     {

//         id: "nearly",

//         title: "Nearly Complete",

//         count: nearly.length,

//         items: nearly,

//         emptyMessage:
//             "Nothing close to completion."

//     },

//     {

//         id: "completed",

//         title: "Completed",

//         count: completed.length,

//         items: completed,

//         emptyMessage:
//             "No completed courses."

//     },

//     {

//         id: "risk",

//         title: "Needs Attention",

//         count: atRisk.length,

//         items: atRisk,

//         emptyMessage:
//             "Great work! No courses need attention."

//     }

// ];