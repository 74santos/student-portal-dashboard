import type { CourseInsight } from '../types';

import type { CourseRuleContext } from '../models/CourseRuleContext';

import type { RuleModel } from '../../../core/models/RuleModel';

export const atRiskRule: RuleModel<CourseRuleContext, CourseInsight> = {
  id: 'couse-risk',

  execute(context) {
    if (context.metrics.atRisk === 0) return [];

    return [
      {
        id: 'course-risk',

        title: 'Courses Need Attention',

        description: `${context.metrics.atRisk} course(s) are falling behind.`,

        recommendation: 'Review these courses and create a catch-up plan.',

        priority: 90,
      },
    ];
  },
};
