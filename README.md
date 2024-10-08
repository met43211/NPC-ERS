# NPC-ERS

Тестовое задание для компании НПЦ ИРС

### Инструкция по локальному запуску

1) Склонируйте репозиторий
```bash
git clone https://github.com/met43211/NPC-ERS.git
```

2) Перейдите в директорию проекта
```bash
cd NPC_ERS
```

3) Установите зависимости
```bash
npm run deps:install
```

4) Перейдите у себя на компютере в папку с postgres(если он не установлен, установите) по пути [version]/bin, отеройте терминал и пропишите команду снизу и введите пароль
```bash
psql -U [your_postgres_username]
```

5) Дальше следуйте скриптам из server/db/init-db.sql

6) После этого вам необходимо создать env файл для клиента
```bash
VITE_API_URL="http://localhost:[your_server_port(default - 400)]/api"
```
7) И для сервера
```bash
PORT = 4000
DB_HOST = "localhost"
DB_PORT = 5432  
DB_NAME = "npc_ers"
DB_USER = [your_postgres_username]    
DB_PASS = [your_postgres_password]  
CURRENT_URL = "http://localhost:4000/"
```

8) Запустите проект из корневой папки с помощью команды:
```bash
npm run start:dev
```

- Стек: JavaScript, React, React-Query, Tailwind CSS, Express, Postgres

