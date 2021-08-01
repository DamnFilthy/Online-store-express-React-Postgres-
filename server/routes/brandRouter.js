/*

Brand Роутер

*/


// Основной роутер приложения
const Router = require('express');

// Объект роутера 
const router = new Router();

// Импорт контроллера 
const BrandController = require('../controllers/brandController');

// Импортируем middleware для проверки прав доступа
const checkRole = require('../middleware/checkRoleMiddleware')

// Методы роутера
router.post('/', checkRole('ADMIN'), BrandController.create)
router.get('/', BrandController.getAll)

// Экспортируем объект роутера 
module.exports = router;