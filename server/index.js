/*

Основной файл для работы сервера

*/

// Импорт config из модуля dotenv - для считывания из .env
require('dotenv').config()

// Импорт Express
const express = require('express');

// Импорт объекта для работы с БД
const sequelize = require('./db')

// Импорт моделей
const models = require('./models/models')

// Импорт основного роутера
const router = require('./routes/router')

// Импорт модуля для отправки запросов
const cors = require('cors')

// Импорт middleware для обработки ошибок
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

// Создание порта
const PORT = process.env.PORT

// Создание приложения
const app = express()

/* 
app.use(промежуточное ПО) вызывается каждый раз, 
когда запрос отправляется на сервер. используется для 
монтирования функции промежуточного программного обеспечения 
или монтирования по указанному пути, функция промежуточного 
программного обеспечения выполняется, когда соответствует 
базовый путь.
*/

app.use(cors())
// Для парсинга json 
app.use(express.json())
// Обработчик
app.use('/api', router)
// Обработчик ошибок
app.use(errorHandler)


// Функция для подключения к БД
const start = async () => {
    try {
        // Функция authenticate - подключение к БД
        await sequelize.authenticate()
        // Сверка состояния БД со схемой данных
        await sequelize.sync()
        // Слушаем порт и отдаем колбэк функцию
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}
start()