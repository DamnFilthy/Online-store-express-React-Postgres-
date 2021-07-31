const { Brand } = require('../models/models')
const ApiError = require('../error/ApiError')

class BrandController {
    async create(request, response) {
        const { name } = request.body
        const brand = await Brand.create({ name })
        return response.json(brand)
    }

    async getAll(request, response) {
        const brand = await Brand.findAll()
        return response.json(brand)
    }
}

module.exports = new BrandController()