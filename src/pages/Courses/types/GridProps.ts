import type { Course } from "../../../types";

export interface GridProps {

    courses: Course[];

    onSelect: (course: Course) => void;

}