import type { AcademicSnapshot } from "../AcademicEngine/types";

import type {
    DashboardModel,
} from "./types";

import { buildDashboardHero } from "./builders/buildDashboardHero";
import { buildDashboardStats } from "./builders/buildDashboardStats";
import { buildDashboardOverview } from "./builders/buildDashboardOverview";
import { buildDashboardFocus } from "./builders/buildDashboardFocus";

export function buildDashboard(
    snapshot: AcademicSnapshot
): DashboardModel {

    return {

        hero:
            buildDashboardHero(snapshot),

        stats:
            buildDashboardStats(snapshot),

        overview:
            buildDashboardOverview(snapshot),

        focus:
            buildDashboardFocus(snapshot),

    };

}