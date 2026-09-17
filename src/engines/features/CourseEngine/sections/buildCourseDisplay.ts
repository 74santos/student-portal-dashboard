import { buildDisplay } from "../../../core/builders/buildDisplay";

import type { Course } from "../../../../types";

import type { TimelineModel } from "../../../core/models/TimelineModel";
import type { DisplayOptions } from "../../../core/models/DisplayOptions";

export function buildCourseDisplay(

    timeline: TimelineModel<Course>,

    options: DisplayOptions

) {

    return buildDisplay(

        timeline,

        options,

        (course, options) => {

            switch (options.filter) {

                case "active":

                    return course.progress < 80;

                case "nearly":

                    return course.progress >= 80 &&
                           course.progress < 100;

                case "completed":

                    return course.progress === 100;

                case "risk":

                    return course.progress < 40;

                default:

                    return true;

            }

        }

    );

}