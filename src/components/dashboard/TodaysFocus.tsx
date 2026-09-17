import { useContext } from "react";

import { AppContext }
from "../../context/AppContext";

export default function TodaysFocus() {

  const ctx =
    useContext(AppContext);

  if (!ctx) return null;

  const {
    assignments,
  } = ctx;

  const overdue =
    assignments.filter(
      (a) =>
        !a.completed &&
        new Date(a.dueDate) <
        new Date()
    );

  const highPriority =
    assignments.filter(
      (a) =>
        !a.completed &&
        a.priority === "high"
    );

  const nextTask =
    assignments
      .filter((a) => !a.completed)
      .sort(
        (a, b) =>
          new Date(a.dueDate).getTime() -
          new Date(b.dueDate).getTime()
      )[0];

  return (

    <section className="dashboard-card">

      <h2>
        Today's Focus
      </h2>

      <div className="focus-stats">

        <div>

          <strong>
            {overdue.length}
          </strong>

          <span>
            Overdue
          </span>

        </div>

        <div>

          <strong>
            {highPriority.length}
          </strong>

          <span>
            High Priority
          </span>

        </div>

      </div>

      {nextTask && (

        <div className="focus-task">

          <h3>
            {nextTask.title}
          </h3>

          <p>
            Due:
            {" "}
            {new Date(
              nextTask.dueDate
            ).toLocaleDateString()}
          </p>

        </div>

      )}

    </section>

  );

}