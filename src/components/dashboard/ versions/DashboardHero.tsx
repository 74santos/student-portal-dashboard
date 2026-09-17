import { useContext } from "react";

import { AppContext }
from "../../context/AppContext";

import {
  getOverdueAssignments,
} from "../../utils/analytics";

export default function DashboardHero() {

  const ctx = useContext(AppContext);

  if (!ctx) return null;

  const {
    assignments,
  } = ctx;

  const overdue =
    getOverdueAssignments(
      assignments
    );

  const hour =
    new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 18
      ? "Good Afternoon"
      : "Good Evening";

  return (

    <section className="dashboard-hero">

      <div>

        <h1>
          {greeting}, Chris 👋
        </h1>

        <p>
          {overdue > 0
            ? `You have ${overdue} overdue assignments requiring attention.`
            : "You're on track this week."}
        </p>

      </div>

    </section>

  );
}