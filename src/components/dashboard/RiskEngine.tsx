import { useContext } from "react";

import { AppContext } from "../../context/AppContext";

import {
  calculateCourseRisks,
} from "../../utils/riskEngine";

export default function RiskEngine() {

  const ctx =
    useContext(AppContext);

  if (!ctx) return null;

  const {
    courses,
    assignments,
  } = ctx;


  

  const risks =
    calculateCourseRisks(
      courses,
      assignments
    );

  return (

    <section className="dashboard-card">

      <div className="section-header">

        <h2>
          Academic Risk Analysis
        </h2>

      </div>

      <div className="risk-list">

        {risks.map((risk) => (

          <div
            key={risk.courseId}
            className={`risk-item ${risk.risk}`}
          >

            <div className="risk-top">

              <h3>
                {risk.courseName}
              </h3>

              <span
                className={`risk-badge ${risk.risk}`}
              >
                {risk.risk}
              </span>

            </div>

            <p>
              {risk.reason}
            </p>

            <small>
              {risk.recommendation}
            </small>

          </div>

        ))}

      </div>

    </section>
  );
}