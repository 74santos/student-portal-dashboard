export type SearchItem = {
  id: string;
  title: string;
  type:
    | "course"
    | "assignment"
    | "activity";
};

export type ToastType = 
    | "success"
    | "warning"
    | "error";

export type Toast = {

  id: string;
  message: string;
  type: ToastType;

};


export type Course = {
  id: string;
  name: string;
  professor: string;
  progress: number;
  nextClass: string;
};

export type Assignment = {
  id: string;
  title: string;
  courseId: string;
  dueDate: string;
  dueTime?: string;
  priority: "low" | "medium" | "high";
  completed: boolean;
  
  startTime?: string,
  duration?: number,
};

export type AssignmentSort =
  | "dueDate"
  | "priority"
  | "alphabetical";


export type Activity = {
  id: string;
  message: string;
  time: string;
  type:
    | "completed"
    | "created"
    | "deleted"
    | "warning";
};



export type Insight = {
  title: string;
  message: string;

  priority:
    | "critical"
    | "warning"
    | "good";

  recommendation?: string;
};



export type CalendarEvent = {
  id: string;
  title: string;

  day: string;
  hour: string;
  type:
    | "assignment"
    | "course"
    | "study";

  courseId?: string;
};


export type Goal = {
  id:string;
  title: string;
  current: number;
  target: number;
};



export type NotificationItem = {
  id: string;
  title: string;
  message: string;

  priority:
    | "critical"
    | "warning"
    | "good";

  createdAt: string;

  read: boolean;

  category:
    | "assignment"
    | "course"
    | "system"
    | "goal"
    | "risk"
    | "achievement"
};


export type RiskLevel =
  | "low"
  | "medium"
  | "high";
  

export type CourseRisk = {
  courseId: string;
  courseName: string;

  risk: RiskLevel;

  score: number;

  reason: string;

  recommendation: string;
};




