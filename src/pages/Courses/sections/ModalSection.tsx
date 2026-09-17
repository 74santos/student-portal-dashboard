
import Modal from "../../../components/ui/Modal";
import AddCourseForm from '../../../components/courses/AddCourseForm';
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

     <AddCourseForm
      onClose={onClose}
    />
    </Modal>
  );
}


