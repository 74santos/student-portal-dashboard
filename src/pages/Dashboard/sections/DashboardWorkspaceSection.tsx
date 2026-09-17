import AcademicCoach from "../../../components/ai/AcademicCoach";
import  DashboardOverview  from "../../../components/dashboard/DashboardOverview";
import  QuickActions  from "../../../components/dashboard/QuickActions";
import  TodaysFocus  from "../../../components/dashboard/TodaysFocus";

export function DashboardWorkspaceSection() {

    return (

        <div className="dashboard-primary">

            <DashboardOverview />

            <QuickActions />

            <TodaysFocus />

            <AcademicCoach />

        </div>

    );

}