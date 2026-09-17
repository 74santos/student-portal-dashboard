// import type { DisplayOptions } from "../../core/models/DisplayOptions";

import type { DisplaySection, DisplayModel } from "../../../core/models/DisplayModel"



export function buildDisplay<T>(

  sections: DisplaySection<T>[],

  // options: DisplayOptions

): DisplayModel<T> {

  const visibleSections =
      sections.filter(section => section.count > 0);

  const totalVisible =
      visibleSections.reduce(

          (total, section) =>  total + section.count,

          0

      );

  return {

      sections: visibleSections,

      totalVisible,

  };

}