import { useContext, useState, useMemo } from "react";

import { AppContext } from "../context/AppContext";

import { FiPlus } from "react-icons/fi";

import Modal from "../components/ui/Modal";
import Button from "../components/ui/Button";
import AddAssignmentForm from "../components/assignments/AddAssignmentForm";
import AssignmentCard from "../components/assignments/AssignmentCard";
import AssignmentsToolbar from "../components/assignments/AssignmentsToolbar";
import AssignmentProgressChart from "../components/assignments/AssignmentProgressChart";

import { buildAssignmentDisplay } from "../engines/features/AssignmentEngine/sections/buildAssignmentDisplay"

import StatsCard from "../components/dashboard/StatsCard"


// import { generateInsights } from "../utils/productivity";



export default function Assignments() {

  const ctx = useContext(AppContext);

  if (!ctx) return null;

  const { assignments,  assignmentModel } = ctx;


  const {  stats,  insights } = assignmentModel;


  const [search, setSearch] =
  useState("");

  const [filter, setFilter] =
  useState("all");

  const [ open, setOpen ] =
    useState(false);


  const display = useMemo(() =>
     buildAssignmentDisplay( assignmentModel.timeline,
      { search, filter }
       ),
      [
        assignmentModel.timeline,
        search,
        filter
      ]
  );

  

  return (
    <div className="page-content">
      
      <div className="assignments-header">

      <div>

        <h1>
        Academic Assignments
        </h1>

        <p className="courses-subtitle">
        Manage coursework, monitor deadlines, and track completion.
        </p>

      </div>

      <Button
        className="primary"
        onClick={() => setOpen(true)}
      >
        <FiPlus />
        Add Assignment
      </Button>

    </div>


    <div className="stats-grid">

      {stats.map(stat => (

          <StatsCard

              key={stat.id}

              stat={stat}

          />

    ))}

</div>

 <div className="assignment-stats-grid">

</div>

      <AssignmentProgressChart
        assignments={assignments}
      />



      <AssignmentsToolbar
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />

      {/* <div className="assignments-grid">

        {sortedAssignments.map((assignment) => (
          <AssignmentCard
            key={assignment.id}
            assignment={assignment}
          />
        ))}

      </div> */}


      {display.sections
      .filter(section => section.count > 0)
      .map(section => (

      <div key={section.id}>

          <h2 className="assignment-section-title">
              {section.title} {""}

              <span>
                {section.count}
             </span>

          </h2>

          <div className="assignments-grid">

              {section.items.map(assignment => (

                  <AssignmentCard
                      key={assignment.id}
                      assignment={assignment}
                  />

              ))}

          </div>

      </div>

      ))}



      {display.totalVisible === 0 && (

      <div className="empty-state">

        <h3>
        No active assignments.
        </h3>
        <p>
        Enjoy the break.
        </p>

      </div>

      )}

      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >

        <AddAssignmentForm
          onClose={() => setOpen(false)}
        />

      </Modal>

      {insights.items.length > 0 && (
                <div className="insights-list">
                  {insights.items.map((insight) => (
                    <div
                      key={insight.id}
                      className={"insight-item"}
                    >
                      <span className="insight-title">
                        {insight.title}
                      </span>
                      <span className="insight-message">
                        {insight.description}
                      </span>
                      <span className="insight-recommendation">
                        {insight.recommendation}
                      </span>
                    </div>
                  ))}
                </div>
              )}


    </div>
  );
}