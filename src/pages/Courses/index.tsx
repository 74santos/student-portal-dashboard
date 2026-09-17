import {  useState } from 'react';
import { useCourses } from "./hooks"

import { ToolbarSection } from "./sections/ToolbarSection"
import type { Course } from "../../types";

import { GridSection, EmptySection, ModalSection } from './sections/';
import { PanelSection } from './sections/PanelSection';



export default function Courses() {

  const { courses,  resetCourses } = useCourses();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const filteredCourses = courses.filter((course) =>
    course.name
      .toLowerCase()
      .includes(search.toLowerCase()) 
  );

  return (
    <div className="page-content">
     
         {/* PAGE ACTIONS */}
         <ToolbarSection 
           search={search}

           onSearch={setSearch}

           onReset={resetCourses}

           onAdd={() => setOpen(true)}
         />

        {/* GRID */}
        <GridSection 
          courses = {filteredCourses}

          onSelect= {setSelectedCourse}
        />

        {/* EMPTY */}
      <EmptySection 
        isEmpty = {filteredCourses.length === 0}        
      />

        {/* MODAL */}
        <ModalSection 
        open={open}

        onClose={() => setOpen(false)}        
        />
      
        <PanelSection 
          course = {selectedCourse}
          onClose={() => setSelectedCourse(null)}        
        />

    </div>
  );
}


 