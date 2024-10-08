export const ImageLink = (props) => {
  if (!props.value) {
    return <p className='opacity-50'>Отсутствует</p>;
  }
  return (
    <a href={props.value} target='_blank' className='text-primary'>
      Посмотреть
    </a>
  );
};
