import type { MetricCardModel } from "../../../core/models/MetricCardModel";

import type { CourseRuleContext } from "../models/CourseRuleContext";

import { buildMetricCards } from "../../../core/builders/buildMetricCards";


export function buildStats(

    context: CourseRuleContext

): MetricCardModel[] {


    return buildMetricCards([


        {

            id: "active",

            title: "Active Courses",

            value: context.metrics.active,

            trend:

                `${context.metrics.active} in progress`,

            icon: "courses",

            color: "primary",

        },


        {

            id: "completed",

            title: "Completed",

            value: context.metrics.completed,

            trend:

                `${context.metrics.completed} finished`,

            icon: "completion",

            color: "success",

        },


        {

            id: "progress",

            title: "Average Progress",

            value:

                `${context.metrics.averageProgress}%`,

            trend:

                "Overall completion",

            icon: "active",

            color: "primary",

        },


        {

            id: "risk",

            title: "At Risk",

            value:

                context.metrics.atRisk,

            trend:

                context.metrics.atRisk === 0

                    ? "All courses on track"

                    : "Needs attention",

            icon: "priority",

            color:

                context.metrics.atRisk === 0

                    ? "success"

                    : "warning",

        },


    ]);

}