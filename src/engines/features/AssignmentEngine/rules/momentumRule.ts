import type { AssignmentInsight } from "../types";

import type { RuleModel } from "../../../core/models/RuleModel";

import type { AssignmentRuleContext } from "../models/AssignmentRuleContext";



export const momentumRule:RuleModel <

    AssignmentRuleContext,
    AssignmentInsight

> = {

  id:"momentum",

  execute(context) {

  if (

      context.metrics.completed <= context.metrics.active

  )

      return [];

  return [

      {

          id: "momentum",

          title: "Excellent Momentum",

          description:

              "You're completing assignments consistently.",

          recommendation:

              "Maintain your current study schedule.",

          priority: 50,

      }

  ];

}

};