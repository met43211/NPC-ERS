import { AddBook } from '@/features/book/add-book';
import { EditBook } from '@/features/book/edit-book';
import { DeleteBook } from '@/features/book/delete-book';

export const ActionButtons = (props) => {
  return (
    <div className='w-full h-fit flex gap-2 items-center'>
      <AddBook />
      <EditBook {...props} />
      <DeleteBook {...props} />
      <p className='opacity-50 max-w-60 leading-4 ml-2'>
        Чтобы изменить или удалить книгу выберите ее в таблице
      </p>
    </div>
  );
};
