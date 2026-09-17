import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export default function AcademicGoals() {

  const ctx = useContext(AppContext);

  if (!ctx) return null;

  const {
    student,
    setStudent,
  } = ctx;

  const handleTargetGPAChange = (
    value: number
  ) => {
    setStudent((prev) => ({
      ...prev,
      targetGPA: value,
    }));
  };

  return (

    <div className="settings-card">

      <h3>
        Academic Goals
      </h3>

    <div className="settings-form-group">
      <label>
        Target GPA
      </label>

      <input
        type="number"
        min="0"
        max="4"
        step="0.1"
        value={student.targetGPA}
        onChange={(e) =>
          handleTargetGPAChange(
            Number(e.target.value)
          )
        }
      />
    </div>


    </div>

  );
}