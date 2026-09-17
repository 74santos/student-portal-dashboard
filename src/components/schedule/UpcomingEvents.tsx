import { useContext } from "react";

import { AppContext } from "../../context/AppContext";
import type { Assignment } from "../../types"

import ScheduleEventCard from "./ScheduleEventCard";

import EmptyState from "../ui/EmptyState"
import { getUpcomingAssignments } from "../../utils/agenda";

type Props = {
  onSelectEvent: (
    assignment: Assignment
  ) => void;
};

export default function UpcomingEvents({ 
  onSelectEvent
}: Props ) {

  const ctx = useContext(AppContext);

  if (!ctx) return null;

  const {
    assignments,
    courses,
  } = ctx;

  

  const upcomingAssignments =
    getUpcomingAssignments(assignments).slice(0, 5);

  return (

    <div className="card">

      <div className="calendar-header">

        <div>

          <h3>
            Upcoming Events
          </h3>

          <p>
            Your next deadlines
          </p>

        </div>

      </div>

      <div className="upcoming-events-list">

        {upcomingAssignments.length === 0 ? (

         

          <EmptyState
            title="No assignment yet"
            description="Create your first assignment."
          />

        

        ) : (

          upcomingAssignments.map(
            (assignment) => {

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
                    onSelectEvent(assignment)
                  }

                />

              );
            }
          )

        )}

      </div>

    </div>

  );
}