import type { RuleModel } from "../models/RuleModel";

export function buildRules<TContext, TResult>(

    rules: ReadonlyArray<RuleModel<TContext, TResult>>,

    context: TContext

): TResult[] {

    return rules.flatMap(rule =>

        rule.execute(context)

    );

}