import type { Assignment }
from "../../types";

// import { getRelativeDay } from "../../utils/date"

type Props = {
  assignments: Assignment[];
};

export default function AssignmentProgressChart({
  assignments,
}: Props) {

  const days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];

  const chartData =
    days.map((day, index) => {

      const completed =
        assignments.filter(
          (assignment) => {

            if (
              !assignment.completed
            ) {
              return false;
            }

            const date =
              new Date(
                assignment.dueDate
              );

            return (
              date.getDay() === index
            );

          }
        ).length;

      return {
        day,
        completed,
      };

    });

  const maxValue =
    Math.max(
      ...chartData.map(
        (item) => item.completed
      ),
      1
    );

  return (

    <div className="progress-chart-card">

      <div className="chart-header">

        <div>

          <h3>
            Weekly Progress
          </h3>

          <p>
            Completed assignments
            this week
          </p>

        </div>

      </div>

      <div className="chart-bars">

        {chartData.map((item) => (

          <div
            key={item.day}
            className="chart-column"
          >

            <div className="chart-bar-wrapper">

              <div
                className="chart-bar"
                style={{
                  height: `${
                    (item.completed /
                      maxValue) *
                    100
                  }%`,
                }}
              />

            </div>

            <span className="chart-value">
              {item.completed}
            </span>

            <span className="chart-day">
              {item.day}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}