import { useContext } from "react";
import { AppContext } from "../../context/AppContext";



export default function AcademicHealth() {

  const ctx = useContext(AppContext);

  if (!ctx) return null;

  // const {
  //   student,
  //   assignments,
  //   courses,
  //   activities,
  // } = ctx;

  // const snapshot =
  // buildAcademicSnapshot(
  //   student,
  //   courses,
  //   assignments,
  //   activities
  // );

  const {snapshot} = ctx;

  const metrics = snapshot.metrics;

  const attendance = 94;

  

  return (

    <section className="dashboard-card">

      <div className="section-header">

        <div>

          <h2>
            Academic Health
          </h2>

          <p>
            Overall academic performance
          </p>

        </div>

        <div className="health-score">

          {metrics.healthScore}

        </div>

      </div>

      <div className="health-metrics">

        <div>

          <span>
            Assignment Completion
          </span>

          <div className="progress-bar">

            <div
              className="progress-fill"
              style={{
                width:
                  `${metrics.completionRate}%`
              }}
            />

          </div>

        </div>

        <div>

          <span>
            Course Progress
          </span>

          <div className="progress-bar">

            <div
              className="progress-fill"
              style={{
                width:
                  `${metrics.averageProgress}%`
              }}
            />

          </div>

        </div>

        <div>

          <span>
            Attendance
          </span>

          <div className="progress-bar">

            <div
              className="progress-fill"
              style={{
                width:
                  `${attendance}%`
              }}
            />

          </div>

        </div>

      </div>

      {metrics.overdueAssignments > 0 && (

        <div className="health-warning">

          {metrics.overdueAssignments}
          &nbsp;overdue assignments need attention.

        </div>

      )}

    </section>

  );
}