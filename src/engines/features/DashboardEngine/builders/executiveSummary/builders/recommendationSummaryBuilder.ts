import { SUMMARY_PRIORITIES } from "../constants/summaryPriorities";
import type { SummaryBuilder } from "../types/SummaryBuilder";

export const recommendationSummaryBuilder: SummaryBuilder = {

    build(snapshot) {

        if (snapshot.report.recommendations.length === 0) {
            return [];
        }

        const highestPriorityRecommendation  =
            snapshot.report.recommendations[0];

        return [

            {

                title: "Top Recommendation",

                description:
                   highestPriorityRecommendation.description,

                severity: "warning",

                priority: SUMMARY_PRIORITIES.RECOMMENDATION,

            }

        ];

    }

};