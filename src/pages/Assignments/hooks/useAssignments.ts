// hooks/useAssignments.ts
import { useContext, useState, useMemo } from "react";
import { AppContext } from "../../../context/AppContext";


import { buildAssignmentDisplay } from "../../../engines/features/AssignmentEngine/sections/buildAssignmentDisplay"

export function useAssignments() {

    const ctx = useContext(AppContext);

    if (!ctx) {
        throw new Error(
            "useAssignments must be used inside AppProvider."
        );
    }

    const {
        assignments,
        assignmentModel,
    } = ctx;

    const [search, setSearch] =
        useState("");

    const [filter, setFilter] =
        useState("all");

    const [open, setOpen] =
        useState(false);

    const display = useMemo(
        () =>
            buildAssignmentDisplay(
                assignmentModel.timeline,
                {
                    search,
                    filter,
                }
            ),
        [
            assignmentModel.timeline,
            search,
            filter,
        ]
    );

    return {

        assignments,

        model: assignmentModel,

        display,

        ui: {
            search,

            setSearch,

            filter,

            setFilter,

            open,

            setOpen,
        }


    };

}