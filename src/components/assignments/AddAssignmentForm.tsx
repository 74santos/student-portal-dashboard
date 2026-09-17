import { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import type { Assignment } from "../../types";
import { useToast } from "../../types/useToast";

type Props = {
  onClose?: () => void;
};

export default function AddAssignmentForm({ onClose }: Props) {

  const ctx = useContext(AppContext);
  if (!ctx) return null;

  const { addAssignment, courses } = ctx;
  const { showToast } =  useToast();


  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] =
    useState<"low" | "medium" | "high">("medium");

  const [ courseId, setCourseId ] = 
    useState(
      courses[0]?.id || ""
    );

  const [ startTime, setStartTime  ] = useState("");
  const [ duration, setDuration  ] = useState(60);
  

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !dueDate || !startTime) {
      showToast("Please fill in all required fields.", "error");
      return;
    }

    const newAssignment: Assignment = {
      id: crypto.randomUUID(),
      title: title.trim(),
      dueDate,
      startTime,
      duration,
      priority,
      completed: false,
      courseId,
    };

    addAssignment(newAssignment);
    showToast(`Assignment "${title}" added successfully!`, "success");


    // Reset form
    setTitle("");
    setDueDate("");
    setStartTime("");
    setDuration(60);
    setPriority("medium");
    setCourseId(courses[0]?.id || "");

    onClose?.();
  };

  return (
    <form className="add-course-form" onSubmit={handleSubmit}>

      <h2>Add Assignment</h2>

      <input
        type="text"
        placeholder="Assignment Title"
        value={title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
      />

      <input
        type="date"
        required
        value={dueDate}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setDueDate(e.target.value)
        }
      />


      <div className="form-row">

        <div className="form-group">

          <label>
            Start Time
          </label>

          <input
            type="time"
            required
            value={startTime}
            onChange={(
              e: React.ChangeEvent<HTMLInputElement>
            ) =>
              setStartTime(e.target.value)
            }
          />

        </div>

        <div className="form-group">

          <label>
            Duration (minutes)
          </label>

          <input
            type="number"
            min="15"
            step="15"
            value={duration}
            onChange={(
              e: React.ChangeEvent<HTMLInputElement>
            ) =>
              setDuration(
                Number(e.target.value)
              )
            }
          />

        </div>

      </div>



        <div className="select-group">

        <label>
          Course
        </label>

        <select
          value={courseId}
          onChange={(
            e: React.ChangeEvent<HTMLSelectElement>
          ) =>
            setCourseId(e.target.value)
          }
        >

          {courses.map((course) => (

            <option
              key={course.id}
              value={course.id}
            >
              {course.name}
            </option>

          ))}

        </select>

        </div>


     <div className="select-group">
      <select
        value={priority}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setPriority(
            e.target.value as "low" | "medium" | "high"
          )
        }
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      </div>
     


      <button type="submit" className="primary-btn flex-center">
        Add Assignment
      </button>

    </form>
  );
}