import type { TimelineSection } from "../models/TimelineModel";

export function buildTimelineSection<T>(

    id: string,

    title: string,

    items: T[],

    emptyMessage: string

): TimelineSection<T> {

    return {

        id,

        title,

        count: items.length,

        items,

        emptyMessage,

    };

}