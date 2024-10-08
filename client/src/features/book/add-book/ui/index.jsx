import { Button, useDisclosure } from '@nextui-org/react';
import { PlusCircle } from '@phosphor-icons/react';
import { AddBookModal } from './modal';

export const AddBook = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button
        color='success'
        size='md'
        className='font-medium'
        startContent={<PlusCircle size={20} weight='bold' />}
        onPress={onOpen}
        variant='shadow'
      >
        Добавить
      </Button>
      <AddBookModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
};
