import type { MetricCardModel } from "./MetricCardModel";
import type { TimelineModel } from "./TimelineModel";
import type { DisplayModel } from "./DisplayModel";

export interface EngineModel<
    TMetrics,
    TItem,
    TFilters,
    TInsights
> {

    metrics: TMetrics;

    stats: MetricCardModel[];

    filters: TFilters;

    timeline: TimelineModel<TItem>;

    display: DisplayModel<TItem>;

    insights: TInsights;

}