import type { CourseInsight } from "../types"

import type { CourseRuleContext } from "../models/CourseRuleContext";

import type { RuleModel } from "../../../core/models/RuleModel"



export const progressRule:RuleModel<

CourseRuleContext,
CourseInsight

> = {

  id:"progress",


  execute(context) {
  if(context.metrics.averageProgress < 75)

      return null;


  return [
    {

      id:"progress",

      title:"Strong Course Progress",

      description:

          "Your overall course progress is looking good.",

      recommendation:

          "Maintain your current study schedule.",

      priority:50,

    }

  ];

}

};