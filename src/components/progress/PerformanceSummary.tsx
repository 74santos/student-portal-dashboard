import type {
  AcademicMetrics,
  AcademicAnalysis,
  AcademicSummary,
} from "../../engines/features/AcademicEngine/types";


interface PerformanceSummaryProps {
  metrics: AcademicMetrics;
  analysis: AcademicAnalysis;
  summary: AcademicSummary;
}

export default function PerformanceSummary({
  metrics,
  analysis,
  summary,
}: PerformanceSummaryProps ) {


  const {
    healthScore,
    completionRate,
    riskLevel,
    overdueAssignments,
  } = metrics;

  const {
    academicStanding,
    focusCourse,
  } = analysis;

  const {
    weakestCourse
  } = summary;

 
  return (

    <section className="dashboard-card">

      <div className="section-header">

        <div>

          <h2>
          Performance Summary
          </h2>

          {/* <p>
          Track academic strength, risk areas, and overall progress.
          </p> */}

        </div>

        <div className="health-score">

          {healthScore}

        </div>

      </div>

      <div className="performance-grid">

        <div className="performance-item">
          <span>Status</span>
          <strong>{academicStanding}</strong>
        </div>

        <div className="performance-item">
          <span>Completion</span>
          <strong>{completionRate}%</strong>
        </div>

        <div className="performance-item">
          <span>Risk Level</span>
          <strong>
            {riskLevel}
          </strong>
        </div>

        <div className="performance-item">
          <span>Focus Area</span>
          <strong>
            {focusCourse?.name ?? weakestCourse?.name ?? "None"}
          </strong>
        </div>

      </div>

      {overdueAssignments > 0 && (

        <div className="health-warning">

          {overdueAssignments}{" "}
          overdue assignment
          {overdueAssignments !== 1 ? "s" : ""}
          {" "}need
          {overdueAssignments === 1 ? "s" : ""}
          {" "}attention

        </div>

      )}

    </section>

  );
}