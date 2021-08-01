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

// Импортируем middleware для проверки прав доступа
const checkRole = require('../middleware/checkRoleMiddleware')

// Методы роутера
router.post('/registration', UserController.registration)
router.post('/login', UserController.login)
router.get('/auth', authMiddleware, UserController.checkAuth)

router.get('/:id', checkRole('ADMIN'), UserController.getOne)
router.get('/all', checkRole('ADMIN'), UserController.getAllUsers)

router.delete('/:id', checkRole('ADMIN'), UserController.deleteOne)
// Экспортируем объект роутера 
module.exports = router;