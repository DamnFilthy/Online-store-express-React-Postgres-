/*

Описываем модели базы данных

*/

// Импортируем объект sequelize для работы с БД
const sequelize = require('../db')

// Импортируем класс DataTypes для работы с полями БД
const { DataTypes } = require('sequelize')

// Описываем модель юзера
const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: "USER"
    }
})

// Описываем модель корзины
const Basket = sequelize.define('Basket', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
})

// Описываем модель товаров в корзине
const BasketDevices = sequelize.define('BasketDevices', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
})

// Описываем модель устройства
const Device = sequelize.define('Device', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    rating: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    img: {
        type: DataTypes.STRING,
        allowNull: false
    },
    brandId: {
        type: DataTypes.INTEGER
    },
    typeId: {
        type: DataTypes.INTEGER
    }
})

// Описываем модель характеристик девайса
const Characteristic = sequelize.define('Characteristic', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

// Промежуточная таблица для связи Девайса и Характеристик
const DeviceCharacteristic = sequelize.define('DeviceCharacteristic', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    deviceId: {
        type: DataTypes.INTEGER
    },
    characteristicId: {
        type: DataTypes.INTEGER
    }
})

// Описываем тип устройства
const Type = sequelize.define('Type', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
})

// Описываем брэнд 
const Brand = sequelize.define('Brand', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
})

// Промежуточная таблица для связи Типа и Брэнда
const TypeBrand = sequelize.define('TypeBrand', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    typeId: {
        type: DataTypes.INTEGER
    },
    brandId: {
        type: DataTypes.INTEGER
    }
})

// Описываем модель рейтинга
const Rating = sequelize.define('Rating', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    rate: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    }
})

/* 

Связи созданных таблиц

*/

// Связь пользователя с корзиной (1 к 1)
User.hasOne(Basket)
Basket.belongsTo(User)

// Связь пользователя с ретингом (1 ко многим)
User.hasMany(Rating)
Rating.belongsTo(User)

// Связь корзины с девайсами в ней (1 ко многим)
Basket.hasMany(BasketDevices)
BasketDevices.belongsTo(Basket)

// Связь для Девайса и рейтинга (1 ко многим)
Device.hasMany(Rating)
Rating.belongsTo(Device)

// Связь Device и BasketDevices (1 ко многим)
Device.hasMany(BasketDevices)
BasketDevices.belongsTo(Device)

/* 

Тип связей многие ко многим

*/

// Связываем таблицу Dvice и таблицу Characteristic через промежуточную DeviceCharacteristic
Device.belongsToMany(Characteristic, { through: DeviceCharacteristic })
Characteristic.belongsToMany(Device, { through: DeviceCharacteristic })

// Связываем таблицу Type с таблицой Brand через таблицу TypeBrand
Type.belongsToMany(Brand, { through: TypeBrand })
Brand.belongsToMany(Type, { through: TypeBrand })

// Экспортируем модели
module.exports = {
    User,
    Basket,
    BasketDevices,
    Device,
    Characteristic,
    DeviceCharacteristic,
    Type,
    Brand,
    TypeBrand,
    Rating
}