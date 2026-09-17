import {
  FiBookOpen,
  FiTrendingUp,
  FiAlertCircle,
} from "react-icons/fi";

import {
  FaGraduationCap,
} from "react-icons/fa";

import { MdPriorityHigh } from "react-icons/md"

import {  FiZap, } from "react-icons/fi";


export const metricIconMap = {

  courses: FiBookOpen,

  completion: FiTrendingUp,

  gpa: FaGraduationCap,

  overdue: FiAlertCircle,

  active: FiZap,

  priority: MdPriorityHigh,

} as const;

export type MetricIcon =
  keyof typeof metricIconMap;