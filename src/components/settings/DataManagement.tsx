import { useContext } from "react";

import { AppContext }
from "../../context/AppContext";

export default function DataManagement() {

  const ctx =
    useContext(AppContext);

  if (!ctx) return null;

  const {
    resetCourses,
    clearActivities,
  } = ctx;

  return (

    <div className="settings-card">

      <h3>
        Data Management
      </h3>

      <div className="settings-actions">

        <button
          className="settings-btn"
          onClick={resetCourses}
        >
          Reset Courses
        </button>

        <button
          className="settings-btn"
          onClick={clearActivities}
        >
          Clear Activity Feed
        </button>

      </div>

    </div>

  );

}