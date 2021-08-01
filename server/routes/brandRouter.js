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
router.get('/:id', BrandController.getOne)
router.delete('/:id', checkRole('ADMIN'), BrandController.deleteOne)

// Экспортируем объект роутера 
module.exports = router;