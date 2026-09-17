import { buildPriorityPresentation } from "../../../../../core/presentation";
import { FOCUS_SCORES } from "../constants/focusScores";
import type { FocusBuilder} from "../types/focusBuilder";

export const healthFocusBuilder: FocusBuilder = {

  build(snapshot) {

    if (snapshot.metrics.healthScore >= 75) {
          return [];
      }

      return [

          {

              title: "Improve Academic Health",

              description: `Current health score is ${snapshot.metrics.healthScore}.`,

              priority: buildPriorityPresentation("High"),

              score:
                  FOCUS_SCORES.LOW_HEALTH,

              route:
                  "/assignments",

          }

      ];

  }

};