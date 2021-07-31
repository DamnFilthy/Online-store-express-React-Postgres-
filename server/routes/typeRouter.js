/*

Type Роутер

*/


// Основной роутер приложения
const Router = require('express');

// Объект роутера 
const router = new Router();

// Импорт контроллера 
const TypeController = require('../controllers/typeController');

// Методы роутера
router.post('/', TypeController.create)
router.get('/', TypeController.getAll)

// Экспортируем объект роутера 
module.exports = router;