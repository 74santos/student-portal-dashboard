import type { AssignmentInsight  } from "../types";

import type { AssignmentRuleContext } from "../models/AssignmentRuleContext"

import type { RuleModel } from "../../../core/models/RuleModel"



export const overdueRule: RuleModel<
    AssignmentRuleContext,
    AssignmentInsight
> = {

    id: "overdue",

    execute(context) {

        if (context.metrics.overdue === 0)

            return [];

        return [

            {

                id: "overdue",

                title: "Overdue Assignments",

                description:
                    `${context.metrics.overdue} assignment(s) are overdue.`,

                recommendation:
                    "Complete overdue work before beginning new assignments.",

                priority: 100,

            }

        ];

    }

};