import { useContext }
from "react";

import { AppContext }
from "../../context/AppContext";

import {
  getTodaysAssignments,
  getUpcomingAssignments,
  getOverdueAssignments,
} from "../../utils/agenda";

import AssignmentCard
from "../assignments/AssignmentCard";

export default function DailyAgenda() {

  const ctx = useContext(AppContext);

  if (!ctx) return null;

  const { assignments } = ctx;

  const today =
    getTodaysAssignments(
      assignments
    );

  const upcoming =
    getUpcomingAssignments(
      assignments
    ).slice(0, 3);

  const overdue =
    getOverdueAssignments(
      assignments
    );

  return (

    <div className="agenda-layout">

      <section className="agenda-section">

        <div className="agenda-header">

          <h3>
            Today
          </h3>

          <span>
            {today.length}
          </span>

        </div>

        {today.length > 0 ? (

          today.map((assignment) => (

            <AssignmentCard
              key={assignment.id}
              assignment={assignment}
            />

          ))

        ) : (

          <p className="agenda-empty">
            No assignments today.
          </p>

        )}

      </section>

      <section className="agenda-section">

        <div className="agenda-header">

          <h3>
            Upcoming
          </h3>

          <span>
            {upcoming.length}
          </span>

        </div>

        {upcoming.map((assignment) => (

          <AssignmentCard
            key={assignment.id}
            assignment={assignment}
          />

        ))}

      </section>

      <section className="agenda-section">

        <div className="agenda-header overdue">

          <h3>
            Overdue
          </h3>

          <span>
            {overdue.length}
          </span>

        </div>

        {overdue.map((assignment) => (

          <AssignmentCard
            key={assignment.id}
            assignment={assignment}
          />

        ))}

      </section>

    </div>

  );
}