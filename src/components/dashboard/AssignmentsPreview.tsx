import { useContext } from "react";
import type { Assignment } from "../../types";
import { AppContext } from "../../context/AppContext";
import { getRelativeDay } from "../../utils/date";
import EmptyState from "../ui/EmptyState";


type Props = {
  assignments: Assignment[];
}

export default function AssignmentsPreview({ assignments }: Props) {

  const ctx = useContext(AppContext);

  if (!ctx) return null;

  const {  courses } = ctx;

  const upcomingAssignments =
  assignments
    .filter((a) => !a.completed)
    .sort(
      (a, b) =>
        new Date(a.dueDate).getTime() -
        new Date(b.dueDate).getTime()
    )
    .slice(0, 5);


  // const assignments = [
  //   {
  //     title: "Final Project",
  //     course: "CS 401",
  //     priority: "high",
  //     due: "Tomorrow",
  //   },
  // ];

  return (
    <section className="dashboard-card">
  
      <h2 className="text-left">
        Upcoming Assignments
      </h2>
  
      {upcomingAssignments.length === 0 ? (
  
        <EmptyState
          title="No Upcoming Assignments"
          description="You're all caught up. Great work!"
        />
  
      ) : (
  
        upcomingAssignments.map((assignment) => {
  
          const course =
            courses.find(
              (c) =>
                c.id === assignment.courseId
            );
  
          return (
            <div
              className={`assignment ${assignment.priority}`}
              key={assignment.id}
            >
  
              <div className="assignment-content">
  
                <div className="assignment-header">
  
                  <h3>
                    {assignment.title}
                  </h3>
  
                  <span
                    className={`badge ${assignment.priority}`}
                  >
                    {assignment.priority}
                  </span>
  
                </div>
  
                <p className="assignment-course">
                  {course?.name}
                </p>
  
                <small className="assignment-due">
                  Due {getRelativeDay(assignment.dueDate)}
                </small>
  
              </div>
  
            </div>
          );
  
        })
  
      )}
  
    </section>
  );
}