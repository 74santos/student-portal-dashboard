import type { AcademicMomentum } from "../../../features/AcademicEngine/types";
import type { MomentumPresentation } from "../models/MomentumPresentation";


export function buildMomentumPresentation(

  momentum: AcademicMomentum

): MomentumPresentation {

  return {

    label: momentum,

    icon:

        momentum === "Improving"

            ? "completion"

            : momentum === "Stable"

            ? "courses"

            : "overdue",

      };

}