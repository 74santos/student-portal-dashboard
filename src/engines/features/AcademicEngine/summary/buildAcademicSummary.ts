import type { AcademicCoreAnalysis } from "../core/types"
import type { AcademicSummary } from "../types";

export function buildAcademicSummary(

    core: AcademicCoreAnalysis

): AcademicSummary {

    return {

        strongestCourse: core.strongestCourse,

        weakestCourse: core.weakestCourse,

        nextDeadline: core.mostUrgentAssignment,

    };

}