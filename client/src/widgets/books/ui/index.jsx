import { useState } from 'react';
import { ActionButtons } from './action-buttons';
import { BooksTable } from './table';

export const Books = () => {
  const [pickedBook, setPickedBook] = useState(null);
  return (
    <div className='w-full h-full flex flex-col gap-4'>
      <ActionButtons pickedBook={pickedBook} />
      <BooksTable setPickedBook={setPickedBook} />
    </div>
  );
};
