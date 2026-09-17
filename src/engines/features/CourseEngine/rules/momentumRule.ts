import type { CourseInsight } from "../types";

import type { CourseRuleContext } from "../models/CourseRuleContext";

import type { RuleModel } from "../../../core/models/RuleModel";

export const momentumRule: RuleModel<
    CourseRuleContext,
    CourseInsight
> = {

    id: "momentum",

    execute(context) {

        if (

            context.metrics.averageProgress < 85 ||

            context.metrics.completed === 0

        )

            return null;

        return [

            {

                id: "momentum",

                title: "Excellent Momentum",

                description:

                    "You're making consistent progress across your courses.",

                recommendation:

                    "Keep following your current study routine.",

                priority: 40,

            }

        ];

    }

};