import AnalyticsChart from "../../../components/dashboard/AnalyticsChart";
// import { useDashboard } from "../hooks/useDashboard";

export function DashboardAnalyticsSection() {

    // const {

    //     analytics,

    // } = useDashboard();


    const data = [
        { day: "Mon" , hours: 2 },
        { day: "Tue" , hours: 4 },
        { day: "Wed" , hours: 3 },
        { day: "Thu" , hours: 5 },
        { day: "Fri" , hours: 2 },
        { day: "Sat" , hours: 6 },
        { day: "Sun" , hours: 4 },
      ];

    return (

        <section className="analytics-zone">

            <AnalyticsChart

                data={data}

                // data={analytics.weeklyStudy}

            />

        </section>

    );

}