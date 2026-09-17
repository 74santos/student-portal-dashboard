import type { CourseInsight } from "../types";
import type { CourseRuleContext } from "../models/CourseRuleContext";
import type { RuleModel } from "../../../core/models/RuleModel";

export const completionRule: RuleModel <
    CourseRuleContext,
    CourseInsight
> = {
    id: "completion",

    execute(context) {
        if (context.metrics.completed === 0)
            return null;

        return [
            {
                id: "completion",
                title: "Completed Courses",
                description: `You've completed ${context.metrics.completed} course(s).`,
                recommendation: "Celebrate your progress and keep the momentum going.",
                priority: 45,
            }
        ];
    }
};