import { Authors } from '@/widgets/authors/';
import { Books } from '@/widgets/books';

export const HomeTabs = [
  {
    id: 'authors',
    label: 'Авторы',
    content: <Authors />,
  },
  {
    id: 'books',
    label: 'Книги',
    content: <Books />,
  },
];
