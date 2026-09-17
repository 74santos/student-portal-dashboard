import type { MetricCardModel } from "../models/MetricCardModel";

export function buildMetricCards(

    cards: MetricCardModel[]

): MetricCardModel[] {

    return cards.map(card => ({
        ...card,
        trend:
          card.trend.trim(),
    }));
    

}