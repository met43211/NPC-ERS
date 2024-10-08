import { Button, useDisclosure } from '@nextui-org/react';
import { Pen } from '@phosphor-icons/react';
import { EditBookModal } from './modal';

export const EditBook = ({ pickedBook }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button
        color='primary'
        className='font-medium'
        startContent={<Pen size={20} weight='bold' />}
        isDisabled={!pickedBook}
        variant='shadow'
        onPress={onOpen}
      >
        Изменить
      </Button>
      <EditBookModal isOpen={isOpen} onOpenChange={onOpenChange} book={pickedBook} />
    </>
  );
};
