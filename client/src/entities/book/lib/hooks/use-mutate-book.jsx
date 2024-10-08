import { useMutation } from '@tanstack/react-query';
import axios from '@/shared/lib/axios';
import { useNavigate } from 'react-router-dom';

export const useMutateBook = (setError, id) => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (body) => {
      if (id) {
        await axios.patch(`/books/${id}`, body);
      } else {
        await axios.post('/books', body);
      }
    },
    onSuccess: () => {
      navigate(0);
    },
    onError: () => {
      setError('Ошибка запроса. Попробуйте позже');
    },
  });
};
