import { createContext, useState, useEffect, useMemo ,type ReactNode } from "react";
import type { Course, Assignment, Activity } from "../types";
import { mockCourses, mockAssignments } from "../utils/helpers";

import type { StudentProfile } from "../types/student";
import { mockStudent } from "../types/mockStudent";
import type { NotificationItem } from "../types";

import {
  findStudentPortalAccountByEmail,
} from "../utils/studentPortalAccounts";

import type { User } from "../types/user"
// import { mockUser } from "../types/mockUser"
import { getUserStorageKey } from "../utils/userStorage";

import { buildAcademicSnapshot } from "../engines/features/AcademicEngine";
import { buildDashboard } from "../engines/features/DashboardEngine"
import { buildAnalytics } from "../engines/features/AnalyticsEngine"
import { buildAssignmentModel} from "../engines/features/AssignmentEngine"


import type { AcademicSnapshot } from "../engines/features/AcademicEngine/types";
import type { DashboardModel } from "../engines/features/DashboardEngine/types";
import type { AnalyticsModel } from "../engines/features/AnalyticsEngine/types";
import type {AssignmentModel} from "../engines/features/AssignmentEngine/types"

import {
  generateNotifications,
} from "../utils/notificationEngine";

type AppContextType = {
 

  theme: "light" | "dark" | "system";
  setTheme: (t: "light" | "dark" | "system") => void;

  isAuthenticated: boolean;
  setIsAuthenticated: (v: boolean) => void;

  globalSearch: string;
  setGlobalSearch:
  React.Dispatch<
    React.SetStateAction<string>
    >;


  user: User | null;

  setUser:
  React.Dispatch<
  React.SetStateAction<User | null>
  >;

  student: StudentProfile;

  setStudent:
  React.Dispatch<
    React.SetStateAction<StudentProfile>
  >;

  snapshot: AcademicSnapshot;
  dashboard: DashboardModel;
  analytics: AnalyticsModel;
  assignmentModel:AssignmentModel;
  
  logout: () => void;

  secure: boolean;
  setSecure: (v: boolean) => void;

  searchQuery: string;
  setSearchQuery: ( query: string ) => void;

  notifications: NotificationItem[];

  setNotifications:
  React.Dispatch<
    React.SetStateAction<NotificationItem[]>
  >;


  courses: Course[];
  addCourse: (course: Course) => void;



  activities: Activity[];

  clearActivities: () => void;

  addActivity: (
    message: string,
    type:
      | "completed"
      | "created"
      | "deleted"
      | "warning"
  ) => void;

  updateCourse: (updated: Course) => void;
  deleteCourse: (id: string ) => void;

  assignments: Assignment[];
  addAssignment: (
  assignment: Assignment
  ) => void;

  updateAssignment: (
    updated: Assignment
  ) => void;

  toggleAssignment: (
  id: string
  ) => void;

  deleteAssignment: (
  id: string
  ) => void;

  resetCourses : () => void;
};

export const AppContext = createContext<AppContextType | null>(null);


