import { useContext } from "react";

import { AppContext }
from "../../context/AppContext";


import {
  FiAlertTriangle,
  FiTrendingUp,
  FiCheckCircle,
} from "react-icons/fi";

export default function PerformanceRecommendations() {

  const ctx = useContext(AppContext);

  if (!ctx) return null;

  const { snapshot } = ctx;

  const recommendations =
  snapshot.report.recommendations;

  const iconMap = {

    high:
      <FiAlertTriangle />,

    medium:
      <FiTrendingUp />,

    low:
      <FiCheckCircle />,

  };

  return (
    // recommendations-card
    <section
      className="dashboard-card"
    >

      <div className="section-header">

        <div>

          <h2>
            Performance Recommendations
          </h2>

          <p>
            Suggested actions based on
            current academic performance
          </p>

        </div>

      </div>

      <div className="recommendations-list">

        {recommendations.map(
          (recommendation) => (

          <div
            key={recommendation.title}
            className={`recommendation-item ${recommendation.priority}`}
          >

            <div className="recommendation-icon">

              {
                iconMap[
                  recommendation.priority
                ]
              }

            </div>

            <div>

              <h4>
                {recommendation.title}
              </h4>

              <p>
                {recommendation.description}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>

  );
}