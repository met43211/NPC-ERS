export const getPickedAuthor = (list, key) => {
  const pickedAuthor = list.find(({ id }) => id === +key);

  return pickedAuthor
    ? `${pickedAuthor.name} ${pickedAuthor.patronymic ? pickedAuthor.patronymic : ''} ${pickedAuthor.second_name}`
    : '';
};
