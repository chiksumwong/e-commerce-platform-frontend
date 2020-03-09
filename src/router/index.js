import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import Product from '@/views/product/Product'
import Products from '@/views/product/Products'
import Cart from '@/views/product/Cart'
import Payment from '@/views/product/Payment'
import PaymentCompleted from '@/views/product/PaymentCompleted'

import UpdateProduct from '@/components/my-product/UpdateProduct'

import UserRoutes from './user'
import DashboardRoutes from './dashboard'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          name: 'products',
          component: Products
        },
        {
          path: 'product/:id',
          name: 'product',
          component: Product
        },
        {
          path: 'product/update/:id',
          name: 'update_product',
          component: UpdateProduct
        },
        {
          path: 'cart',
          name: 'cart',
          component: Cart
        },
        {
          path: 'payment',
          name: 'payment',
          component: Payment
        },{
          path: 'payment/completed',
          name: 'payment_completed',
          component: PaymentCompleted
        },
        ...UserRoutes,
      ]
    },
    ...DashboardRoutes,

    
    // otherwise redirect to home
    { path: '*', redirect: '/' }
  ]
})

router.beforeEach((to, from, next) => {
  // web pages which don't need to login
  const publicPages = ['home','product','login','register', 'forgot_password', 'reset_password'];

  const authRequired = !publicPages.includes(to.name);
  const loggedIn = localStorage.getItem('token');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
})