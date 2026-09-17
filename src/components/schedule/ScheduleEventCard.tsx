import {
  FiClock,
  FiArrowUpRight,
} from "react-icons/fi";

import type { Assignment } from "../../types";
import { getRelativeDay } from "../../utils/date"

type Props = {
  assignment: Assignment;
  course: string;
  onClick: () => void;
};

export default function ScheduleEventCard({
  assignment,
  onClick,
  course,
}: Props) {

  return (

    <div
      className={`schedule-event ${assignment.priority}`}
      onClick={onClick}
    >

      <div className="event-header">

        <div className="event-title-group">

          <strong className="event-title">

            {assignment.title}

          </strong>

          <p className="event-course">

            {course}

          </p>

        </div>

        <div
          className={`event-priority ${assignment.priority}`}
        >

          {assignment.priority}

        </div>

      </div>

      <div className="event-footer">

        <div className="event-time">

          <FiClock />

          <span>

            {getRelativeDay(assignment.dueDate)}

          </span>

        </div>

        <button
          className="event-open-btn"
          onClick={(e) => {

            e.stopPropagation();

            onClick();

          }}
        >

          <FiArrowUpRight />

        </button>

      </div>

    </div>

  );
}