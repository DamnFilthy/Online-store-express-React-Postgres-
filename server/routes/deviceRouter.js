/*

Device Роутер

*/


// Основной роутер приложения
const Router = require('express');

// Объект роутера 
const router = new Router();

// Импорт контроллера 
const DeviceController = require('../controllers/deviceController');

// Методы роутера
router.post('/', DeviceController.create)
router.get('/', DeviceController.getAll)
router.get('/:id', DeviceController.getOne)

// Экспортируем объект роутера 
module.exports = router;