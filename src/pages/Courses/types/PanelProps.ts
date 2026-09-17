import type { Course } from "../../../types";



export interface PanelProps {

   course: Course | null;
   onClose: () => void;

}