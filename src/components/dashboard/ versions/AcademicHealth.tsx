import { useContext }
from "react";

import { AppContext }
from "../../context/AppContext";

import {
  calculateAcademicHealth,
} from "../../utils/academicHealth";

export default function AcademicHealth() {

  const ctx =
    useContext(AppContext);

  if (!ctx) return null;

  const {
    assignments,
    courses,
    activities,
  } = ctx;

  const score =
    calculateAcademicHealth(
      assignments,
      courses,
      activities
    );

  const status =
    score >= 85
      ? "Healthy"
      : score >= 65
      ? "Stable"
      : score >= 40
      ? "Warning"
      : "Critical";

  return (

    <section className="health-card">

      <div className="section-header">

        <h2>
          Academic Health
        </h2>

      </div>

      <div className="health-score">

        {score}

      </div>

      <p>
        {status}
      </p>

    </section>

  );
}