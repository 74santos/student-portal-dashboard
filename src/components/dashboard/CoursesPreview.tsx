

import type {
  CoursePerformance,
} from "../../engines/features/AcademicEngine/core/types";

type Props = {
  rankings: CoursePerformance[];
  secure: boolean;
};

export default function CoursesPreview({ rankings, secure }: Props) {



  const getColor = (progress: number) => {
    if (progress < 40) return "#ef4444";
    if (progress < 70) return "#f59e0b";
    return "#3b82f6";
  };

  return (
    <div className="margin-top">
      <h2>My Courses</h2>

      <div className="courses-grid-dashboard">
        {rankings.map
        (({course, status}) => {
          const color = getColor(course.progress);


          return (
            <div className="course-card" 
              key={course.id}
              style={{ cursor: "default"}}
              >
              
              {/* top accent */}
              <div
                className="course-accent"
                style={{ background: color }}
              />


              
          

            <h3>{secure
                    ? `${course.name[0]}••••••`
                    : course.name}
                  </h3>
              
              <div className="course-meta">
                <span className="prof"> {secure
            ? "Protected"
          : course.professor}</span>
                <span className="progress-text">{course.progress}%</span>
              </div>

              {/* progress */}
              <div className="progress-section">
                

                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{
                      width: `${course.progress}%`,
                      background: color
                    }}
                  />
                </div>
              </div>

              <div className="next">
                <span>Next Class </span>
                <span>{course.nextClass}</span>
              </div>

              <div className="course-performance">

                {/* <span>
                  Score: {score}
                </span> */}

                <span
                  className={`status ${
                    status
                      .toLowerCase()
                      .replace(" ", "-")
                  }`}
                >
                  {status}
                </span>

                </div>





            </div>
          );
        })}
      </div>
    </div>
  );
}