/*

Device Роутер

*/


// Основной роутер приложения
const Router = require('express');

// Объект роутера 
const router = new Router();

// Импорт контроллера 
const DeviceController = require('../controllers/deviceController');

// Импортируем middleware для проверки прав доступа
const checkRole = require('../middleware/checkRoleMiddleware')

// Методы роутера
router.post('/', checkRole('ADMIN'), DeviceController.create)
router.get('/', DeviceController.getAll)
router.get('/:id', DeviceController.getOne)
router.delete('/:id', checkRole('ADMIN'), DeviceController.deleteOne)

// Экспортируем объект роутера 
module.exports = router;