import { SUMMARY_PRIORITIES } from "../constants/summaryPriorities";
import type { SummaryBuilder } from "../types/SummaryBuilder";


export const decisionSummaryBuilder: SummaryBuilder = {

  build(snapshot) {

      if (snapshot.report.decisions.length === 0) {
          return [];
      }

      const decision =
         snapshot.report.decisions[0];

      return [

          {

            title: "Academic Decision",

            description:
                decision.description,
      
            severity: "primary",
      
            priority: SUMMARY_PRIORITIES.DECISION,

          }

      ];

  }

};