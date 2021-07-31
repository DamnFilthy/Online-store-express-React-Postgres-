const { Device } = require('../models/models')
const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')

class DeviceController {
    async create(request, response, next) {
        try {
            const { name, price, brandId, typeId } = request.body
            const { img } = request.files
            let fileName = uuid.v4() + '.jpg'
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const device = await Device.create({ name, price, brandId, typeId, img: fileName })
            return response.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(request, response) {
        const { brandId, typeId } = request.query
        let devices;

        if (!brandId && !typeId) {
            devices = await Device.findAll()
        }

        if (brandId && !typeId) {
            devices = await Device.findAll({ where: { brandId } })
        }

        if (!brandId && typeId) {
            devices = await Device.findAll({ where: { typeId } })
        }

        if (brandId && typeId) {
            devices = await Device.findAll({ where: { brandId, typeId } })
        }

        return response.json(devices)
    }

    async getOne(request, response) {

    }
}

module.exports = new DeviceController()