import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

import { buildWeeklyWorkload } from "../../utils/scheduleWorkload";



export default function ScheduleWorkload() {

  const ctx = useContext(AppContext);

  if (!ctx) return null;

  const {assignments} = ctx;

  const workload = buildWeeklyWorkload(assignments);

  const maxCount = Math.max(
    ...workload.map(item => item.count),
    1
  );

  return (

    <div className="workload-card">

      <h3>
        Weekly Workload
      </h3>

      {workload.map((item) => (

        <div
          key={item.day}
          className="workload-row"
        >

          <span>
            {item.day}
          </span>

          <div className="workload-bar">

            <div
              className="workload-fill"
              style={{
                width: `${(item.count / maxCount) * 100}%`,
              }}
            />

          </div>

          <strong>
            {item.count}
          </strong>

        </div>

      ))}

    </div>

  );

}