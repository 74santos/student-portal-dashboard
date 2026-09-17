import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

import {
  getCompletionRate,
} from "../../utils/analytics";

import { calculateForecastGPA } from "../../utils/gpaForecast"

export default function AcademicGoalsEngine() {

  const ctx = useContext(AppContext);

  if (!ctx) return null;

  const {
    student,
    assignments,
    courses,
    activities,
  } = ctx;

  const completionRate =
    getCompletionRate(assignments);

  const forecastGPA = calculateForecastGPA(
    assignments,
    courses,
    activities
    );

  const gpaGap =
    (
      student.targetGPA -
      Number(forecastGPA)
    ).toFixed(1);

  return (
    // goals-engine
    <section className="dashboard-card">

      <div className="section-header">

        <h2>
          Academic Goals
        </h2>

      </div>

      <div className="goal-item">

        <span>
          Target GPA
        </span>

        <strong>
          {student.targetGPA}
        </strong>

      </div>

      <div className="goal-item">

        <span>
          Forecast GPA
        </span>

        <strong>
          {forecastGPA}
        </strong>

      </div>

      <div className="goal-item">

        <span>
          GPA Gap
        </span>

        <strong>
          {gpaGap}
        </strong>

      </div>

      <div className="goal-item">

        <span>
          Completion Rate
        </span>

        <strong>
          {completionRate}%
        </strong>

      </div>

    </section>

  );
}