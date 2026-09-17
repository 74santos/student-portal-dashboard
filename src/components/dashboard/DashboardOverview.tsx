import { useContext } from "react";
import { AppContext } from "../../context/AppContext";





export default function DashboardOverview() {

  const ctx = useContext(AppContext);

  if (!ctx) return null;

//   const {
//     assignments,
//     courses,
//     activities,
//     student
//   } = ctx;

 
//  const snapshot = buildAcademicSnapshot(
//   student,
//   courses,
//   assignments,
//   activities
//  )
 
const { snapshot } = ctx;


 const metrics = snapshot.metrics;

 const {
  activeAssignments,
  averageProgress,
  workloadLevel,
  momentum,
  studyConsistency,

 } = metrics;

 const nextDeadline = snapshot.summary.nextDeadline;


  return (

    // dashboard-overview
    <section className="dashboard-card">

      {/* <h2>
      Performance Snapshot
      </h2> */}

      <div className="overview-grid">

        {/* <div className="overview-item">
          <span>Health Score</span>
          <strong>
            {healthScore}/100
          </strong>
        </div> */}

        

        <div className="overview-item">
          <span>Next Deadline</span>
          <strong>
            {nextDeadline?.title ??
              "None"}
          </strong>
        </div>

        <div className="overview-item">
          <span>Workload</span>
          <strong>
            {workloadLevel}
          </strong>
        </div>

        <div className="overview-item">
          <span>Momentum</span>
          <strong>
            {momentum}
          </strong>
        </div>

        <div className="overview-item">
          <span>Active Tasks</span>
          <strong>{activeAssignments}</strong>
        </div>

        <div className="overview-item">
          <span>Course Average</span>
          <strong>{averageProgress}%</strong>
        </div>

        <div className="overview-item">
        <span>Consistency</span>
        <strong>{studyConsistency}</strong>
      </div>
       

      </div>

    </section>
  );
}