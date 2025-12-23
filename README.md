Опис проекту
Цей репозиторій містить backend-частину веб-додатку, побудованого на Node.js з використанням Express.js. Backend обробляє API-запити, взаємодіє з базою даних MongoDB (для зберігання повідомлень з форми зворотного зв'язку) та забезпечує валідацію даних. Він відокремлений від frontend для кращої масштабованості та незалежного розвитку.
Основні функції:

API-ендпоінт для збереження повідомлень з форми (POST /api/messages).
Підключення до MongoDB з кешуванням з'єднання.
Валідація даних (ім'я, email, телефон, повідомлення).
Обробка помилок та CORS для запитів з frontend.

Вимоги

Node.js (версія >= 18, рекомендовано 20+).
MongoDB (локальна або хмарна, наприклад, MongoDB Atlas).
Залежності: Express, Mongoose, Dotenv, CORS.

Установка

Клонуйте репозиторій:textgit clone <URL_репозиторію>
cd backend
Встановіть залежності:textnpm install
Створіть файл .env у корені папки та додайте змінні середовища:textMONGODB_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority
PORT=5000  # Опціонально, порт сервера
Замініть <user>, <password>, <cluster> та <dbname> на ваші дані з MongoDB.


Запуск

Для розробки: node index.js (сервер запуститься на порту 5000 або з .env).
Для production: Рекомендовано використовувати PM2 або Docker для стабільності: pm2 start index.js.

Перевірте запуск: Відкрийте http://localhost:5000 у браузері (має повернути помилку 404, але сервер живий).
API Ендпоінти

POST /api/messages
Body: JSON з полями { name: string, email: string, phone: string (+38xxxxxxxxxx), message: string }.
Валідація: Обов'язкові поля, phone починається з '+38' та має 13 символів.
Відповідь: 201 { success: true } при успіху, 400/500 з помилкою.


Структура папок

index.js: Головний серверний файл.
src/dbConnect.js: Підключення до БД.
models/Message.js: Модель Mongoose для повідомлень.
.env: Змінні середовища (не комітьте до git!).

Деплой

Розгорніть на Heroku, Render або VPS.
Налаштуйте MongoDB Atlas для хмарної БД.
Додайте аутентифікацію (JWT) для безпеки в production.

Тестування

Використовуйте Postman для тестування POST-запитів.
Перевірте підключення до БД: Додайте console.log('Connected to DB') після dbConnect().

Якщо проблеми: Перевірте логи в консолі або додайте більше logging.