import * as Yup from 'yup';

export const BookSchema = Yup.object().shape({
  name: Yup.string()
    .required('Введите название')
    .min(3, 'Слишком короткое название')
    .max(20, 'Слишком длинное название'),
  pagesAmount: Yup.number().optional(),
  description: Yup.string()
    .required('Введите описание')
    .min(3, 'Слишком короткое описание')
    .max(100, 'Слишком длинное описание'),
  year: Yup.number().required('Введите год'),
  rating: Yup.number('Введите рейтинг').required('Введите рейтинг'),
  author_id: Yup.number('Выберите автора').required('Выберите автора'),
});
