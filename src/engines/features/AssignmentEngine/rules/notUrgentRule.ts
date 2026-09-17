import type {  AssignmentInsight  } from "../types";

import type { RuleModel } from "../../../core/models/RuleModel";

import type { AssignmentRuleContext } from "../models/AssignmentRuleContext";

import { getTimelineSection } from "../../../core/utils/getTimelineSection";


export const notUrgentRule: RuleModel <

    AssignmentRuleContext,
    AssignmentInsight

> = {

  id:"ahead",

  execute(context) {

  const today = getTimelineSection(
    context.timeline,
    "today"
  )

  if (

    context.metrics.overdue > 0 ||

    (today && today.count > 0)

) 

    return [];

  return [

      {

        id: "ahead",

        title: "You're Ahead",

        description:
            "No immediate deadlines detected.",

        recommendation:
            "Use this time to work ahead on upcoming assignments.",

        priority: 40,

      }

    ];
  }
}