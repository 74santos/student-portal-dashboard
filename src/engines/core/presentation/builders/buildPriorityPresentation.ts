import type { PriorityPresentation } from "../models/PriorityPresentation";


export function buildPriorityPresentation(

    priority:
        | "Low"
        | "Medium"
        | "High"

): PriorityPresentation {


    switch(priority) {


        case "High":

            return {

                label: priority,

                color: "danger",

                icon: "priority",

            };


        case "Medium":

            return {

                label: priority,

                color: "warning",

                icon: "priority",

            };


        default:

            return {

                label: priority,

                color: "success",

                icon: "courses",

            };

    }

}