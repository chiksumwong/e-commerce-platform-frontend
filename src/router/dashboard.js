import Dashboard from '@/views/Dashboard'
import Users from '@/views/user-management/Users'

export default [
    {
        path: '/dashboard',
        component: Dashboard,
        children: [
            {
                path: '/',
                name: 'users',
                component: Users
              },
        ]
    },
]