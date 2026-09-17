import  CoursesPreview  from "../../../components/dashboard/CoursesPreview";
import { useDashboard } from "../hooks/useDashboard";

export function DashboardCoursesSection() {

    const {

        snapshot,

        searchQuery,

        secure,

    } = useDashboard();

    const filteredRankings =
        snapshot.core.rankings.filter(({course}) =>
            course.name
                .toLowerCase()
                .includes(
                    searchQuery.toLowerCase()
                )
        );

    return (

        <CoursesPreview

           rankings={filteredRankings}

           secure ={secure}

        />

    );

}