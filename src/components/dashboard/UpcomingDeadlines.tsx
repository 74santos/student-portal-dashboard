import { useContext } from "react";

import { AppContext } from "../../context/AppContext";
import {
  getRelativeDay,
} from "../../utils/date";

import {
  FiAlertCircle,
  FiClock,
} from "react-icons/fi";

export default function UpcomingDeadlines() {

  const ctx = useContext(AppContext);

  if (!ctx) return null;

  const {
    assignments,
    courses,
  } = ctx;

  const upcomingAssignments =
    assignments
      .filter(
        (assignment) =>
          !assignment.completed
      )
      .slice(0, 5);

  return (
    <div className="dashboard-card">

      <div className="analytics-header">

        <div>

          <h3>
            Upcoming Deadlines
          </h3>

          <p>
            Tasks requiring attention
          </p>

        </div>

      </div>

      <div className="deadlines-list">

        {upcomingAssignments.map(
          (assignment) => {

            const course =
              courses.find(
                (course) =>
                  course.id ===
                  assignment.courseId
              );

            return (

              <div
                key={assignment.id}
                className="deadline-item"
              >

                <div className="deadline-icon">

                  <FiAlertCircle />

                </div>

                <div className="deadline-content">

                  <strong>
                    {assignment.title}
                  </strong>

                  <p>
                    {course?.name}
                  </p>

                </div>

                <div className="deadline-date">

                  <FiClock />

                  <span>
                    {getRelativeDay(assignment.dueDate)}
                  </span>

                </div>

              </div>

            );
          }
        )}

      </div>

    </div>
  );
}