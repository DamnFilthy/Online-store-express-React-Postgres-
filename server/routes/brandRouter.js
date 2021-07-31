/*

Brand Роутер

*/


// Основной роутер приложения
const Router = require('express');

// Объект роутера 
const router = new Router();

// Импорт контроллера 
const BrandController = require('../controllers/brandController');

// Методы роутера
router.post('/', BrandController.create)
router.get('/', BrandController.getAll)

// Экспортируем объект роутера 
module.exports = router;