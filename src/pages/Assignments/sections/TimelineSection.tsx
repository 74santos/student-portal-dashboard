import AssignmentCard from "../../../components/assignments/AssignmentCard";

import type { TimelineProps } from "../types";

export function TimelineSection({
    display,
}: TimelineProps) {

    return (

        <>

            {display.sections
                .filter(section => section.count > 0)
                .map(section => (

                    <div key={section.id}>

                        <h2 className="assignment-section-title">

                            <span>
                                {section.count}
                            </span>

                            {" "}{section.title}{" "} 

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

        </>

    );

}