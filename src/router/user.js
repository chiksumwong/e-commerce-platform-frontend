import Login from '@/views/user/Login'
import Register from '@/views/user/Register'

export default [
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
]