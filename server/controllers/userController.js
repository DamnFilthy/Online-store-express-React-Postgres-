const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const { User, Basket } = require('../models/models')

const generateJwt = (id, email, role) => {
    return jwt.sign(
        { id, email, role },
        process.env.SECRET_KEY,
        { expiresIn: '24h' }
    )
}

class UserController {
    async registration(request, response, next) {
        const { name, email, password, role } = request.body

        // Проверка указан ли email и пароль
        if (!email || !password) {
            return next(ApiError.badRequest('Некорректный email или пароль'))
        }
        const candidate = await User.findOne({ where: { email } })

        // Проверка зарегистрирован ли email
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }

        // Хэширование пароля
        const hashPassword = await bcrypt.hash(password, 5)

        // Создаем юзера
        const user = await User.create({ name, email, role, password: hashPassword })

        // Создаем корзину для пользователя
        const basket = await Basket.create({ userId: user.id })

        // Генерация JWT
        const token = generateJwt(user.id, user.email, user.role)
        return response.json({ token })
    }

    async login(request, response, next) {
        const { email, password } = request.body

        // Проверка существования пользователя
        const user = await User.findOne({ where: { email } })
        if (!user) {
            return next(ApiError.internal('Пользователь с таким email не найден'))
        }

        // Проверка введенного пароля и пароля в БД
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Неверный пароль'))
        }

        // Генерируем токен
        const token = generateJwt(user.id, user.email, user.role)

        // На клиент возвращаем токен
        return response.json({ token })
    }

    async checkAuth(request, response, next) {
        const token = generateJwt(request.user.id, request.user.email)
        return response.json({ token })
    }
}

module.exports = new UserController()