export function AppProvider({ children }: { children: ReactNode }) {

  const [theme, setTheme] = useState<"light" | "dark" | "system">(() => {
    const saved = localStorage.getItem("theme");

    return (saved as "light" | "dark" | "system") || "system";
  });

  const [globalSearch,  setGlobalSearch] =  useState("");

  const [ searchQuery,  setSearchQuery ] = useState("");


  const [user, setUser] =
  useState<User | null>(() => {

    const saved =
      localStorage.getItem(
        "user"
      );
  
    return saved
      ? JSON.parse(saved)
      : null;
      // : mockUser;
  
  });


  const [student, setStudent] =
  useState<StudentProfile>(() => {

    const savedUser =
      localStorage.getItem("user");

    if (!savedUser) {
      return mockStudent;
    }

    try {
      const currentUser: User =
        JSON.parse(savedUser);

      const savedStudent =
        localStorage.getItem(
          getUserStorageKey(
            "student",
            currentUser.id
          )
        );

      return savedStudent
        ? JSON.parse(savedStudent)
        : mockStudent;

    } catch {
      return mockStudent;
    }
  });


  const [secure, setSecure] = useState(false); // Ninja 

  const updateSecure = (value: boolean) => {
    if (!user?.id) return;
  
    setSecure(value);
  
    localStorage.setItem(
      getUserStorageKey("ninjaMode", user.id),
      String(value)
    );
  };


  //The hydration effect will then reset the in-memory data.
  const logout = () => {

    setHydratedUserId(null);
  
    setIsAuthenticated(false);
  
    setUser(null);
  
    localStorage.removeItem("isAuthenticated");
  
    localStorage.removeItem("user");
  
  };
  


  const [ isAuthenticated, setIsAuthenticated ] = useState(() => {
    const saved = localStorage.getItem("isAuthenticated");
      return saved === "true";
  });


  const [notifications, setNotifications] =
  useState<NotificationItem[]>(() => {

    const savedUser =
      localStorage.getItem("user");

    if (!savedUser) {
      return [];
    }

    try {

      const currentUser: User =
        JSON.parse(savedUser);

      const savedNotifications =
        localStorage.getItem(
          getUserStorageKey(
            "notifications",
            currentUser.id
          )
        );

      return savedNotifications
        ? JSON.parse(savedNotifications)
        : [];

    } catch {

      return [];

    }

  });






  const [courses, setCourses] = useState<Course[]>(() => {
    const savedUser = localStorage.getItem("user");
  
    if (!savedUser) {
      return mockCourses;
    }
  
    try {
      const currentUser: User = JSON.parse(savedUser);
  
      const savedCourses =
      localStorage.getItem(
        getUserStorageKey(
          "courses",
          currentUser.id
        )
      );

  
      return savedCourses
        ? JSON.parse(savedCourses)
        : mockCourses;
  
    } catch {
      return mockCourses;
    }
  });




  const [assignments, setAssignments] =
  useState<Assignment[]>(() => {

    const savedUser =
      localStorage.getItem("user");

    if (!savedUser) {
      return mockAssignments;
    }

    try {

      const currentUser: User =
        JSON.parse(savedUser);

      const savedAssignments =
        localStorage.getItem(
          getUserStorageKey(
            "assignments",
            currentUser.id
          )
        );

      return savedAssignments
        ? JSON.parse(savedAssignments)
        : mockAssignments;

    } catch {

      return mockAssignments;

    }

  });




  
  const [activities, setActivities] =
  useState<Activity[]>(() => {

    const savedUser =
      localStorage.getItem("user");

    if (!savedUser) {
      return [];
    }

    try {

      const currentUser: User =
        JSON.parse(savedUser);

      const savedActivities =
        localStorage.getItem(
          getUserStorageKey(
            "activities",
            currentUser.id
          )
        );

      return savedActivities
        ? JSON.parse(savedActivities)
        : [];

    } catch {

      return [];

    }

  });


  // This is simply our safety flag:
  const [hydratedUserId, setHydratedUserId] =
  useState<string | null>(null);

  // null       → no user's data loaded yet
  // Chris ID   → Chris's data is loaded
  // Jay ID     → Jay's data is loaded


    const snapshot = useMemo(
      () =>
        buildAcademicSnapshot(
          student,
          courses,
          assignments,
          activities
        ),
      [
        student,
        courses,
        assignments,
        activities
      ]
    );

    
    
  const dashboard = useMemo(() =>

      buildDashboard(snapshot),
  
      [snapshot]
  
  );


  const analytics = useMemo(

    () =>

        buildAnalytics(

            courses,

            assignments,

            // activities

        ),

    [

        courses,

        assignments,

        activities,

    ]

);




const assignmentModel = useMemo (

  () =>

      buildAssignmentModel(

          assignments

      ),

  [

      assignments

  ]

);



  const clearActivities = () => setActivities([]);

  const addActivity = (
    message: string,
    type:
      | "completed"
      | "created"
      | "deleted"
      | "warning"
  ) => {
  
    const newActivity = {
      id: crypto.randomUUID(),
      message,
      time: new Date().toISOString(),
      type,
    };
  
    setActivities((prev) => [
      newActivity,
      ...prev,
    ].slice(0,50));
  };




  const addCourse = (course: Course) => {

    setCourses((prev) => [
      ...prev,
      course,
    ]);
  
    addActivity(
      `Added course "${course.name}"`,
      "created"
    );
  };

  const updateCourse = ( updated: Course ) => {
    setCourses((prev) => 
     prev.map((course) =>
      course.id === updated.id ? updated : course
     )
    );
  };

  const deleteCourse = (id: string) => {
     setCourses((prev) =>
      prev.filter((course) => course.id !== id)
     );
  };

  const resetCourses = () => {
     setCourses(mockCourses);
   };


  const addAssignment = (
    assignment: Assignment
  ) => {
    setAssignments((prev) => [
      ...prev,
      assignment,
    ]);
    addActivity(
      `Created assignment "${assignment.title}"`,
      "created"
    );
  };

  const updateAssignment = (
     updated: Assignment
  ) => {
      setAssignments((prev) =>
      prev.map((assignment) =>
        assignment.id === updated.id
          ? updated
          : assignment
      )
    );
 };
  
 const toggleAssignment = (
  id: string
) => {

  const assignment =
    assignments.find(
      (a) => a.id === id
    );

  if (!assignment) return;

  const updatedCompleted =
    !assignment.completed;

  addActivity(
    updatedCompleted
      ? `Completed "${assignment.title}"`
      : `Reopened "${assignment.title}"`,
    updatedCompleted
      ? "completed"
      : "warning"
  );



  setAssignments((prev) =>
    prev.map((assignment) =>
      assignment.id === id
        ? {
            ...assignment,
            completed:
              updatedCompleted,
          }
        : assignment
    )
  );
};


  
  const deleteAssignment = (
    id: string
  ) => {

    const assignment =
      assignments.find(
        (a) => a.id === id
      );

    if (assignment) {

      addActivity(
        `Deleted "${assignment.title}"`,
        "deleted"
      );
    }

    setAssignments((prev) =>
      prev.filter(
        (assignment) =>
          assignment.id !== id
      )
    );
  };



  useEffect(() => {
     localStorage.setItem("isAuthenticated", String(isAuthenticated));
  }, [isAuthenticated]);


  useEffect(() => {
    localStorage.setItem("user" , JSON.stringify(user));
  },[user]);

 
 //don't save anything until the correct user's data has been loaded

  useEffect(() => {
    if (!user) return;

    if (hydratedUserId !== user.id) {
      return;
    }
  
    localStorage.setItem( getUserStorageKey( "student", user.id ),
      JSON.stringify(student)
    );
  }, [student, user,hydratedUserId]);



  useEffect(() => {
    if(!user) return;

    if (hydratedUserId !== user.id) {
      return;
    }

    localStorage.setItem( getUserStorageKey("courses", user.id), 
       JSON.stringify(courses));
  }, [courses, user, hydratedUserId]);



  useEffect(() => {
    if (!user) return;

    if (hydratedUserId !== user.id) {
      return;
    }
  
    localStorage.setItem( getUserStorageKey( "assignments", user.id ), 
      JSON.stringify(assignments)
    );
  
   }, [assignments, user, hydratedUserId]);



  useEffect(() => {
    if (!user) return;

    if (hydratedUserId !== user.id) {
      return;
    }

    localStorage.setItem( getUserStorageKey( "activities", user.id ),
      JSON.stringify(activities)
      );
  }, [activities, user, hydratedUserId]);



  useEffect(() => {
    if (!user) return;

    if (hydratedUserId !== user.id) {
      return;
    }

    localStorage.setItem( getUserStorageKey( "notifications", user.id ),
      JSON.stringify(notifications)
    );
  }, [notifications, user, hydratedUserId]);




  useEffect(() => {
    if (!user?.id) {
      setSecure(false);
      return;
    }
  
    const saved = localStorage.getItem(
      getUserStorageKey("ninjaMode", user.id)
    );
  
    setSecure(saved === "true");
  }, [user]);





   useEffect(() => {
     localStorage.setItem("theme", theme);
   }, [theme]);




   useEffect(() => {

    if (
      notifications.length === 0
    ) {
  
      setNotifications(
  
        generateNotifications(
          assignments,
          courses,
          student
        )
  
      );
  
    }
  
  }, []);



  // When User logs out  user= null effect runs and clears the in-memory data.
  useEffect(() => {
    if (!user) {
      setHydratedUserId(null);
  
      setStudent(mockStudent);
      setCourses(mockCourses);
      setAssignments(mockAssignments);
      setActivities([]);
      setNotifications([]);
  
      return;
    }
  
    try {
      const userId = user.id;
  
      // -----------------------------
      // Student
      // -----------------------------
  
  const account =
    findStudentPortalAccountByEmail(user.email);

  const savedStudent = localStorage.getItem(
    getUserStorageKey("student", userId)
    );

    if (savedStudent) {
      try {
        const storedStudent: StudentProfile =
          JSON.parse(savedStudent);

        if (
          account &&
          storedStudent.id === account.student.id
        ) {
          setStudent(storedStudent);
        } else {
          setStudent(
            account?.student ?? mockStudent
          );
        }
      } catch {
        setStudent(
          account?.student ?? mockStudent
        );
      }
    } else {
      setStudent(
        account?.student ?? mockStudent
      );
    }
  
  
      // -----------------------------
      // Courses
      // -----------------------------
  
      const savedCourses = localStorage.getItem(
        getUserStorageKey("courses", userId)
      );
  
      setCourses(
        savedCourses
          ? JSON.parse(savedCourses)
          : mockCourses
      );
  
  
      // -----------------------------
      // Assignments
      // -----------------------------
  
      const savedAssignments = localStorage.getItem(
        getUserStorageKey("assignments", userId)
      );
  
      setAssignments(
        savedAssignments
          ? JSON.parse(savedAssignments)
          : mockAssignments
      );
  
  
      // -----------------------------
      // Activities
      // -----------------------------
  
      const savedActivities = localStorage.getItem(
        getUserStorageKey("activities", userId)
      );
  
      setActivities(
        savedActivities
          ? JSON.parse(savedActivities)
          : []
      );
  
  
      // -----------------------------
      // Notifications
      // -----------------------------
  
      const savedNotifications = localStorage.getItem(
        getUserStorageKey("notifications", userId)
      );
  
      setNotifications(
        savedNotifications
          ? JSON.parse(savedNotifications)
          : []
      );
  
  
      // -----------------------------
      // Mark user data as hydrated
      // -----------------------------
  
      setHydratedUserId(userId);
  
    } catch (error) {
  
      console.error(
        "Failed to hydrate user data:",
        error
      );
  
      setStudent(mockStudent);
      setCourses(mockCourses);
      setAssignments(mockAssignments);
      setActivities([]);
      setNotifications([]);
  
      setHydratedUserId(user.id);
    }
  
  }, [user]);



  useEffect(() => {
    if ( theme !== "system" ) return;

    const root = document.documentElement;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    const handler = (e: MediaQueryListEvent ) => {
      root.classList.remove("light" , "dark");
      root.classList.add(e.matches ? "dark" : "light");
    };
    
    mq.addEventListener("change" , handler);
    return () => mq.removeEventListener("change" , handler);
  }, [theme]);
  

  useEffect(() => {
    const root = document.documentElement;
  
    root.classList.remove("light", "dark");
  
    if (theme === "system") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
  
      root.classList.add(
        prefersDark ? "dark" : "light"
      );
    } else {
      root.classList.add(theme);
    }
  }, [theme]);



  return (
    <AppContext.Provider 
       value={{ 
        theme,
        setTheme,
        globalSearch,
        setGlobalSearch,
        searchQuery,
        setSearchQuery,
        user,
        setUser,
        student,
        setStudent,

        snapshot,
        dashboard,
        analytics,
        assignmentModel,
        
        secure,
        setSecure: updateSecure,
        notifications,
        setNotifications,
        courses,
        addCourse,
        resetCourses,
        updateCourse,
        deleteCourse,
        isAuthenticated,
        setIsAuthenticated,
        assignments,
        activities,
        addActivity,
        clearActivities,
        addAssignment,
        updateAssignment,
        toggleAssignment,
        deleteAssignment,
        logout,
       }}
      >
      {children}
    </AppContext.Provider>
  );
}















     // targetGPA: number;
  // setTargetGPA:
  // React.Dispatch<
  //   React.SetStateAction<number>
  //   >;





  // const [targetGPA, setTargetGPA] =
  //   useState(() => {

  //     const saved =
  //       localStorage.getItem(
  //         "targetGPA"
  //       );

  //     return saved
  //       ? Number(saved)
  //       : 3.8;

  // });






  // const [courses, setCourses] = useState<Course[]>(() => {
  //   const saved = localStorage.getItem("courses");
  //   try {
  //     return saved ? JSON.parse(saved) : mockCourses;
  //   } catch {
  //     return mockCourses;
  //   } 
  // });




   // useEffect(() => {
  //   localStorage.setItem("student", JSON.stringify(student));
  //  },[student]);


  // useEffect(() =>{
  //   localStorage.setItem("courses", JSON.stringify(courses));
  //  },[courses]);


  //  useEffect(() =>{
  //   localStorage.setItem("assignments", JSON.stringify(assignments));
  //  },[assignments]);

  
// useEffect(() =>{
//   localStorage.setItem("notifications", JSON.stringify(notifications));
//  },[notifications]);