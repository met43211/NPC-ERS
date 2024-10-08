-- Создание базы данных
CREATE DATABASE npc_ers;

--Или

CREATE DATABASE npc_ers 
WITH 
OWNER postgres
ENCODING 'UTF8' 
LC_COLLATE='en_US.UTF-8' 
LC_CTYPE='en_US.UTF-8' 
TEMPLATE=template0;

-- Подключение к базе данных
\c npc_ers;

-- Создание таблицы авторов
CREATE TABLE authors(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL, -- Имя автора
    second_name VARCHAR(255) NOT NULL, -- Фамилия автора
    patronymic VARCHAR(255), -- Отчество (может быть NULL)
    date_of_birth DATE NOT NULL, -- Дата рождения
    date_of_death DATE, -- Дата смерти (может быть NULL)
    country VARCHAR(255) NOT NULL, -- Страна
    image_url VARCHAR(255) -- Ссылка на изображение автора (может быть NULL)
);

-- Создание таблицы книг
CREATE TABLE books(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL, -- Название книги
    pages_amount INTEGER, -- Количество страниц (может быть NULL)
    description VARCHAR(255) NOT NULL, -- Описание книги
    year INTEGER NOT NULL, -- Год выпуска книги
    rating INTEGER CHECK (rating >= 1 AND rating <= 5) NOT NULL, -- Рейтинг книги (от 1 до 5)
    author_id INTEGER NOT NULL, -- Внешний ключ на таблицу авторов
    FOREIGN KEY (author_id) REFERENCES authors (id) ON DELETE CASCADE -- При удалении автора удаляются его книги
);

-- Вставка начальных данных в таблицу authors (Вставьте несколько раз, чтобы посмотреть работу infinitescroll в таблице)
INSERT INTO authors (name, second_name, patronymic, date_of_birth, date_of_death, country, image_url)
VALUES 
('Лев', 'Толстой', 'Николаевич', '1828-09-09', '1910-11-20', 'Россия', 'https://www.culture.ru/_next/image?url=https%3A%2F%2Fcdn.culture.ru%2Fimages%2F76f6eaaa-97b1-5cc9-8955-b9099dc5bbb2%2Fc_fill%2Cg_center%2Fava-jpg.webp&w=3840&q=75'),
('Федор', 'Достоевский', 'Михайлович', '1821-11-11', '1881-02-09', 'Россия', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC07PJiFZBsOEjXC91pLuSZk5A1Wmjja-y4Q&s'),
('Габриэль', 'Гарсиа', 'Маркес', '1927-03-06', '2014-04-17', 'Колумбия', 'https://yasnoeutro.ru/wp-content/uploads/2015/04/Gabriel-Garc%C3%ADa-M%C3%A1rquez.jpg');

-- Вставка начальных данных в таблицу books
INSERT INTO books (name, pages_amount, description, year, rating, author_id)
VALUES 
('Война и мир', 1225, 'Исторический роман Льва Толстого', 1869, 5, 1),
('Анна Каренина', 864, 'Трагический роман Льва Толстого', 1877, 5, 1),
('Преступление и наказание', 671, 'Психологический роман Федора Достоевского', 1866, 5, 2),
('Сто лет одиночества', 417, 'Магический реалистический роман Габриэля Гарсиа Маркеса', 1967, 5, 3);
