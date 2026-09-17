import { useContext }
from "react";

import { FiZap }
from "react-icons/fi";

import { AppContext }
from "../../context/AppContext";

import {
  calculateStreak,
} from "../../utils/streaks";

export default function StreakCard() {

  const ctx =
    useContext(AppContext);

  if (!ctx) return null;

  const { activities } = ctx;

  const streak =
    calculateStreak(
      activities
    );

  return (

    <section className="dashboard-card">

      <div className="streak-header">

        <FiZap />

        <h2>
          Academic Streak
        </h2>

      </div>

      <div className="streak-number">

        🔥 {streak.current}

      </div>

      <p>
        Consecutive productive days
      </p>

      <small>
        Best streak:
        {" "}
        {streak.best}
      </small>

    </section>

  );
}