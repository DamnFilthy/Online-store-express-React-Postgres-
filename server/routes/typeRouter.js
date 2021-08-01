/*

Type Роутер

*/


// Основной роутер приложения
const Router = require('express');

// Объект роутера 
const router = new Router();

// Импорт контроллера 
const TypeController = require('../controllers/typeController');

// Импортируем middleware для проверки прав доступа
const checkRole = require('../middleware/checkRoleMiddleware')

// Методы роутера
router.post('/', checkRole('ADMIN'), TypeController.create)
router.get('/', TypeController.getAll)

// Экспортируем объект роутера 
module.exports = router;