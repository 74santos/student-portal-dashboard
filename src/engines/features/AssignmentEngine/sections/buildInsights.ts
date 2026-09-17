// import type { Assignment, Course } from "../../../types";

import type {  AssignmentInsights, } from "../types";

import type { AssignmentRuleContext } from "../models/AssignmentRuleContext";

import {  overdueRule, } from "../rules/overdueRule";

import { dueTodayRule, } from "../rules/dueTodayRule";

import { momentumRule, } from "../rules/momentumRule";

import { notUrgentRule } from "../rules/notUrgentRule"
import { buildRules } from "../../../core/builders/buildRules";




export function buildInsights(

context: AssignmentRuleContext

): AssignmentInsights {

        const rules = [

          overdueRule,

          dueTodayRule,

          momentumRule,

          notUrgentRule,

      ];

       const items = buildRules(
         rules,
         context
       )

        items.sort(

            (a, b) =>

                b.priority - a.priority

        );

  return {

      items,

  };

}