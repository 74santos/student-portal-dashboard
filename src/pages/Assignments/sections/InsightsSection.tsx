import type { InsightsProps } from "../types";

export function InsightsSection({

  insights,

}:InsightsProps ) {

  if (insights.length === 0) {

      return null;

  }

  return (

    <section className="insights-section">

          <h2 className="section-title">
              Smart Insights
          </h2>

          <div className="insights-list">

              {insights.map((insight) => (

                  <div
                      key={insight.id}
                      className="insight-item"
                  >

                      <span className="insight-title">
                          {insight.title}
                      </span>

                      <span className="insight-message">
                          {insight.description}
                      </span>

                      <span className="insight-recommendation">
                          {insight.recommendation}
                      </span>

                  </div>

              ))}

          </div>

      </section>
  );

}