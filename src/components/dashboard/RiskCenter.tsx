import { useContext } from "react";

import { AppContext }
from "../../context/AppContext";

export default function RiskCenter() {

  const ctx = useContext(AppContext);

  if (!ctx) return null;

  const {
    courses,
    assignments,
  } = ctx;

  const risks =
    courses.filter((course) => {

      const courseAssignments =
        assignments.filter(
          (a) =>
            a.courseId === course.id
        );

      const overdueCount =
        courseAssignments.filter(
          (a) =>
            !a.completed &&
            new Date(a.dueDate) <
              new Date()
        ).length;

      return (
        course.progress < 50 ||
        overdueCount > 0
      );
    });

  if (risks.length === 0) {

    return (
      <section className="risk-center-card">

        <h2>
          Academic Risk Center
        </h2>

        <p>
          No academic risks detected.
        </p>

      </section>
    );
  }

  return (

    <section className="risk-center-card">

      <h2>
        Academic Risk Center
      </h2>

      {risks.map((course) => {

        const overdueCount =
          assignments.filter(
            (a) =>
              a.courseId === course.id &&
              !a.completed &&
              new Date(a.dueDate) <
                new Date()
          ).length;

        return (

          <div
            key={course.id}
            className="risk-item"
          >

            <h4>
              {course.name}
            </h4>

            <p>
              Progress:
              {course.progress}%
            </p>

            <p>
              Overdue:
              {overdueCount}
            </p>

          </div>

        );
      })}

    </section>

  );
}