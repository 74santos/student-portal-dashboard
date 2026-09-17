import type { DisplayModel, DisplaySection } from "../models/DisplayModel";
import type { DisplayOptions } from "../models/DisplayOptions";
import type { TimelineModel } from "../models/TimelineModel";

export function buildDisplay<T>(

    timeline: TimelineModel<T>,

    options: DisplayOptions,

    // getSearchText: ( item: T ) => string,

    predicate?: ( item: T, options: DisplayOptions ) => boolean,
    
    getSearchText: ( item: T ) => string = ( item ) => ( item as any).title ?? "" ,

 
   
): DisplayModel<T> {

    const search =
        options.search.toLowerCase();

    const sections: DisplaySection<T>[] =
        timeline.sections.map(section => {

            const items = section.items.filter(item => {

                const matchesSearch =
                    getSearchText(item)
                        .toLowerCase()
                        .includes(search);

                if (!matchesSearch)
                    return false;

                return predicate
                    ? predicate(item, options)
                    : true;

            });

            return {

                ...section,

                count: items.length,

                items,

            };

        });

    return {

        sections:

            sections.filter(
                section => section.count > 0
            ),

        totalVisible:

            sections.reduce(

                (total, section) =>

                    total + section.count,

                0

            ),

    };

}







// export function buildDisplay<T extends { title: string }>(

//     timeline: TimelineModel<T>,

//     options: DisplayOptions,

//     predicate?: (
//         item: T,
//         options: DisplayOptions
//     ) => boolean

// ): DisplayModel<T>