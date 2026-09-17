import { useContext, useState, useMemo } from "react"

import type { Assignment } from "../types";
import WeeklyCalendar from "../components/schedule/WeeklyCalendar";
import CalendarSidebar from "../components/schedule/CalendarSidebar";
import AssignmentDetailModal from "../components/assignments/AssignmentDetailModal";
import ScheduleWorkload from "../components/schedule/ScheduleWorkload";

import MobileSchedule from "../components/schedule/MobileSchedule";
import { AppContext } from "../context/AppContext";
import { getUpcomingAssignments } from "../utils/agenda";



export default function Schedule() {
  
  const ctx = useContext(AppContext);

  const [selectedAssignment, setSelectedAssignment] =
  useState<Assignment | null>(null);    

  if (!ctx) return null;

  const { snapshot, assignments } = ctx;


  const upcomingAssignments = 
    useMemo(
      () =>
        getUpcomingAssignments(
          assignments
        ).length, 
      [assignments]
    );

  return (
    <div className="schedule-layout">

        <div className="schedule-overview">

            <div className="schedule-stat">

              <h3>Today's Classes</h3>
              <strong>3</strong>

            </div>

            <div className="schedule-stat">

              <h3>Upcoming Assignments</h3>
              <strong>{upcomingAssignments}</strong>

            </div>

            <div className="schedule-stat">

              <h3>Study Hours</h3>
              <strong>12h</strong> {/* //we need to model properly later */}

            </div>

            <div className="schedule-stat">

              <h3>Focus Score</h3>
              <strong>{snapshot.metrics.productivityScore}%</strong>

            </div>

       </div>



      <div className="desktop-calendar">

        <WeeklyCalendar
          onSelectEvent={
            setSelectedAssignment
          }
        />

      </div>

      <div className="mobile-calendar">

        <MobileSchedule
          onSelectEvent={
            setSelectedAssignment
          }
        />

      </div>

      
      <ScheduleWorkload />

      <CalendarSidebar
        onSelectEvent={
          setSelectedAssignment
        }
      />

      {
        selectedAssignment && (

          <AssignmentDetailModal
            assignment={
              selectedAssignment
            }
            onClose={() =>
              setSelectedAssignment(null)
            }
          />

        )
      }

    </div>

    
  )
}