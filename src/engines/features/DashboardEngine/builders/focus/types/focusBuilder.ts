import type { AcademicSnapshot } from "../../../../../features/AcademicEngine/types";

import type { DashboardFocus } from "../../../types";

export interface FocusBuilder {

    build(

        snapshot: AcademicSnapshot

    ): readonly DashboardFocus[];

}