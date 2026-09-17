import type { ProgressPresentation } from "../models/ProgressPresentation";

export function buildProgressPresentation(

    value: number

): ProgressPresentation {

    if (value >= 90) {

        return {

            value,

            label: `${value}%`,

            color: "success",

            icon: "completion",

            status: "Excellent",

        };

    }

    if (value >= 75) {

        return {

            value,

            label: `${value}%`,

            color: "primary",

            icon: "gpa",

            status: "Good",

        };

    }

    if (value >= 60) {

        return {

            value,

            label: `${value}%`,

            color: "warning",

            icon: "courses",

            status: "Average",

        };

    }

    return {

        value,

        label: `${value}%`,

        color: "danger",

        icon: "overdue",

        status: "Needs Attention",

    };

}