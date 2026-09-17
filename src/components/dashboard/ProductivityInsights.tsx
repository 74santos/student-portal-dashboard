import { useContext } from "react";

import { AppContext } from "../../context/AppContext";

import {
  FiCheckCircle,
  FiClock,
  FiAlertCircle,
  FiTrendingUp,
  
 
} from "react-icons/fi";

export default function ProductivityInsights() {

  const ctx = useContext(AppContext);

  if (!ctx) return null;

  const { assignments } = ctx;

  const completed =
    assignments.filter(
      (a) => a.completed
    ).length;

  const pending =
    assignments.filter(
      (a) => !a.completed
    ).length;

  const highPriority =
    assignments.filter(
      (a) =>
        a.priority === "high" &&
        !a.completed
    ).length;

  const completionRate =
    assignments.length > 0
      ? Math.round(
          (completed /
            assignments.length) *
            100
        )
      : 0;

  const cards = [
    {
      label: "Completion Rate",
      value: `${completionRate}%`,
      icon: <FiTrendingUp />,
    },

    {
      label: "Completed",
      value: completed,
      icon: <FiCheckCircle />,
    },

    {
      label: "Pending",
      value: pending,
      icon: <FiClock />,
    },

    {
      label: "High Priority",
      value: highPriority,
      icon: <FiAlertCircle />,
    },
  ];

  return (
    <div className="insights-grid">

      {cards.map((card) => (

        <div
          key={card.label}
          className="insight-card"
        >

          <div className="insight-top">

            <span>
              {card.label}
            </span>

            <div className="insight-icon">

              {card.icon}

            </div>

          </div>

          <h2>
            {card.value}
          </h2>

        </div>

      ))}

    </div>
  );
}