import type { AcademicSnapshot } from "../../../../../features/AcademicEngine/types";

import type { ExecutiveSummary } from "../../../../../core/presentation";

export interface SummaryBuilder {

    build(
        snapshot: AcademicSnapshot
    ): readonly ExecutiveSummary[];

}