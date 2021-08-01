const { Type } = require('../models/models')
const ApiError = require('../error/ApiError')

class TypeController {
    async create(request, response) {
        const { name } = request.body
        const type = await Type.create({ name })
        return response.json(type)
    }


    async getAll(request, response) {
        const type = await Type.findAll()
        return response.json(type)
    }

    async getOne(request, response) {
        const { id } = request.params
        const type = await Type.findOne({ where: { id } })
        return response.json(type)
    }

    async deleteOne(request, response) {
        const { id } = request.params
        const type = await Type.findOne({ where: { id } })
        try {
            await type.destroy()
            return response.json({ type, message: 'was deleted' })
        } catch (e) {
            return response.json(e)
        }
    }
}

module.exports = new TypeController()