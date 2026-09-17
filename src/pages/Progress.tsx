

import ProductivityScore
from "../components/dashboard/ProductivityScore";

import SmartInsights
from "../components/dashboard/SmartInsights";

import StudyAnalytics
from "../components/analytics/StudyAnalytics";

import CourseRankings 
from "../components/progress/CourseRankings"

import PerformanceRecommendations 
from "../components/progress/PerformanceRecommendations"

import ProgressTrendChart 
from "../components/progress/ProgressTrendChart"

import PerformanceSummary
from "../components/progress/PerformanceSummary"

import { useContext } from "react";
import { AppContext } from "../context/AppContext";


export default function Progress() {

  const ctx = useContext(AppContext);

  if (!ctx) return null;

  const { snapshot } = ctx;

  return (

    <main className="page-content">

        <section className="page-hero">

        <div>

          <h1>
            Academic Performance Center
          </h1>

          <p>
            Monitor trends, identify risks,
            and improve academic outcomes.
          </p>

        </div>

        </section>
    
      <div className="progress-summary-grid">

   
      <ProductivityScore 
        metrics = {snapshot.metrics}
      />

     <div className="two-grids">

     <PerformanceSummary 
        metrics={snapshot.metrics}
        analysis={snapshot.analysis}
        summary={snapshot.summary}
     />



      <CourseRankings />
    
      </div>


      </div>

      <div className="progress-analysis-grid">

      

      <ProgressTrendChart />
     
      </div>

      {/* <div className="progress-insights-grid">
      </div> */}
      
      <PerformanceRecommendations />

      <section className="analytics-section">

      <StudyAnalytics />
    
      <SmartInsights />
      </section>
     

    </main>

  );
}