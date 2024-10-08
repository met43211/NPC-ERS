import { useMutation } from '@tanstack/react-query';
import axios from '@/shared/lib/axios';
import { useNavigate } from 'react-router-dom';

export const useDeleteBook = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (id) => {
      await axios.delete(`/books/${id}`);
    },
    onSuccess: () => {
      navigate(0);
    },
    onError: () => {
      alert('Ошибка удаления книги');
    },
  });
};
