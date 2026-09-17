import type {  Course  } from "../../types";
import { useContext } from "react";

import { AppContext }
from "../../context/AppContext";

import {
  FiBook,
  FiClock,
  FiTrendingUp,
  FiUser,
} from "react-icons/fi";



type Props = {
  course: Course | null;
  // assignments: Assignment | null;
  onClose: () => void;
};

export default function CoursePanel({
  course,
  onClose,
}: Props) {

  const ctx = useContext(AppContext);

  if (!course) return null;

  if (!ctx || !course)
    return null;

  const { assignments } = ctx;

  const courseAssignments =
  assignments.filter(
    (assignment) =>
      assignment.courseId ===
      course.id
  );


  const risk =
  course.progress < 50
    ? "High"
    : course.progress < 70
    ? "Medium"
    : "Low";



  // const performanceStatus =
  // course.progress >= 80
  //   ? "Strong"
  //   : course.progress >= 60
  //   ? "Moderate"
  //   : "Needs Attention";

  
  const completed =
    courseAssignments.filter(
      a => a.completed
    ).length;

  const active =
    courseAssignments.filter(
      a => !a.completed
    ).length


  const completionRate =
    courseAssignments.length > 0
    ? Math.round(
        (
          completed /
          courseAssignments.length
        ) * 100
      )
    : 0;

   const calculateHealth = (progress:number, completionRate: number) => {
    const health = progress * 0.7 + completionRate * 0.3;
    return Math.round(health);
   }


  const healthScore = calculateHealth(course.progress, completionRate);


  const getCourseTrend = (progress: number) => {
    if (progress >= 80) {
      return {
        label: "Improving",
        icon: "↑",
        color: "var(--success)",
      };
    } else if (progress >= 60) {
      return {
        label: "Stable",
        icon: "→",
        color: "var(--warning)",
      };
    } else {
      return {
        label: "Needs Attention",
        icon: "↓",
        color: "var(--critical)",
      };
    }
    
  };

  const trend = getCourseTrend(course.progress);

  let recommendation =
  "Stay consistent";
  
  if (active > 3) {
    recommendation =
      "Focus on outstanding assignments";
  }
  
  if (course.progress < 60) {
    recommendation =
      "Increase study time this week";
  }

  return (
    <div
      className="drawer-overlay"
      onClick={onClose}
    >

      <aside
        className="detail-drawer"
        onClick={(e) =>
          e.stopPropagation()
        }
      >

        <div className="panel-header">

          <div>

            <h2>{course.name}</h2>

            <p>
              {course.professor}
            </p>

          </div>

          <button
            className="panel-close"
            onClick={onClose}
          >
            ×
          </button>

        </div>

        <div className="panel-grid">

          <div className="panel-card">

            <FiTrendingUp />

            <span>Progress</span>

            <strong>
              {course.progress}%
            </strong>

          </div>

          <div className="panel-card">

            <FiClock />

            <span>Next Class</span>

            <strong>
              {course.nextClass}
            </strong>

          </div>

          <div className="panel-card">

            <FiBook />

            <span>Assignments</span>

            <strong> {courseAssignments.length} Active</strong>

          </div>

          <div className="panel-card">

            <FiUser />

            <span>Professor</span>

            <strong>
              {course.professor}
            </strong>

          </div>

        </div>

        <div className="panel-section">

            <h3>
              Course Intelligence
            </h3>

            <div className="intelligence-grid">

              {/* <div className="intelligence-item">
                <span>Status</span>
                <strong>{performanceStatus}</strong>
              </div> */}

              <div className="intelligence-item">
                <span>Health Score</span>
                <strong>{healthScore}</strong>
              </div>

              <div className="intelligence-item">
                <span>Risk Level</span>
                <strong>{risk}</strong>
              </div>

              <div className="intelligence-item">
                <span>Trend</span>
                <span className={`${trend.color}`}>{trend.icon}</span>
                <strong>{trend.label}</strong>
              </div>

              <div className="intelligence-item">
                <span>Recommendation</span>
                <strong>{recommendation}</strong>
              </div>

            </div>

          </div>

        <div className="panel-section">

          <h3>Upcoming Tasks</h3>

          <div className="task-list">

                {courseAssignments.length > 0 ? (

                  courseAssignments.map((task) => (

                    <div
                      key={task.id}
                      className="activity"
                    >

                      <strong>
                        {task.title}
                      </strong>

                      <p>
                        Due: {task.dueDate}
                      </p>

                    </div>

                  ))

                ) : (

                  <p>
                    No assignments yet
                  </p>

                )}

          </div>

        </div>

      </aside>

    </div>
  );
}