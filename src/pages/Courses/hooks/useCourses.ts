import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";

export function useCourses() {

    const ctx = useContext(AppContext);

    if (!ctx) {
        throw new Error(
            "useCourses must be used inside AppProvider."
        );
    }

    return ctx;
}