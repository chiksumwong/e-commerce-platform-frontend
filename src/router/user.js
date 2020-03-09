import Login from '@/views/user/Login'
import Register from '@/views/user/Register'
import ForgotPassword from '@/views/user/ForgotPassword'
import ResetPassword from '@/components/profile/ResetPassword'

import Profile from '@/views/user/Profile'
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
        path: 'forgotpassword',
        name: 'forgot_password',
        component: ForgotPassword
    },
    {
        path: 'resetpassword',
        name: 'reset_password',
        component: ResetPassword
    },
    {
        path: 'profile',
        name: 'profile',
        component: Profile
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