
import { buildDisplay } from "../../../core/builders/buildDisplay";

import type { Assignment } from "../../../../types";

import type { DisplayOptions } from "../../../core/models/DisplayOptions";

import type { TimelineModel } from "../../../core/models/TimelineModel";






export function buildAssignmentDisplay(

    timeline: TimelineModel<Assignment>,

    options: DisplayOptions

) {

    return buildDisplay(

        timeline,

        options,

        (assignment, options) => {

            switch (options.filter) {

                case "active":

                    return !assignment.completed;

                case "completed":

                    return assignment.completed;

                case "high":

                    return assignment.priority === "high";

                default:

                    return true;

            }

        }

    );

}