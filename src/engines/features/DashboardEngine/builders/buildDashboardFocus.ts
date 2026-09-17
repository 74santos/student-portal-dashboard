import type { AcademicSnapshot } from "../../AcademicEngine/types";
import type { DashboardFocus } from "../types";

import { buildFocus } from "./focus";

export function buildDashboardFocus(
    snapshot: AcademicSnapshot
): DashboardFocus[] {

    return buildFocus(snapshot);

}