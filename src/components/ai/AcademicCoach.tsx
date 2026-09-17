import { useAcademicCoach } from "../../services/ai/hooks/useAcademicCoach";

export default function AcademicCoach() {
  const { studyPlan, loading, error } = useAcademicCoach();

  if (loading) {
    return (
      <section className="dashboard-card academic-coach">
        <div className="academic-coach-header">
          <div>
            <span className="academic-coach-eyebrow">✦ AI Academic Coach</span>
            <h2>Planning your next steps...</h2>
          </div>

          <span className="academic-coach-badge">AI</span>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="dashboard-card academic-coach">
        <div className="academic-coach-header">
          <div>
            <span className="academic-coach-eyebrow">✦ AI Academic Coach</span>
            <h2>Your study plan is unavailable</h2>
          </div>

          <span className="academic-coach-badge">AI</span>
        </div>

        <p className="academic-coach-message">{error}</p>
      </section>
    );
  }

  if (!studyPlan) {
    return null;
  }

  return (
    <section className="dashboard-card academic-coach">
      <div className="academic-coach-header">
        <div>
          <span className="academic-coach-eyebrow">
            ✦ AI Academic Coach
          </span>

          <h2>{studyPlan.greeting}</h2>

          <p className="academic-coach-message">
            {studyPlan.summary}
          </p>
        </div>

        <span className="academic-coach-badge">AI</span>
      </div>

      {studyPlan.recommendations.length > 0 ? (
        <div className="academic-coach-recommendations">
          {studyPlan.recommendations.map((recommendation, index) => (
            <article
              className="academic-coach-recommendation"
              key={recommendation.assignmentId}
            >
              <div className="academic-coach-number">
                {index + 1}
              </div>

              <div className="academic-coach-recommendation-content">
                <div className="academic-coach-recommendation-top">
                  <div>
                    <h3>{recommendation.title}</h3>

                    <p>
                      {recommendation.courseName} · Due{" "}
                      {recommendation.dueDate}
                    </p>
                  </div>

                  <span
                    className={`academic-coach-priority academic-coach-priority-${recommendation.priority}`}
                  >
                    {recommendation.priority}
                  </span>
                </div>

                <div className="academic-coach-recommendation-bottom">
                  <span>
                    Recommended:{" "}
                    <strong>
                      {recommendation.recommendedHours}h
                    </strong>
                  </span>

                  <span>{recommendation.reason}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="academic-coach-empty">
          <strong>You're caught up.</strong>
          <span>
            Use your available study time to review upcoming material.
          </span>
        </div>
      )}

      <div className="academic-coach-footer">
        <div>
          <span>Today's recommended study time</span>
          <strong>
            {studyPlan.totalRecommendedHours} hours
          </strong>
        </div>

        <button type="button" className="academic-coach-action">
          Start Focus Session
        </button>
      </div>
    </section>
  );
}