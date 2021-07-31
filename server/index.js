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

// Создание порта
const PORT = process.env.PORT

// Создание приложения
const app = express()

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