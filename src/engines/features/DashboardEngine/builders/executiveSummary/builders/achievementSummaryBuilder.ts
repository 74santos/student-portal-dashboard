import { SUMMARY_PRIORITIES } from "../constants/summaryPriorities";
import type { SummaryBuilder } from "../types/SummaryBuilder";


export const achievementSummaryBuilder: SummaryBuilder = {

  build(snapshot) {

    if (snapshot.report.achievements.length  === 0) {
          return [];
      }

    const achievement =
      snapshot.report.achievements[0];

      return [

          {

            title: "Achievement Unlocked",

            description:
                achievement.title,
      
            severity: "success",
      
            priority: SUMMARY_PRIORITIES.ACHIEVEMENT,

          }

      ];

  }

};