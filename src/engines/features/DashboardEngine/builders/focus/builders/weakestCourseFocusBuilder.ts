import { buildPriorityPresentation, buildProgressPresentation } from "../../../../../core/presentation";
import { FOCUS_SCORES } from "../constants/focusScores";
import type { FocusBuilder} from "../types/focusBuilder";



export const weakestCourseFocusBuilder: FocusBuilder = {


  build(snapshot) {


    if (!snapshot.summary.weakestCourse) {
          return [];
      }

      return [

          {

              title: `Study ${snapshot.summary.weakestCourse.name}`,

              description:`Progress is ${snapshot.summary.weakestCourse.progress}%`,

              priority: buildPriorityPresentation("Medium"),

              score: FOCUS_SCORES.WEAKEST_COURSE,

              progress: buildProgressPresentation( snapshot.summary.weakestCourse?.progress ?? 0  ),

              route: "/assignments",

          }

      ];

  }

};