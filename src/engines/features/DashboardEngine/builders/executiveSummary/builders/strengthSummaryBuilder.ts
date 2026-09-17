import { SUMMARY_PRIORITIES } from "../constants/summaryPriorities";
import type { SummaryBuilder } from "../types/SummaryBuilder";


export const strengthSummaryBuilder: SummaryBuilder = {

  build(snapshot) {

    if (snapshot.report.strengths.length  === 0) {
          return [];
      }

      const strength =
       snapshot.report.strengths[0];

      return [

          {

            title: "You're Doing Great",

            description:
                strength.description,

            severity: "success",

            priority: SUMMARY_PRIORITIES.STRENGTH,

          }

      ];

  }

};