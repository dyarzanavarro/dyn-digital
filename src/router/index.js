import Vue from 'vue'
import Router from 'vue-router'
import Head from 'vue-head'
import Home from '@/views/Home'
import CheckLogin from '@/views/CheckLogin'
import { isNil } from 'lodash'
import store from '@/store'

Vue.use(Router)

/* If you don't know about VueHead, please refer to https://github.com/ktquez/vue-head */

Vue.use(Head, {
  complement: process.env.VUE_APP_TITLE
})

/* If you don't know about VueRouter, please refer to https://router.vuejs.org/ */

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        authNotRequired: true
      }
    },
    {
      path: '/check-login',
      name: 'check-login',
      component: CheckLogin,
      meta: {
        authNotRequired: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () =>
        import(
          /* webpackChunkName: "client-chunk-login" */ '@/views/Login.vue'
        ),
      meta: {
        authNotRequired: true
      }
    },
    {
      path: '/products',
      name: 'products',
      meta: {
        authNotRequired: true
      },
      component: () =>
        import(
          /* webpackChunkName: "client-chunk-products" */ '@/views/Products.vue'
        )
    },
    {
      path: '/products/:id',
      name: 'product',
      props: true,

      component: () =>
        import(
          /* webpackChunkName: "client-chunk-product-details" */ '@/views/Product.vue'
        )
    },
    { path: '*', redirect: '/home' },

    {
      path: '/playground',
      name: 'playground',
      props: true,
      meta: {
        authNotRequired: true
      },
      component: () =>
        import(
          /* webpackChunkName: "client-chunk-product-details" */ '@/views/Playground.vue'
        )
    },
    { path: '*', redirect: '/home' },

    {
      path: '/Projects',
      name: 'projects',
      props: true,
      meta: {
        authNotRequired: true
      },
      component: () =>
        import(
          /* webpackChunkName: "client-chunk-product-details" */ '@/views/Projects.vue'
        )
    },
    {
      path: '/AFrameScene',
      name: 'aFrameScene',
      props: true,
      meta: {
        authNotRequired: true
      },
      component: () =>
        import(
          /* webpackChunkName: "client-chunk-product-details" */ '@/views/AframeScene.vue'
        )
    },

    {
      path: '/ThreeJSScene',
      name: 'threeJSScene',
      props: true,
      meta: {
        authNotRequired: true,
        hideFooter: true
      },
      component: () =>
        import(
          /* webpackChunkName: "client-chunk-product-details" */ '@/views/ThreeJSScene.vue'
        )
    },

    {
      path: '/Legal',
      name: 'legal',
      meta: {
        authNotRequired: true
      },
      component: () =>
        import(
          /* webpackChunkName: "client-chunk-product-details" */ '@/views/Legal.vue'
        )
    },
    {
      path: '/HouseShowcase',
      name: 'houseshowcase',
      meta: {
        authNotRequired: true
      },
      component: () =>
        import(
          /* webpackChunkName: "client-chunk-product-details" */ '@/views/HouseShowcase.vue'
        )
    }
  ]
})

/**
 * Handle user redirections
 */
// eslint-disable-next-line consistent-return
router.beforeEach((to, from, next) => {
  if (
    !(to.meta && to.meta.authNotRequired) &&
    isNil(store.state.authentication.user)
  ) {
    const path =
      store.state.authentication.user === null ? '/login' : '/check-login'
    return next(`${path}?redirectUrl=${to.path}`)
  }
  next()
})

export default router
