import  EmptyState  from "../../../components/ui/EmptyState";

interface EmptySectionProps {

    isEmpty: boolean;

}

export function EmptySection({

    isEmpty,

}: EmptySectionProps) {

    if (!isEmpty) {

        return null;

    }

    return (

        <EmptyState

            title="No courses yet"

            description="
            Create your first course
            to start tracking
            academic progress.
            "

        />

    );

}