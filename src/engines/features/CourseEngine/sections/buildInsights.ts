import type { CourseRuleContext } from "../models/CourseRuleContext";

import type { CourseInsights } from "../types";

import { buildRules } from "../../../core/builders/buildRules";

import {COURSE_RULES} from "../constants/courseRules"



export function buildInsights(

    context: CourseRuleContext

): CourseInsights {

  
    const items = buildRules(
      COURSE_RULES,
      context
    )


    return {

      items,

    };
}







    //  items.sort(

    //      (a, b) =>

    //          b.priority - a.priority

    //  );
