# Game Store Backend

Этот проект представляет собой бэкенд для интернет-магазина техники game-store. Разработанный с использованием TypeScript и фреймворка NestJS, это приложение обеспечивает функциональность для управления продуктами, категориями, поиском, а также включает в себя систему авторизации и админ панель для менеджеров магазина.

## Основные технологии

- **NestJS**
- **TypeScript**
- **MongoDB**
- **Swagger**

## Функциональность

- **Документация API**: Используется Swagger для создания подробной документации по API
- **Авторизация с JWT токенами**: Реализована система аутентификации с использованием JWT
- **Управление продуктами и категориями**: Методы API позволяют получать продукты по категориям, а также выполнять поиск товаров.
- **Административная панель**: Создан интерфейс для управления продуктами и пользователями, предназначенный для менеджеров магазина.
- **Развертывание на VPS сервере**: Проект был успешно развернут на VPS сервере.

## Установка

1. Клонируйте репозиторий:

   ```bash
   git clone https://github.com/ihopeyoucanfly/gameStore-backend.git

2. Установите зависимости:

   ```bash
   npm install
   
3. Настройте файл конфигурации (.env) с параметрами подключения к MongoDB и настройками JWT токенов.

4. Запустите бэкенд:
   ```bash
      npm run start:dev

5. Документация API
После успешного запуска приложения, документацию API можно посмотреть по адресу: http://localhost:3000/api-docs
