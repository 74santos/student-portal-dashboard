import type { AcademicStanding } from "../../../features/AcademicEngine/types";
import type { StandingPresentation } from "../models/StandingPresentation";



export function buildStandingPresentation(

    standing: AcademicStanding

): StandingPresentation {

    switch (standing) {

        case "Excellent":

            return {

                label: standing,

                color: "success",

                icon: "completion",

            };

        case "Strong":

            return {

                label: standing,

                color: "primary",

                icon: "gpa",

            };

        case "Moderate":

            return {

                label: standing,

                color: "warning",

                icon: "courses",

            };

        default:

            return {

                label: standing,

                color: "danger",

                icon: "overdue",

            };

    }

}