import { useEffect, useState} from "react";

import DashboardSummary from "../../components/dashboard/DashboardSummary";
import SkeletonCard from "../../components/ui/SkeletonCard"


import { DashboardStatsSection } from "./sections/DashboardStatsSection";
import { DashboardAnalyticsSection } from "./sections/DashboardAnalyticsSection";
import { DashboardAssignmentSection } from "./sections/DashboardAssignmentSection";
import { DashboardCoursesSection } from "./sections/DashboardCourseSection";
import { DashboardActivitySection } from "./sections/DashboardActivitySection";
import { DashboardWorkspaceSection } from "./sections/DashboardWorkspaceSection";
import { DashboardInsightsSection } from "./sections/DashboardInsightsSection";



// import {
//   getRelativeDay,
// } from "../utils/date";


export default function Dashboard() {

const [loading, setLoading] = useState(true);


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
        <div className="content-container">
      <DashboardSummary />
   
      {/* Stats */}
      <DashboardStatsSection />

      <DashboardWorkspaceSection />

      <DashboardCoursesSection />

      <DashboardInsightsSection />

      <DashboardAnalyticsSection />
   
<div className="dashboard-split">
     
      <DashboardAssignmentSection />

      <DashboardActivitySection />
</div>

   

  </div>
    </main>
  );
}









 
