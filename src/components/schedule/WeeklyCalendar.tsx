import {
  FiClock,
} from "react-icons/fi";

import { useContext } from "react";
import { AppContext }from "../../context/AppContext"
import {  formatCurrentHour } from "../../utils/date"


import {
  buildCalendarEvents,
} from "../../utils/calendar";
import type { Assignment } from "../../types";

type Props = {
  onSelectEvent?: (
    assignment: Assignment
  ) => void;
};

const days = [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
];

const hours = [
  "8AM",
  "9AM",
  "10AM",
  "11AM",
  "12PM",
  "1PM",
  "2PM",
  "3PM",
  "4PM",
  "5PM",
  "6PM",
  "7PM",
  "8PM",
];



export default function WeeklyCalendar({
  onSelectEvent,
}: Props) {

  const ctx = useContext(AppContext);

  if (!ctx) return null;

  const { assignments, courses } = ctx;

  const events = buildCalendarEvents(
    assignments,
    courses
  )

  const currentDate =
  new Date();

  const currentDay =
    currentDate.toLocaleDateString(
      "en-US",
      {
        weekday: "short",
      }
    );

  let currentHour =
    currentDate.getHours();

  const suffix =
    currentHour >= 12
      ? "PM"
      : "AM";

  currentHour =
    currentHour % 12 || 12;

  const currentTimeLabel =
    `${currentHour}${suffix}`;

  
  const now = new Date();

  const currentHour24 =
    now.getHours();
    
  const currentMinutes =
    now.getMinutes();
    
  const currentTop =
      (
        (
          (currentHour24 - 8) * 60
        ) +
        currentMinutes
      ) / 60 * 74;
  

  return (

    <div className="calendar-card">

      <div className="calendar-header">

        <div className="calendar-title">

          <h3>
            Weekly Schedule
          </h3>

          <p>
          Manage classes, assignments, and study sessions.
          </p>

        </div>

        <button className="calendar-action">

          + New Event

          </button>

      </div>

      <div className="calendar-grid">

        {/* TOP LEFT EMPTY */}
        <div />

        {/* DAYS */}
        {days.map((day) => (

          <div
            key={day}
            className={`calendar-day ${
              currentDay === day
                ? "active-day"
                : ""
            }`} >

            {day}

          </div>

        ))}

        {/* ROWS */}
        <div className="calendar-hour-column">

          {hours.map((hour) => (

            <div
            key={hour}
            className={`calendar-hour ${
              currentTimeLabel === hour
                ? "active-hour"
                : ""
            }`}
            >

            <FiClock />

            <span>{hour}</span>

            </div>

            ))}

            </div>

            {days.map((day) => {

              const dayEvents = events.filter(
                (event) => event.day === day
              );

              return (
                <div
                  key={day}
                  className="calendar-day-column"
                >

                  {hours.map((hour) => {

                    const isCurrentCell =
                      currentDay === day &&
                      hour === formatCurrentHour();

                    return (
                      <div
                        key={`${day}-${hour}`}
                        className={`calendar-cell ${
                          isCurrentCell
                            ? "active-cell"
                            : ""
                        }`}
                      >
                        
                      </div>
                    );
                  })}

                    {currentDay === day && (

                    <div
                      className="live-current-time"
                      style={{
                        top: `${currentTop}px`,
                      }}
                    >

                      <div className="live-current-dot" />

                    </div>

                    )}

                  {dayEvents.map((event) => (

                    <div
                      key={event.id}
                      className={`calendar-event ${
                        event.priority || "medium"
                      }`}
                      style={{
                        top: `${event.top}px`,
                        left: `${
                          (event.lane || 0) *
                          (
                            100 /
                            (event.totalLanes || 1)
                          )
                        }%`,
                        width: `calc(${
                          100 /
                          (event.totalLanes || 1)
                        }% - 2px)`,
                      
                        height: `${event.height}px`,
                      }}
                      onClick={() =>
                        onSelectEvent?.(
                          event.assignment
                        )
                      }
                    >

                      <strong>
                        {event.title}
                      </strong>

                      <span>
                        {event.courseName}
                      </span>

                      {event.duration && (
                        <small>
                          {event.duration} mins
                        </small>
                      )}

                    </div>

                  ))}

                </div>
              );
            })}
          </div>
         
      </div>

  );
}