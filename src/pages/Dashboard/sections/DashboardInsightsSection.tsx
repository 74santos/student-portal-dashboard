import  AcademicHealth  from "../../../components/dashboard/AcademicHealth";
import  AcademicGoalsEngine  from "../../../components/dashboard/AcademicGoals";
import  Achievements  from "../../../components/dashboard/Achievements";
import  RiskEngine  from "../../../components/dashboard/RiskEngine";
// import  SmartInsights  from "../../../components/dashboard/SmartInsights";
import  StreakCard  from "../../../components/dashboard/StreakCard";


export function DashboardInsightsSection() {

    return (

        <div className="dashboard-main-grid">

            <div className="dashboard-primary">

                <AcademicHealth />

                <RiskEngine />

            </div>

            <div className="dashboard-secondary">

                <AcademicGoalsEngine />

                {/* <SmartInsights /> */}
                <Achievements />

                <StreakCard />
             

            </div>

          

        </div>

    );

}