// Все маршруты приложения 


import Basket from './pages/Basket'
import Admin from './pages/Admin'
import Shop from './pages/Shop'
import Auth from './pages/Auth'
import Device from './pages/DevicePage'
import { ADMIN_ROUTE, BASKET_ROUTE } from './utils/consts'
import { SHOP_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, DEVICE_ROUTE } from './utils/consts'

// Для авторизованного пользователя 
export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
]


// Для любого пользователя 
export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: Device
    },
]