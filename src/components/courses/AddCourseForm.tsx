import { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import type { Course } from "../../types";
import { useToast } from "../../types/useToast";

type Props = {
  onClose?: () => void;
};


export default function AddCourseForm({
    onClose,
  }:Props) {
  const ctx = useContext(AppContext);

  if (!ctx) return null;

  const { addCourse } = ctx;
 
  const { showToast } = useToast();

  const [name, setName] = useState("");
  const [professor, setProfessor] = useState("")
  const [progress, setProgress] = useState(0);
  const [nextClass, setNextClass] = useState("")

  const handleSubmit = (e:React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!name || !professor || !nextClass) {
      // alert("Please fill all fields");
      showToast("Please fill all required fields.", "error");
      return;
    }
    
    const newCourse: Course = {
      id: crypto.randomUUID(),
      name,
      professor,
      progress,
      nextClass,
    };

    addCourse(newCourse);
    showToast(`Course "${name}" added successfully!`, "success");

    onClose?.();
  
    //reset form
    setName("");
    setProfessor("");
    setProgress(0);
    setNextClass("");
  };

  return (
    <form className="add-course-form" onSubmit={handleSubmit}>
          <h2>Add New Course</h2>

          <input
            type="text"
            placeholder="Course Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Professor Name"
            value={professor}
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => setProfessor(e.target.value)}
          />

          <div className="range-group">
            <label>Progress: {progress}%</label>

            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={(e:React.ChangeEvent<HTMLInputElement>) => setProgress(Number(e.target.value))}
            />
          </div>

          <input
            type="text"
            placeholder="Next Class"
            value={nextClass}
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => setNextClass(e.target.value)}
          />

          <button type="submit" className="primary-btn flex-center" >
            Add Course
          </button>
    </form>
  );
}