import {useContext,  useEffect, useState} from "react";

import { AppContext } from "../context/AppContext";

import DashboardSummary from "../components/dashboard/DashboardSummary";
import DashboardOverview from "../components/dashboard/DashboardOverview"

import StatsCard from "../components/dashboard/StatsCard";
import CoursesPreview from "../components/dashboard/CoursesPreview";
import AssignmentsPreview from "../components/dashboard/AssignmentsPreview";

import ActivityFeed from "../components/dashboard/ActivityFeed";
import QuickActions from "../components/dashboard/QuickActions"


import SmartInsights from "../components/dashboard/SmartInsights";
import SkeletonCard from "../components/ui/SkeletonCard"

import AnalyticsChart from "../components/dashboard/AnalyticsChart";


import Achievements from "../components/dashboard/Achievements"
import TodaysFocus from "../components/dashboard/TodaysFocus"

import StreakCard from "../components/dashboard/StreakCard"
import AcademicHealth from "../components/dashboard/AcademicHealth"
import RiskEngine from "../components/dashboard/RiskEngine"
import AcademicGoalsEngine from "../components/dashboard/AcademicGoals"
// import { DashboardAnalyticsSection } from "./Dashboard/sections/DashboardAnalyticsSection";



// import {
//   getRelativeDay,
// } from "../utils/date";


export default function Dashboard() {
const ctx = useContext(AppContext);

if(!ctx) return null;

const {
  courses,
  assignments,
  // activities,
  // targetGPA,
  searchQuery,
  // snapshot,
  dashboard,
  analytics,
} = ctx;

// const {
//   metrics,
//   core,
//   analysis,
//   report,
// } = snapshot;





const [loading, setLoading] = useState(true);

const filteredCourses =
  courses.filter((course) =>
    course.name
      .toLowerCase()
      .includes(
        searchQuery.toLowerCase()
      )
  );

const filteredAssignments =
  assignments.filter(
    (assignment) =>
      assignment.title
        .toLowerCase()
        .includes(
          searchQuery.toLowerCase()
        )
  );




// Skeleton
useEffect(() => {
  const timer =
    setTimeout(() => {
      setLoading(false);
    }, 800);

  return () =>
    clearTimeout(timer);

}, []);

if(loading) {
  return (
    <main className="page-content">
       <SkeletonCard lines={5} />

        <div className="stats-grid">
        <SkeletonCard lines={5}/>
        <SkeletonCard />
        <SkeletonCard lines={5} />
        
        <SkeletonCard />

        </div>
        <SkeletonCard lines={5} /> 

    
    </main>
  );
}



  return (
    <main className="page-content">
      
       <DashboardSummary />
   
      {/* Stats */}
     


          <div className="stats-grid">

            {dashboard.stats.map((stat) => (

                <StatsCard

                    key={stat.id}

                    stat={stat}

                />

            ))}

        </div>




  <div className="dashboard-primary">
      <DashboardOverview />
      
    <QuickActions/>
    <TodaysFocus />
  </div>

    <CoursesPreview courses={filteredCourses} />         

<div className="dashboard-main-grid">

  <div className="dashboard-primary">

    <AcademicHealth/>
    
    <RiskEngine />

</div>

<div className="dashboard-secondary"> 
<AcademicGoalsEngine />
  
<SmartInsights />
  

    </div>

    <Achievements />
   

    <StreakCard />

</div>

<section className="analytics-zone">


    <AnalyticsChart data={analytics.weeklyStudy} />

    

    </section>   

{/* <DashboardAnalyticsSection />  */}
     

   
<div className="dashboard-split">
      <AssignmentsPreview
        assignments={
          filteredAssignments
        }
      />

      <ActivityFeed />
</div>

    </main>
  );
}









 {/* <div className="stats-grid">
       
        <StatsCard 
            title="Active Courses" 
            value={String(metrics.totalCourses)} 
            link="courses" 
            trend="+2 this semester" 
            icon={<FiBookOpen />}  />

        <StatsCard 
            title="Completion Rate" 
            value={`${metrics.completionRate}%`} 
            trend={`${metrics.completedAssignments} completed`} 
            icon={<FiTrendingUp />} />

        <StatsCard 
            title="Forecast GPA" 
            value={metrics.forecastGPA.toFixed(2)} 
            trend={
              Number(metrics.forecastGPA)
              >= targetGPA
             
              ? "Goal Achieved"
             
              : `Target ${targetGPA}`
             }
            icon={<FaGraduationCap />}/>

        <StatsCard 
            title="Overdue Tasks" 
            value={String(metrics.overdueAssignments)} 
            trend={ metrics.overdueAssignments > 0 
            ? "Needs attention"
            : "All caught up" }  
            icon={<FiAlertCircle />} />
      </div> */}

