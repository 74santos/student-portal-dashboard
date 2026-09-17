import type { AcademicSnapshot } from "../../../AcademicEngine/types";

import type { ExecutiveSummary } from "../../../../core/presentation/models/ExecutiveSummary";


import { recommendationSummaryBuilder } from "./builders/recommendationSummaryBuilder";
import { weaknessSummaryBuilder } from "./builders/weaknessSummaryBuilder";
import { strengthSummaryBuilder } from "./builders/strengthSummaryBuilder";
import { achievementSummaryBuilder } from "./builders/achievementSummaryBuilder";
import { decisionSummaryBuilder } from "./builders/decisionSummaryBuilder";

import { selectHighestPriority } from "../../../../core/selectors/selectHighestPriority";
import type { SummaryBuilder } from "./types/SummaryBuilder";
import { DEFAULT_SUMMARY } from "./constants/defaultSummary";



const builders: readonly SummaryBuilder[] = [

  recommendationSummaryBuilder,

  weaknessSummaryBuilder,

  achievementSummaryBuilder,

  strengthSummaryBuilder,

  decisionSummaryBuilder,

];

export function buildExecutiveSummary(

  snapshot: AcademicSnapshot

): ExecutiveSummary {


  const summaries = builders.flatMap(builder =>
    builder.build(snapshot)
  );

  const summary =  selectHighestPriority(summaries);

  return  summary ?? DEFAULT_SUMMARY;

}