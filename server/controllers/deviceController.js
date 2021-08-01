const { Device, Characteristic } = require('../models/models')
const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')
const { info } = require('console')

class DeviceController {
    async create(request, response, next) {
        try {
            const { name, price, brandId, typeId, characteristic } = request.body
            const { img } = request.files
            let fileName = uuid.v4() + '.jpg'
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            if (characteristic) {
                characteristic = JSON.parse(characteristic)
                info.forEach(i =>
                    Characteristic.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id
                    })
                )
            }

            const device = await Device.create({ name, price, brandId, typeId, img: fileName })
            return response.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(request, response) {
        let { brandId, typeId, limit, page } = request.query
        page = page || 1
        limit = limit || 10
        let offset = page * limit - limit
        let devices;

        if (!brandId && !typeId) {
            devices = await Device.findAndCountAll({ limit, offset })
        }

        if (brandId && !typeId) {
            devices = await Device.findAndCountAll({ where: { brandId }, limit, offset })
        }

        if (!brandId && typeId) {
            devices = await Device.findAndCountAll({ where: { typeId }, limit, offset })
        }

        if (brandId && typeId) {
            devices = await Device.findAndCountAll({ where: { brandId, typeId }, limit, offset })
        }

        return response.json(devices)
    }

    async getOne(request, response) {
        const { id } = request.params
        const device = await Device.findOne(
            {
                where: { id },
                include: [{ model: Characteristic }]
            },
        )
        return response.json(device)
    }
}

module.exports = new DeviceController()