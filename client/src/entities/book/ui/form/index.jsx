import { Button, Input, Textarea } from '@nextui-org/react';
import { useState } from 'react';
import { BookAutocomplete } from './book-autocomplete';
import { BookSchema } from '../../model/book.schema';
import * as Yup from 'yup';

import { useMutateBook } from '../../lib/hooks/use-mutate-book';

export const BookForm = ({
  author_id,
  name: initialName,
  pages_amount,
  description: initialDescription,
  year: initialYear,
  rating: initialRating,
  id,
}) => {
  const [authorId, setAuthorId] = useState(author_id || null);
  const [name, setName] = useState(initialName || '');
  const [pagesAmount, setPagesAmount] = useState(pages_amount);
  const [description, setDescription] = useState(initialDescription || '');
  const [year, setYear] = useState(initialYear);
  const [rating, setRating] = useState(initialRating);
  const [error, setError] = useState('');

  const createBookMutation = useMutateBook(setError, id);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const book = {
      name,
      year,
      rating,
      description,
      author_id: authorId,
      pages_amount: pagesAmount,
    };
    try {
      await BookSchema.validate(book, { abortEarly: false });
      createBookMutation.mutate(book);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        setError(err.errors[0]);
      }
    }
  };

  return (
    <form className='flex flex-col gap-4 pb-4' onSubmit={handleSubmit}>
      <Input label='Название' onChange={(e) => setName(e.target.value)} value={name} />
      <Input
        label='Кол-во страниц (необязательно)'
        type='number'
        onChange={(e) => setPagesAmount(+e.target.value)}
        value={pagesAmount}
      />
      <Textarea
        label='Описание'
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <Input label='Год' type='number' onChange={(e) => setYear(+e.target.value)} value={year} />
      <Input
        label='Рейтинг (от 1 до 5)'
        type='number'
        value={rating}
        onChange={(e) => {
          const value = +e.target.value;
          if (value >= 1 && value <= 5) {
            setRating(e.target.value);
          }
          if (!value) {
            setRating('');
          }
        }}
      />
      <BookAutocomplete setAuthorId={setAuthorId} authorId={authorId} />
      <Button className='w-full font-medium' color='success' type='submit' variant='shadow'>
        Сохранить
      </Button>
      <p className='text-danger text-center -mt-2 text-sm text-regular'>{error}</p>
    </form>
  );
};
