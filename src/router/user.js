import Login from '@/views/user/Login'
import Register from '@/views/user/Register'

import MyOrder from '@/views/user/MyOrder'
import MyProduct from '@/views/user/MyProduct'

export default [
    {
        path: 'login',
        name: 'login',
        component: Login
    },
    {
        path: 'register',
        name: 'register',
        component: Register
    },
    {
        path: 'myorder',
        name: 'myorder',
        component: MyOrder
    },
    {
        path: 'myproduct',
        name: 'myproduct',
        component: MyProduct
    },
]