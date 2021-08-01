/*

User Роутер

*/


// Основной роутер приложения
const Router = require('express');

// Импорт контроллера userController
const UserController = require('../controllers/userController')

// Объект роутера 
const router = new Router();

// Импортируем middleware для авторизации
const authMiddleware = require('../middleware/authMiddleware');

// Методы роутера
router.post('/registration', UserController.registration)
router.post('/login', UserController.login)
router.get('/auth', authMiddleware, UserController.checkAuth)

// Экспортируем объект роутера 
module.exports = router;