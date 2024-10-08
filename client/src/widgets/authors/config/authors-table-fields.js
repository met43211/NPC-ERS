import { ImageLink } from "@/shared/ui/image-link";

export const AuthorsTableField = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Имя' },
    { field: 'second_name', headerName: 'Фамилия' },
    { field: 'patronymic', headerName: 'Отчество' },
    { field: 'date_of_birth', headerName: 'Дата рождения' },
    { field: 'date_of_death', headerName: 'Дата смерти' },
    { field: 'country', headerName: 'Страна' },
    { field: 'image_url', headerName: 'Изображение', cellRenderer: ImageLink },
];
