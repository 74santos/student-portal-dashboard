export interface RuleModel<TContext, TResult> {

  id: string;

  execute(
      context: TContext
  ): TResult[];

}