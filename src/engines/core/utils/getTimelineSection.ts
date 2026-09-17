import type { TimelineModel, TimelineSection }
from "../models/TimelineModel";

export function getTimelineSection<T>(

    timeline: TimelineModel<T>,

    id: string

): TimelineSection<T> | undefined {

    return timeline.sections.find(

        section => section.id === id

    );

}