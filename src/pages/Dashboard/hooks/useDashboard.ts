import { useContext } from "react";

import { AppContext } from "../../../context/AppContext";

export function useDashboard() {

    const ctx = useContext(AppContext);

    if (!ctx) {

        throw new Error(

            "useDashboard must be used inside AppProvider."

        );

    }

    return ctx;

}