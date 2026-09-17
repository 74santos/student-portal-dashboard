import { useContext } from "react";

import { AppContext }
from "../../context/AppContext";

import {
  getAchievements,
} from "../../utils/achievements";

export default function Achievements() {

  const ctx = useContext(AppContext);

  if (!ctx) return null;

  const {
    assignments,
    courses,
  } = ctx;

  const achievements =
    getAchievements(
      assignments,
      courses
    );

  return (

    <section className="dashboard-card">

      <h2>
        Achievements
      </h2>

      {achievements.length === 0 ? (

        <p>
          No achievements unlocked yet.
        </p>

      ) : (

        achievements.map(
          (achievement) => (

            <div
              key={achievement.id}
              className="achievement-item"
            >

              <h4>
                {achievement.title}
              </h4>

              <p>
                {achievement.description}
              </p>

            </div>

          )
        )

      )}

    </section>

  );
}