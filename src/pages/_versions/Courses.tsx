import { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

import {
  FiSearch,
  FiPlus,
} from "react-icons/fi";

import Modal from "../components/ui/Modal";
import Button from "../components/ui/Button";
import CoursePanel from "../components/courses/CoursePanel";
import AddCourseForm from '../components/courses/AddCourseForm';
import CourseCard from '../components/courses/CourseCard';
import type { Course } from "../types";
import EmptyState from '../components/ui/EmptyState';

export default function Courses() {

  const ctx = useContext(AppContext);
  if (!ctx) return null;

  const { courses,  resetCourses } = ctx;
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
          <div className="courses-toolbar">
            <div className="search-box">
              <FiSearch />

              <input
                type="text"
                placeholder="Search courses..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />

            </div>

            <div className="toolbar-actions">

              <button
                className="reset-btn"
                onClick={resetCourses}
              >
                Reset
              </button>

              <Button
                className="primary"
                onClick={() => setOpen(true)}
              >
                <FiPlus />

                Add Course
              </Button>

            </div>
          </div>

            {/* GRID */}
            <div className="courses-grid-page">

            {filteredCourses.map((course) => (
                <CourseCard
                key={course.id}
                course={course}
                onOpen={() =>
                  setSelectedCourse(course)
                }
              />
            ))}
            </div>

            {/* EMPTY */}
            {filteredCourses.length === 0 && (
            <EmptyState
              title="No courses yet"
              description="
              Create your first course to
              start tracking academic progress.
              "
            
            />
            )}

            {/* MODAL */}
            <Modal
            open={open}
            onClose={() => setOpen(false)}
            >
            <AddCourseForm
              onClose={() => setOpen(false)}
            />
            </Modal>
          
            <CoursePanel
              course={selectedCourse}
              onClose={() =>
                setSelectedCourse(null)
              }
            />

    </div>
  );
}


 {/* <div className="courses-header">

        <div>
          <h1>My Courses</h1>
          <p className="courses-subtitle">
            Track progress, assignments, and performance
          </p>
        </div>

        <div className="courses-toolbar">
          <div className="search-box">
            <FiSearch />
            <input
              type="text"
              placeholder="Search courses..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />
          </div>

          <AddCourseForm />
        </div>
      </div> */}