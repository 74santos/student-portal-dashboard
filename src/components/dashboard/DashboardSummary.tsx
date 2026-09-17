import { useContext } from "react";
import { Link } from "react-router-dom";

import { AppContext } from "../../context/AppContext";
import { parseLocalDate } from "../../utils/date";

export default function DashboardSummary() {
  const ctx = useContext(AppContext);

  if (!ctx) return null;

  const {
    assignments,
    snapshot,
  } = ctx;

  const metrics = snapshot.metrics;

  const {
    overdueAssignments,
    averageProgress,
  } = metrics;

  const overdue = overdueAssignments;
  const avgProgress = averageProgress;

  const health =
    overdue > 3
      ? "Needs Attention"
      : avgProgress > 75
      ? "Strong"
      : "Moderate";

  const description =
    health === "Strong"
      ? "You're maintaining strong academic progress across your courses."
      : health === "Moderate"
      ? "Your performance is steady, but there are opportunities to improve."
      : "Immediate attention is recommended to stay on track.";

  /*
   * Find the next incomplete assignment.
   * Completed assignments should not become the student's
   * next actionable deadline.
   */
  const upcomingAssignments = assignments
    .filter((assignment) => !assignment.completed)
    .map((assignment) => ({
      ...assignment,
      date: parseLocalDate(assignment.dueDate),
    }))
    .filter((assignment) => !isNaN(assignment.date.getTime()))
    .sort((a, b) => a.date.getTime() - b.date.getTime());

  const nextDeadline = upcomingAssignments[0] ?? null;

  /*
   * Calculate remaining days using local calendar dates.
   * This avoids time-of-day causing "7 days" to become "6 days".
   */
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const daysLeft = nextDeadline
    ? Math.max(
        0,
        Math.ceil(
          (nextDeadline.date.getTime() - today.getTime()) /
            (1000 * 60 * 60 * 24)
        )
      )
    : null;

  const formattedDeadline = nextDeadline
    ? nextDeadline.date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : null;

  return (
    <section className="dashboard-summary">

      <div className="summary-content">

        <h2>
          Academic Standing
        </h2>

        <p className="summary-status">
          {health}
        </p>

        <p className="summary-description">
          {description}
        </p>

      </div>

      <div className="summary-deadline">

        <p className="summary-deadline-label">
          Next Deadline
        </p>

        {nextDeadline ? (
          <>
            <h3 className="summary-deadline-title">
              {nextDeadline.title}
            </h3>

            <p className="summary-deadline-date">
              {formattedDeadline}
              {daysLeft !== null && (
                <> · {daysLeft} {daysLeft === 1 ? "day" : "days"} left</>
              )}
            </p>

            <Link
              to="/schedule"
              className="summary-deadline-link"
            >
              View Schedule →
            </Link>
          </>
        ) : (
          <p className="summary-deadline-empty">
            No upcoming deadlines
          </p>
        )}

      </div>

    </section>
  );
}