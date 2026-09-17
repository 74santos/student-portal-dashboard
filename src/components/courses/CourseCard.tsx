import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";

import type { Course } from "../../types"
import { FiEdit, FiTrash } from "react-icons/fi";
import { useToast } from "../../types/useToast";

type Props = {
  course: Course;
  onOpen: () => void;
};

export default function CourseCard({ course, onOpen }: Props) {

  const ctx = useContext(AppContext);

  if(!ctx) return null;

  const { updateCourse, deleteCourse, secure } = ctx;
  const { showToast } = useToast();

  const [ editing, setEditing ] = useState(false);

  const [ name, setName  ] = useState(course.name);
  const [ professor, setProfessor ] = useState(course.professor);
  const [ progress, setProgress ] = useState(course.progress);

  const [ nextClass, setNextClass ] = useState(course.nextClass);

  const saveEdit = ( e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    updateCourse ({
      ...course,
      name,
      professor,
      progress,
      nextClass,
    });

    showToast(`Course "${name}" updated successfully!`, "success");
    
    setEditing(false);
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    if (!confirm(`Delete "${course.name}"?`)) return;   // Optional confirmation

    deleteCourse(course.id);
    showToast(`Course "${course.name}" deleted.`, "success");
  };

  const getColor = (progress: number) => {
    if (progress < 40) return "#ef4444";
    if (progress < 70) return "#f59e0b";
    return "#3b82f6";
  };

  const color = getColor(course.progress)

  return (
          <div
            className="card course-card"
           
            onClick={() => {
              if (!editing) {
                onOpen();
              }
            }}
          >
       {/* top accent */}
       <div
          className="course-accent"
          style={{ background: color }}
        />
       
      <div className="course-actions">
         <button onClick={(e) => {
          e.stopPropagation();
          setEditing(!editing)}} >
          
         <FiEdit/>
         </button>

         <button onClick={handleDelete}>
         <FiTrash/>
         </button>
      </div>

       {/* EDIT MODE */}
      { editing ? (
        <div className="edit-fields"  onClick={(e) =>
          e.stopPropagation()
        }>
          <input
             value={name}
             onChange={(e) =>  setName(e.target.value)}
          />

           <input
             value={professor}
             onChange={(e) =>  setProfessor(e.target.value)}
          />

          <input
            value={nextClass}
            onChange={(e) => setNextClass(e.target.value)} 
          />

          <div className="range-group">
            <label>{progress}%</label>

            <input
               type="range"
               min="0"
               max="100"
               value={progress}
               onChange={(e) =>   setProgress(Number(e.target.value))
              }
            />
          </div>

          <button onClick={saveEdit} className="primary-btn flex-center">
            Save
          </button>
        </div>
      ) : (
       <>
        <h3>{secure
        ? `${course.name[0]}••••••`
        : course.name}
       </h3>

        <div className="course-meta">
          <p className="text-muted">
            {secure
            ? "Protected"
          : course.professor}
          </p>

          <span className="progress-text">
            {course.progress}%
          </span>
        </div> 

        <div className="progress-bar">
          <div
              className="progress-fill"
              style={{
                width: `${course.progress}%` ,
              }} 
          />        
        </div>

        <div className="next">
                <span>Next Class </span>
                <span>{course.nextClass}</span>
       </div>
      </>
      )}
    </div>
  );
}