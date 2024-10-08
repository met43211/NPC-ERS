import { memo, useEffect, useState } from 'react';
import { Autocomplete, AutocompleteItem } from '@nextui-org/react';
import { useDebounce } from 'react-use';
import { searchAuthors } from '../../api/search-authors';
import { getPickedAuthor } from '../../lib/utils/get-picked-author';
import { getInitialAuthor } from '../../api/get-initial-author';

const BookAutocompleteMemo = ({ setAuthorId, authorId }) => {
  const [author, setAuthor] = useState('');
  const [isLoading, setIsLoading] = useState(!!authorId);
  const [picked, setPicked] = useState('');
  const [list, setList] = useState([]);

  const [, cancel] = useDebounce(
    async () => {
      if (author) {
        if (picked !== author) {
          try {
            const authors = await searchAuthors(author);
            setList(authors);
          } catch (error) {
            setList([]);
            setAuthorId(null);
          }
        }
      } else {
        setList([]);
        setAuthorId(null);
      }
      setIsLoading(false);
    },
    1000,
    [author],
  );

  const fetchInitial = async () => {
    try {
      const initialAuthor = await getInitialAuthor(authorId);
      setList([initialAuthor]);
      const currentName = getPickedAuthor([initialAuthor], +authorId);
      setAuthor(currentName);
      setPicked(currentName);
      cancel();
    } catch (error) {
      setAuthorId(null);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (authorId) {
      fetchInitial();
    }
    cancel();
  }, []);

  return (
    <Autocomplete
      isLoading={isLoading}
      label='Автор'
      inputValue={author}
      onInputChange={(value) => {
        cancel();
        setIsLoading(true);
        setAuthor(value);
      }}
      onSelectionChange={(key) => {
        const pickedAuthor = getPickedAuthor(list, +key);
        setAuthor(pickedAuthor);
        setPicked(pickedAuthor);
        setAuthorId(+key);
      }}
      selectedKey={authorId ? authorId.toString() : ''}
    >
      {list.map((variant) => (
        <AutocompleteItem
          key={variant.id}
        >{`${variant.name} ${variant.patronymic ? variant.patronymic : ''} ${variant.second_name}`}</AutocompleteItem>
      ))}
    </Autocomplete>
  );
};
export const BookAutocomplete = memo(BookAutocompleteMemo);
