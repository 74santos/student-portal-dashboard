import { useContext } from "react";

import { AppContext }
from "../../context/AppContext";

export default function CourseRankings() {

  const ctx = useContext(AppContext);

  if(!ctx) return null;

  const {snapshot} = ctx;

  const {rankings,} = snapshot.core;

  const leader = rankings[0]?.course;

  return (
    // ranking-card
    <section className="dashboard-card">

      <h2>
        Course Rankings
      </h2>

      <p className="ranking-summary">

        Top Performing Course

      </p>

      <h3 className="ranking-leader">

        {leader?.name ?? "No courses"}

      </h3>

      {rankings.map((ranking, index) => {

       const { 
         course,
         score,
         status,
       } = ranking;

        return (

          <div
            key={course.id}
            className="ranking-row"
          >

            <div className="ranking-header">

              <div className="ranking-left">

                <span className="ranking-position">

                  {/* <FiAward /> */}

                  #{index + 1}

                </span>

                <span className="ranking-name">
                  {course.name}
                </span>


                <strong className="ranking-score">
                {score}
              </strong>

              </div>

             

              <span
                className={`ranking-status ${
                  status
                    .toLowerCase()
                    .replace(" ", "-")
                }`}
              >

                {status}

              </span>

            </div>

            <div className="ranking-bar">

              <div
                className="ranking-fill"
                style={{
                  width: `${score}%`
                }}
              />
                <span className="ranking-percent">

              {score}%

              </span>
            </div>

          </div>

        );

        })}

    </section>

  );

}