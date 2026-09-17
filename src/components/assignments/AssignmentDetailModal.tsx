import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import type { Assignment } from "../../types";
import { formatDateForInput } from "../../utils/date";

import {
  FiX,
  FiTrash2,
  FiCheckCircle,
} from "react-icons/fi";

import { useToast } from "../../types/useToast";

type Props = {
  assignment: Assignment;
  onClose: () => void;
};

export default function AssignmentDetailModal({
  assignment,
  onClose,
}: Props) {

  const ctx = useContext(AppContext);

  if (!ctx) return null;

  const {
    updateAssignment,
    deleteAssignment,
    toggleAssignment,
    courses,
  } = ctx;

  const { showToast } = useToast();

  const [title, setTitle] = useState(assignment.title);
  const [dueDate, setDueDate] = useState(assignment.dueDate);
  const [priority, setPriority] = useState(assignment.priority);
  const [startTime, setStartTime] = useState(assignment.startTime || "");
  const [duration, setDuration] = useState(assignment.duration || 60);

  const course =
    courses.find(
      (c) => c.id === assignment.courseId
    );

  const handleSave = () => {

    if (!title.trim()) {
      showToast("Assignment title cannot be empty.", "error");
      return;
    }

    updateAssignment({
      ...assignment,
      title,
      dueDate,
      priority,
      startTime,
      duration,
    });

    showToast(`Assignment "${title}" updated successfully!`, "success");
    onClose();
  };

  const handleDelete = () => {
    if (!confirm(`Delete assignment "${assignment.title}"?`)) return;

    deleteAssignment(assignment.id);
    showToast(`Assignment "${assignment.title}" deleted.`, "success");
    onClose();
  };


  const handleToggleComplete = () => {
    const newStatus = !assignment.completed;
    
    toggleAssignment(assignment.id);

    showToast(
      newStatus 
        ? `✅ "${title}" marked as complete!` 
        : `⏳ "${title}" marked as incomplete.`,
      "success"
    );
  };



  return (

    <>
    
      <div
        className="modal-overlay"
        onClick={onClose}
      />

      <div className="assignment-modal">

        <div className="assignment-modal-header">

          <div>

            <p className="modal-course">
              {course?.name}
            </p>

            <h2>
              Assignment Details
            </h2>

          </div>

          <button
            className="modal-close-btn"
            onClick={onClose}
          >
            <FiX />
          </button>

        </div>

        <div className="assignment-modal-body">

          <div className="form-group">

            <label>
              Title
            </label>

            <input
              type="text"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
            />

          </div>

          <div className="form-row">

            <div className="form-group">

              <label>
                Due Date
              </label>

              <input
                type="date"
                value={formatDateForInput(dueDate)}
                onChange={(e) =>
                  setDueDate(e.target.value)
                }
              />

            </div>

            <div className="form-group">

              <label>
                Priority
              </label>

              <select
                value={priority}
                onChange={(e) =>
                  setPriority(
                    e.target.value as
                    "low" |
                    "medium" |
                    "high"
                  )
                }
              >

                <option value="low">
                  Low
                </option>

                <option value="medium">
                  Medium
                </option>

                <option value="high">
                  High
                </option>

              </select>

            </div>

          </div>

          <div className="form-row">

            <div className="form-group">

              <label>
                Start Time
              </label>

              <input
                type="time"
                value={startTime}
                onChange={(e) =>
                  setStartTime(
                    e.target.value
                  )
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
                onChange={(e) =>
                  setDuration(
                    Number(
                      e.target.value
                    )
                  )
                }
              />

            </div>

          </div>

        </div>

        <div className="assignment-modal-footer">

          <button
            className="reset-btn"
            onClick={handleToggleComplete}
          >

            <FiCheckCircle />

            {assignment.completed
              ? "Completed"
              : "Mark Complete"}

          </button>

          <div className="modal-actions">

            <button
              className="reset-btn"
              onClick={handleDelete}
            >

              <FiTrash2 />

              Delete

            </button>

            <button
              className="primary-btn"
              onClick={handleSave}
            >
              Save Changes
            </button>

          </div>

        </div>

      </div>

    </>
  );
}