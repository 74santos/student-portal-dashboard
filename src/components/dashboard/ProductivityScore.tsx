import type {
  AcademicMetrics,
} from "../../engines/features/AcademicEngine/types";

interface ProductivityScoreProps {
  metrics: AcademicMetrics;
}

export default function ProductivityScore({
  metrics,

}:ProductivityScoreProps) {

  
 const {
   productivityScore,
   completionRate,
   averageProgress,
   activityScore,
 } = metrics;

  return (

    <section className="productivity-score-card">

      <div className="section-header">

        <h2>
          Productivity Score
        </h2>

      </div>

      <div
        className="score-ring"
        style={{
          "--score": productivityScore,
        } as React.CSSProperties}
      >
        <div className="score-center">

          <span className="score-number">
            {productivityScore}
          </span>

          <small>
            Productivity
          </small>

        </div>

      </div>

      

      <p className="score-label">
      {productivityScore >= 80
        ? "Excellent"
        : productivityScore >= 60
        ? "Good"
        : productivityScore >= 40
        ? "Needs Improvement"
        : "At Risk"}
    </p>

    <div className="score-breakdown">

      <div>
        <span>Completion: </span>
        <strong>{completionRate}%</strong>
      </div>

      <div>
        <span>Course Progress: </span>
        <strong>{averageProgress}%</strong>
      </div>

      <div>
  <span>Activity Contribution</span>
  <strong>{activityScore} pts</strong>
      </div>

      </div>

    

    </section>

  );
}