import { SUMMARY_PRIORITIES } from "../constants/summaryPriorities";
import type { SummaryBuilder } from "../types/SummaryBuilder";


export const weaknessSummaryBuilder: SummaryBuilder = {

  build(snapshot) {

      if (snapshot.report.weaknesses.length === 0) {
            return [];
      }

      const weakness =
          snapshot.report.weaknesses[0];

      return [
        {
              title: "Needs Attention",

              description:
                  weakness.description,

              severity: "danger",

              priority: SUMMARY_PRIORITIES.WEAKNESS,
              
          }

        ];

    }

};