import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export default function StudentProfileSettings() {

  const ctx = useContext(AppContext);

  if (!ctx) return null;

  const {
    student,
    setStudent,
  } = ctx;

  return (

    <section className="settings-card">

      <h3>Student Profile</h3>

      <div className="settings-group">

        <label>Name</label>

        <input
          value={student.name}
          onChange={(e) =>
            setStudent({
              ...student,
              name: e.target.value,
            })
          }
        />

      </div>

      <div className="settings-group">

        <label>Major</label>

        <input
          value={student.major}
          onChange={(e) =>
            setStudent({
              ...student,
              major: e.target.value,
            })
          }
        />

      </div>

      <div className="settings-group">

        <label>Target GPA</label>

        <input
          type="number"
          step="0.1"
          min="0"
          max="4"
          value={student.targetGPA}
          onChange={(e) =>
            setStudent({
              ...student,
              targetGPA:
                Number(e.target.value),
            })
          }
        />

      </div>

      <div className="settings-group">

        <label>Weekly Study Goal</label>

        <input
          type="number"
          value={student.studyGoalHours}
          onChange={(e) =>
            setStudent({
              ...student,
              studyGoalHours:
                Number(e.target.value),
            })
          }
        />

      </div>

    </section>

  );
}