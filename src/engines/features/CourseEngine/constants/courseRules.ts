import {  atRiskRule } from "../rules/atRiskRule";
import {  progressRule } from "../rules/progressRule";
import {  completionRule } from "../rules/completionRule";
import {  momentumRule } from "../rules/momentumRule";


export const COURSE_RULES = [

  atRiskRule,

  progressRule,

  completionRule,

  momentumRule,

] as const;