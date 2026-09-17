import CoursePanel  from "../../../components/courses/CoursePanel";

import type { PanelProps } from "../types";

export function PanelSection({

    course,

    onClose,

}: PanelProps) {

    return (

        <CoursePanel

            course={course}

            onClose={onClose}

        />

    );

}