import { useContext }
from "react";

import { AppContext }
from "../../context/AppContext";

import type { SearchItem }
from "../../types";


import SearchResults from "./SearchResults"

export default function GlobalSearch() {

  const ctx =
    useContext(AppContext);

  if (!ctx) return null;

  const {
    globalSearch,
    courses,
    assignments,
    activities,
  } = ctx;

  if (!globalSearch.trim()) {
    return null;
  }

 

  const courseResults: SearchItem[] =
    courses
      .filter((course) =>{
        const query = 
          globalSearch.toLowerCase();
        
        return (
        course.name
          .toLowerCase()
          .includes( query )
        ||

        "course"
          .includes(query)
        ||

        "courses"
         .includes(query)
        );
      })
      .map(
        (course) => ({
          id: course.id,
          title: course.name,
          type: "course",
        }));

  const assignmentResults: SearchItem[] =
    assignments
      .filter((assignment) =>{
        const query = globalSearch.toLowerCase();

      return (
        assignment.title
          .toLowerCase()
          .includes( query )

        ||

        "assignment"
          .includes(query)

        ||

        "assignments"
          .includes(query)
      );
      })
      .map(
        (assignment) =>({
          id: assignment.id,
          title:assignment.title,
          type: "assignment",
     }));

  const activityResults: SearchItem[] =
    activities
      .filter((activity) =>
        activity.message
          .toLowerCase()
          .includes(
            globalSearch.toLowerCase()
          )
      )
      .map(
        (activity) =>({
          id: activity.id,
          title: activity.message,
          type: "activity",
      }));

  return (

    <div className="global-search-results">

      <SearchResults
        title="Courses"
        items={courseResults}
      
      />

      <SearchResults
        title="Assignments"
        items={assignmentResults}
      />

      <SearchResults
        title="Activity"
        items={activityResults}
      />

    </div>

  );

}