import { useContext } from "react";

import { AppContext }
from "../../context/AppContext";

import {
  getCompletionRate,
  getOverdueAssignments,
} from "../../utils/analytics";

import {
  generateGoals,
} from "../../utils/goals";

export default function GoalsPanel() {

  const ctx = useContext(AppContext);

  if (!ctx) return null;

  const {
    assignments,
    courses,
    activities,
  } = ctx;

  const completionRate =
    getCompletionRate(
      assignments
    );

  const overdueCount =
    getOverdueAssignments(
      assignments
    );

  const avgCourseProgress =
    courses.length > 0
      ? Math.round(
          courses.reduce(
            (sum, course) =>
              sum + course.progress,
            0
          ) / courses.length
        )
      : 0;

  const activityScore =
    Math.min(
      activities.length * 5,
      20
    );

  const productivityScore =
    Math.min(
      100,
      Math.round(
        completionRate * 0.4 +
        avgCourseProgress * 0.3 +
        activityScore -
        overdueCount * 10
      )
    );

  const goals =
    generateGoals(
      assignments,
      courses,
      productivityScore
    );

  return (

    <section className="goals-panel-card">

      <h2>
        Weekly Goals
      </h2>

      {goals.map((goal) => {

        const percent =
          Math.min(
            100,
            Math.round(
              (goal.current /
                goal.target) *
                100
            )
          );

        return (

          <div
            key={goal.id}
            className="goal-item"
          >

            <div className="goal-header">

              <span>
                {goal.title}
              </span>

              <span>
                {goal.current}
                /
                {goal.target}
              </span>

            </div>

            <div className="goal-track">

              <div
                className="goal-fill"
                style={{
                  width:
                    `${percent}%`,
                }}
              />

            </div>

          </div>

        );
      })}

    </section>

  );
}