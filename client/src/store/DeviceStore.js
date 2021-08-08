import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
    constructor() {
        this._types = [
            { id: 1, name: 'холодильники' },
            { id: 2, name: 'смартфоны' }
        ];
        this._brands = [
            { id: 1, name: 'самсунг' },
            { id: 2, name: 'apple' }
        ];
        this._devices = [
            { id: 1, name: 'iphone 4', price: 25000, rating: 5, img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-graphite-hero?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1604021660000' },
            { id: 2, name: 'iphone 6', price: 35000, rating: 5, img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-xr-yellow-select-201809?wid=441&hei=529&fmt=jpeg&qlt=95&.v=1551226036826' },
            { id: 3, name: 'iphone X', price: 45000, rating: 5, img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone11-red-select-2019_GEO_EMEA?wid=834&hei=1000&fmt=jpeg&qlt=95&.v=1567021767076' },
            { id: 4, name: 'Samsung galaxy', price: 55000, rating: 5, img: 'https://appleinsider.ru/wp-content/uploads/2021/07/iphonese_3rd_gen-750x418.jpg' },
        ];
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    get types() {
        return this._types;
    }
    get brands() {
        return this._brands;
    }
    get devices() {
        return this._devices;
    }
}