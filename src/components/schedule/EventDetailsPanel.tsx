import type {
  Assignment,
} from "../../types";

import {
  FiX,
  FiClock,
  FiCalendar,
} from "react-icons/fi";

import {
  formatDate,
  getRelativeDay,
} from "../../utils/date";

type Props = {
  assignment: Assignment;
  onClose: () => void;
};

export default function EventDetailsPanel({
  assignment,
  onClose,
}: Props) {

  return (

    <>

      <div
        className="panel-overlay"
        onClick={onClose}
      />

      <aside className="event-panel">

        <div className="event-panel-header">

          <div>

            <h2>
              {assignment.title}
            </h2>

            <p>
              Assignment Details
            </p>

          </div>

          <button
            className="panel-close"
            onClick={onClose}
          >

            <FiX />

          </button>

        </div>

        <div className="event-panel-body">

          <div
            className={`event-panel-priority ${assignment.priority}`}
          >

            {assignment.priority}
            priority

          </div>

          <div className="event-detail-row">

            <FiCalendar />

            <span>

              {getRelativeDay(
                assignment.dueDate
              )}

              {" • "}

              {formatDate(
                assignment.dueDate
              )}

            </span>

          </div>

          <div className="event-detail-row">

            <FiClock />

            <span>

              {assignment.startTime ||
                "No time"}

              {" • "}

              {assignment.duration ||
                60} mins

            </span>

          </div>

        </div>

      </aside>

    </>

  );
}