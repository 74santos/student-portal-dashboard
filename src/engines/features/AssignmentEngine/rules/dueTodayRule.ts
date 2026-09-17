import type { RuleModel } from "../../../core/models/RuleModel";

import type { AssignmentRuleContext } from "../models/AssignmentRuleContext";

import type {  AssignmentInsight } from "../types";

import { getTimelineSection } from "../../../core/utils/getTimelineSection";


export const dueTodayRule: RuleModel<
  AssignmentRuleContext,
  AssignmentInsight
> = {

    id:"today",

    execute(context) {

    const today = getTimelineSection(
        context.timeline,
        "today"
    );

  if (!today || today.count === 0)

      return [];

        return [

            {

                id: "today",

                title: "Due Today",

                description:

                    `${today.count} assignment(s) are due today.`,

                recommendation:

                    "Prioritize today's assignments before starting new work.",

                priority: 90,

                }
            ];
        }

};