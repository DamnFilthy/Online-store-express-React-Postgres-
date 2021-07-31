/*

db.js - файл для работы с базой данных 

*/

// Импортируем класс Sequelize
const { Sequelize } = require('sequelize')

// Экспортируем объект из класса Sequelize
// В конструкторе передаем конфигурацию
module.exports = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
    }
)