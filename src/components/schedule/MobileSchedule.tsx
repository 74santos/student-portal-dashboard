import { useContext } from "react";

import { AppContext } from "../../context/AppContext";
import ScheduleEventCard from "../schedule/ScheduleEventCard";
import type { Assignment } from "../../types";

type Props = {
  onSelectEvent: (
    assignment: Assignment
  ) => void;
};

export default function MobileSchedule({
  onSelectEvent,
}: Props) {

  const ctx = useContext(AppContext);

  if (!ctx) return null;

  const {
    assignments,
    courses,
  } = ctx;

  const sorted =
    [...assignments]

      .filter(
        (a) => !a.completed
      )

      .sort(
        (a, b) =>
          new Date(
            a.dueDate
          ).getTime() -

          new Date(
            b.dueDate
          ).getTime()
      );

  return (

    <div className="mobile-schedule">

      {sorted.map((assignment) => {

        const course =
          courses.find(
            (c) =>
              c.id ===
              assignment.courseId
          );

        return (

          <ScheduleEventCard
            key={assignment.id}

            assignment={assignment}

            course={
              course?.name ||
              "Unknown Course"
            }

            onClick={() =>
              onSelectEvent(
                assignment
              )
            }
          />

        );
      })}

    </div>
  );
}