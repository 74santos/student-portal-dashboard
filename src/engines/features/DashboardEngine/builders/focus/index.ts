import type { AcademicSnapshot } from "../../../AcademicEngine/types";

import type { DashboardFocus } from "../../types";

import type { FocusBuilder } from "./types/focusBuilder"

import { assignmentFocusBuilder } from "./builders/assignmentFocusBuilder";

import { weakestCourseFocusBuilder } from "./builders/weakestCourseFocusBuilder";

import { healthFocusBuilder } from "./builders/healthFocusBuilder";

import { momentumFocusBuilder } from "./builders/momentumFocusBuilder";

import { buildPriorityPresentation } from "../../../../core/presentation";



const builders: readonly FocusBuilder[] = [

  assignmentFocusBuilder,

  weakestCourseFocusBuilder,

  healthFocusBuilder,

  momentumFocusBuilder,

];



export function buildFocus(

  snapshot: AcademicSnapshot

): DashboardFocus[] {

  const focus = builders.flatMap(builder =>
      builder.build(snapshot)
  );

  if (focus.length === 0) {

    return [

        {

            title: "You're Doing Great",

            description:

                "Keep up your current study habits.",

            priority:

                buildPriorityPresentation("Low"),

            score: 0,

        }

    ];

}

return [...focus].sort(
    (a, b) => b.score - a.score
);

}