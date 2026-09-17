import { buildPriorityPresentation } from "../../../../../core/presentation";
import { FOCUS_SCORES } from "../constants/focusScores";
import type { FocusBuilder} from "../types/focusBuilder";


export const momentumFocusBuilder: FocusBuilder = {

  build(snapshot) {

    if (snapshot.analysis.momentum !== "Declining") {
          return [];
      }

      return [

          {

              title: "Increase Study Consistency",

              description: "Your academic momentum is declining.",

              priority: buildPriorityPresentation("Medium"),

              score:
                  FOCUS_SCORES.DECLINING_MOMENTUM,

              route:
                  "/assignments",

          }

      ];

  }

};