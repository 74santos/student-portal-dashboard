import type { DashboardOverview } from "../types";
import type { AcademicSnapshot } from "../../AcademicEngine/types";

import {
    buildHealthPresentation,
} from "../../../core/presentation/builders/buildHealthPresentation";
import { buildExecutiveSummary } from "./executiveSummary/";

export function buildDashboardOverview(

  snapshot: AcademicSnapshot

): DashboardOverview {

 

  const strongestCourse =
        snapshot.summary.strongestCourse;

    const weakestCourse =
        snapshot.summary.weakestCourse;

    const nextDeadline =
        snapshot.summary.nextDeadline;
           
    const summary =
        buildExecutiveSummary(snapshot)

    const health =
        buildHealthPresentation( snapshot.metrics.healthScore )

  return {

    strongestCourse,

    weakestCourse,

    nextDeadline,

    summary,

    health,

};

}










// const nextDeadline =
//         core.mostUrgentAssignment
//             ? `${core.mostUrgentAssignment.title}`
//             : "No upcoming deadlines";