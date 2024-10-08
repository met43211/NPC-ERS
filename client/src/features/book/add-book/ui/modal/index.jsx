import { Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/modal';
import { BookForm } from '@/entities/book';

export const AddBookModal = ({ isOpen, onOpenChange }) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement='top-center'>
      <ModalContent>
        {() => (
          <>
            <ModalHeader className='flex flex-col gap-1'>Добавить книгу</ModalHeader>
            <ModalBody>
              <BookForm />
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
