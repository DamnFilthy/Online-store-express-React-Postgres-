/*

User Роутер

*/


// Основной роутер приложения
const Router = require('express');

// Импорт контроллера userController
const UserController = require('../controllers/userController')

// Объект роутера 
const router = new Router();

// Методы роутера
router.post('/registration', UserController.registration)
router.post('/login', UserController.login)
router.get('/auth', UserController.checkAuth)

// Экспортируем объект роутера 
module.exports = router;