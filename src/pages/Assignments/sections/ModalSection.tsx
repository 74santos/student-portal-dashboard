import Modal from "../../../components/ui/Modal";
import AddAssignmentForm from "../../../components/assignments/AddAssignmentForm";

import type { ModalProps } from "../types";

export function ModalSection({

    open,

    onClose,

}: ModalProps) {

    return (

        <Modal
            open={open}
            onClose={onClose}
        >

            <AddAssignmentForm
                onClose={onClose}
            />

        </Modal>

    );

}