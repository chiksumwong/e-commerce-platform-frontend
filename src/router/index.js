import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import Product from '@/views/product/Product'
import Cart from '@/views/product/Cart'

import UserRoutes from './user'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/product/:id',
      name: 'product',
      component: Product
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    ...UserRoutes,

    
    // otherwise redirect to home
    { path: '*', redirect: '/' }
  ]
})

router.beforeEach((to, from, next) => {
  // web pages which don't need to login
  const publicPages = ['home','product','login','register'];

  const authRequired = !publicPages.includes(to.name);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
})