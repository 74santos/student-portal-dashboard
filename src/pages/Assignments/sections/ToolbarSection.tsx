import AssignmentsToolbar
from "../../../components/assignments/AssignmentsToolbar";

import type { ToolbarProps } from "../types";

export function ToolbarSection({

    search,

    setSearch,

    filter,

    setFilter,

}: ToolbarProps) {

    return (

        <AssignmentsToolbar

            search={search}

            setSearch={setSearch}

            filter={filter}

            setFilter={setFilter}

        />

    );

}