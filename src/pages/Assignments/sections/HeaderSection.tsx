import Button from "../../../components/ui/Button";
import { FiPlus } from "react-icons/fi";

import type { HeaderProps } from "../types";

export function HeaderSection({

    onAdd,

}: HeaderProps) {

    return (

        <div className="assignments-header">

            <div>

                <h1>

                    Academic Assignments

                </h1>

                <p className="courses-subtitle">

                    Manage coursework,
                    monitor deadlines,
                    and track completion.

                </p>

            </div>

            <Button

                className="primary"

                onClick={onAdd}

            >

                <FiPlus />

                Add Assignment

            </Button>

        </div>

    );

}