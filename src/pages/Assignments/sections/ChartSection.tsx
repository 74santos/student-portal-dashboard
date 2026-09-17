import AssignmentProgressChart
from "../../../components/assignments/AssignmentProgressChart";

import type { ChartProps } from "../types";

export function ChartSection({
    assignments,
}: ChartProps) {

    return (

        <AssignmentProgressChart
            assignments={assignments}
        />

    );

}