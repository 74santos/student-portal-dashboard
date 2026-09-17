import type { AcademicSnapshot } from "../../AcademicEngine/types";
import type { DashboardHero } from "../types";
import { buildHealthPresentation } from "../../../core/presentation/builders/buildHealthPresentation";
import { buildMomentumPresentation } from "../../../core/presentation/builders/buildMomentumPresentation";
import { buildStandingPresentation } from "../../../core/presentation/builders/buildStandingPresentation";

export function buildDashboardHero(
    snapshot: AcademicSnapshot
): DashboardHero {

    const hour = new Date().getHours();

    const greeting =
        hour < 12
            ? "Good Morning"
            : hour < 18
            ? "Good Afternoon"
            : "Good Evening";

    const studentName =
        // snapshot.student.firstName ??
        snapshot.student.name ??
        "Student";

    return {

        greeting,

        studentName,

        title: `${greeting}, ${studentName}`,

        subtitle:
            "Here's what's happening with your courses today.",

        academicStanding:
            buildStandingPresentation(
            snapshot.analysis.academicStanding,
            ),

        health:
            buildHealthPresentation(
                snapshot.metrics.healthScore
            ),

        momentum:
            buildMomentumPresentation(
            snapshot.analysis.momentum,
            ),

        nextDeadline:
            snapshot.summary.nextDeadline,
        
        focusCourse:
            snapshot.analysis.focusCourse,

    };

}