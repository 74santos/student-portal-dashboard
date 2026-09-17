import CourseCard  from "../../../components/courses/CourseCard";
import type { GridProps } from "../types";

export function GridSection({

    courses,

    onSelect,

}: GridProps) {


    return (

        <div className="courses-grid-page">

            {courses.map(course => (

                <CourseCard

                    key={course.id}

                    course={course}

                    onOpen={() => onSelect(course)}

                />

            ))}

        </div>

    );

}