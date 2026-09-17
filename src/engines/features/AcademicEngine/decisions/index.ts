import { assignmentDecisions } from "./assignment";
import { courseDecisions } from "./course";
import { goalDecisions } from "./goal";
import { productivityDecisions } from "./productivity"

import type {
  AcademicDecision,
  AcademicSnapshot,
} from "../types";

export function makeAcademicDecisions(
  snapshot: AcademicSnapshot
): AcademicDecision[] {

  const decisions: AcademicDecision[] = [

    ...assignmentDecisions(snapshot),

    ...courseDecisions(snapshot),

    ...goalDecisions(snapshot),

    ...productivityDecisions(snapshot),

  ];

  const priority = {

    critical: 0,

    warning: 1,

    info: 2,

    success: 3,

  };

  decisions.sort(
    (a, b) =>
      priority[a.priority] -
      priority[b.priority]
  );

  return decisions;

}