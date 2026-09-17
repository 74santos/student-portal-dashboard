import {
  useContext,
  useState,
} from "react";

import { AppContext }
from "../../context/AppContext";

import type {
  Assignment,
} from "../../types";

import {
  getRelativeDay,
  getAssignmentStatus,
  formatDateForInput,
} from "../../utils/date";

import {
  FiCheckCircle,
  FiCircle,
  FiTrash2,
  FiClock,
  FiEdit2,
} from "react-icons/fi";

import { useToast } from "../../types/useToast";

type Props = {
  assignment: Assignment;
};

export default function AssignmentCard({
  assignment,
}: Props) {

  const ctx = useContext(AppContext);

  if (!ctx) return null;

  const status =
  getAssignmentStatus(
    assignment.dueDate
  );

  const {
    toggleAssignment,
    deleteAssignment,
    updateAssignment,
    courses,
  } = ctx;

  const { showToast } = useToast();

  const course = courses.find(
    (c) =>
      c.id === assignment.courseId
  );

  const [editing, setEditing] =
    useState(false);

  const [editTitle, setEditTitle] =
    useState(assignment.title);

  const [editDueDate, setEditDueDate] =
    useState(assignment.dueDate);

  const [editStartTime, setEditStartTime] =
    useState(
      assignment.startTime || ""
    );

  const [editDuration, setEditDuration] =
    useState(
      assignment.duration || 60
    );

  const [editPriority, setEditPriority] =
    useState(assignment.priority);

  const saveEdit = () => {

    updateAssignment({
      ...assignment,

      title: editTitle,
      dueDate: editDueDate,
      startTime: editStartTime,
      duration: editDuration,

      priority: editPriority,
    });

    showToast(`Assignment "${editTitle}" updated successfully!`, "success");

    setEditing(false);
  };


  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    if (!confirm(`Delete "${assignment.title}"?`)) return;   // Optional confirmation

    deleteAssignment(assignment.id);
    showToast(`Assignment "${assignment.title}" deleted.`, "success");
  };

  return (

    <div
    className={`assignment-card-ui ${
      assignment.completed
        ? "completed"
        : ""
    } ${status}`}
    >

      <div className="assignment-top">

        <button
          className="assignment-check"
          onClick={() =>
            toggleAssignment(
              assignment.id
            )
          }
        >

          {assignment.completed ? (
            <FiCheckCircle />
          ) : (
            <FiCircle />
          )}

        </button>

        <div className="assignment-info">

          <h4>
            {assignment.title}
          </h4>

          <p>
            {course?.name}
          </p>

        </div>

        <button
          className="assignment-edit"
          onClick={(e) => {
            e.stopPropagation();
            setEditing(!editing);
          }}
        >

          <FiEdit2 />

        </button>

        <button
          className="assignment-delete"
          onClick={handleDelete}
        >
          <FiTrash2 />

        </button>

      </div>

      {editing && (

        <div className="assignment-edit-fields">

          <input
            type="text"
            value={editTitle}
            onClick={(e) =>
              e.stopPropagation()
            }
            onChange={(
              e: React.ChangeEvent<HTMLInputElement>
            ) =>
              setEditTitle(
                e.target.value
              )
            }
          />

          <input
            type="date"
            value={formatDateForInput(
              editDueDate
            )}
            onClick={(e) =>
              e.stopPropagation()
            }
            onChange={(
              e: React.ChangeEvent<HTMLInputElement>
            ) =>
              setEditDueDate(
                e.target.value
              )
            }
          />

          <input
            type="time"
            value={editStartTime}
            onClick={(e) =>
              e.stopPropagation()
            }
            onChange={(
              e: React.ChangeEvent<HTMLInputElement>
            ) =>
              setEditStartTime(
                e.target.value
              )
            }
          />

          <input
            type="number"
            min="15"
            step="15"
            value={editDuration}
            onClick={(e) =>
              e.stopPropagation()
            }
            onChange={(
              e: React.ChangeEvent<HTMLInputElement>
            ) =>
              setEditDuration(
                Number(e.target.value)
              )
            }
          />

          <select
            value={editPriority}
            onClick={(e) =>
              e.stopPropagation()
            }
            onChange={(
              e: React.ChangeEvent<HTMLSelectElement>
            ) =>
              setEditPriority(
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

          <button
            className="primary-btn flex-center"
            onClick={(e) => {

              e.stopPropagation();

              saveEdit();

            }}
          >

            Save Changes

          </button>

        </div>

      )}

      <div className="assignment-bottom">

        <div
          className={`priority-badge ${
            assignment.priority
          }`}
        >

          {assignment.priority}

        </div>

        <div className="assignment-date">

          <FiClock />

          <span>

          {assignment.completed
            ? "Completed"
            : getRelativeDay(
                assignment.dueDate
             )}

          </span>

        </div>

      </div>

    </div>
  );
}