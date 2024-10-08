import { Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/modal';
import { BookForm } from '@/entities/book';

export const EditBookModal = ({ isOpen, onOpenChange, book }) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement='top-center'>
      <ModalContent>
        {() => (
          <>
            <ModalHeader className='flex flex-col gap-1'>Изменить книгу</ModalHeader>
            <ModalBody>
              <BookForm {...book} />
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
