import { buildPriorityPresentation } from "../../../../../core/presentation";
import { FOCUS_SCORES } from "../constants/focusScores";
import type { FocusBuilder} from "../types/focusBuilder";


export const assignmentFocusBuilder: FocusBuilder = {

  build(snapshot) {

      if (snapshot.metrics.overdueAssignments === 0) {
          return [];
      }

      return [

          {

              title: "Finish Overdue Assignments",

              description: `${snapshot.metrics.overdueAssignments} assignment(s) are overdue.`,

              priority: buildPriorityPresentation("High"),

              score:
                  FOCUS_SCORES.URGENT_ASSIGNMENT,

              route:
                  "/assignments",

          }

      ];

  }

};