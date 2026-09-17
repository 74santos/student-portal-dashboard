import type { Assignment, Course, Activity } from "../../../types";
import type { StudentProfile } from "../../../types/student";
import type { AcademicSnapshot } from "./types";


import { buildAcademicMetrics } from "./metrics/buildAcademicMetrics"
import { buildAcademicAnalysis } from "./analysis/buildAcademicAnalysis";
import { analyzeAcademicCore } from "./core/analyzeAcademicCore";
import { buildAcademicReport }  from "./report/buildAcademicReport"
import { buildRecommendations } from "./recommendations/buildRecommendations";
import { buildAchievements } from "./achievements/buildAchievements";
import { buildAcademicDecisions } from "./decisions/buildAcademicDecisions";
import { buildInsights } from "./insights/buildInsights"

import {buildAcademicSummary} from "./summary/buildAcademicSummary"


export function buildAcademicSnapshot(
    student: StudentProfile,
    courses: Course[],
    assignments: Assignment[],
    activities: Activity[]
): AcademicSnapshot {

    //────────────────────────────────────
    // Stage 1 — Metrics
    //────────────────────────────────────

    const metrics = buildAcademicMetrics(
        courses,
        assignments,
        activities
    );

    //────────────────────────────────────
    // Stage 2 — Core Analysis
    //────────────────────────────────────

    const core = analyzeAcademicCore(
        metrics,
        courses,
        assignments
    );

    //────────────────────────────────────
    // Stage 3 — Intelligence
    //────────────────────────────────────

    const analysis = buildAcademicAnalysis(
        student,
        metrics,
        core
    );

    //────────────────────────────────────
    // Stage 4 — Decision Engine
    //────────────────────────────────────

    const { strengths, weaknesses } =
        buildInsights(
            analysis,
            metrics,
            core
        );

    const recommendations =
        buildRecommendations(
            analysis,
            core
        );

    const achievements =
        buildAchievements(
            metrics
        );

    const decisions =
        buildAcademicDecisions(
            analysis,
            core
        );

    //────────────────────────────────────
    // Stage 5 — Report
    //────────────────────────────────────

    const report =
        buildAcademicReport(
            decisions,
            recommendations,
            achievements,
            strengths,
            weaknesses
        );


    //────────────────────────────
    // Stage 6 — Executive Summary
    //────────────────────────────

    const summary = buildAcademicSummary(core);

    //────────────────────────────
    // Stage 7 — Snapshot



    return {

        student,

        metrics,

        core,

        analysis,

        report,

        summary,

    };


}