/* 

routes/index.js - связующее звено для всех маршрутов

*/

// Основной роутер приложения
const Router = require('express')

// Объект роутера 
const router = new Router()

// Импортируем все роутеры 
const deviceRouter = require('./deviceRouter')
const userRouter = require('./userRouter')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')

// Используем подроутеры 
router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)

// Экспортируем объект роутера 
module.exports = router;
