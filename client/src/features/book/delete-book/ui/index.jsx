import { Trash } from '@phosphor-icons/react';
import { ButtonWithConfirm } from '../../../button-with-confirm/ui';
import { useDeleteBook } from '../lib/hooks/use-delete-book';

export const DeleteBook = ({ pickedBook }) => {
  const deleteBookMutation = useDeleteBook();

  return (
    <ButtonWithConfirm
      variant='shadow'
      icon={<Trash size={20} weight='bold' />}
      isDisabled={!pickedBook}
      confirmColor={'danger'}
      confirmTitle={'Удалить книгу'}
      description={'Вы уверены, что хотеите удалить эту книгу? Это действие необратимо.'}
      color={'danger'}
      actionFn={() => deleteBookMutation.mutate(pickedBook.id)}
    >
      Удалить
    </ButtonWithConfirm>
  );
};
