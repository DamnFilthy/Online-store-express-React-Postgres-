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

    async getOne(request, response) {
        const { id } = request.params
        const brand = await Brand.findOne({ where: { id } })
        return response.json(brand)
    }

    async deleteOne(request, response) {
        const { id } = request.params
        const brand = await Brand.findOne({ where: { id } })
        try {
            await brand.destroy()
            return response.json({ brand, message: "was deleted" })
        } catch (e) {
            return response.json(e)
        }
    }
}

module.exports = new BrandController()