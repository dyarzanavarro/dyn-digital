import Vue from 'vue'
import Router from 'vue-router'
import Head from 'vue-head'
import Home from '@/views/Home'

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
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Home Page - danielyarzanavarro',
        metaTags: [
          {
            name: 'description',
            content: 'The home page of danielyarzanavarro.'
          },
          {
            property: 'og:description',
            content: 'The home page of our danielyarzanavarro.'
          }
        ]
      }
    },

    {
      path: '/progress',
      name: 'progress',

      component: () =>
        import(
          /* webpackChunkName: "client-chunk-products" */ '@/views/Progress.vue'
        )
    },

    {
      path: '/playground',
      name: 'playground',
      props: true,

      component: () =>
        import(
          /* webpackChunkName: "client-chunk-product-details" */ '@/views/Playground.vue'
        )
    },

    {
      path: '/projects',
      name: 'projects',
      props: true,

      component: () =>
        import(
          /* webpackChunkName: "client-chunk-product-details" */ '@/views/Projects.vue'
        )
    },
    {
      path: '/THREEDPortfolio',
      name: 'THREEDPortfolio',
      props: true,

      component: () =>
        import(
          /* webpackChunkName: "client-chunk-product-details" */ '@/views/THREEDPortfolio.vue'
        )
    },

    {
      path: '/ThreeJSScene',
      name: 'threeJSScene',
      props: true,
      meta: {
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

      component: () =>
        import(
          /* webpackChunkName: "client-chunk-product-details" */ '@/views/Legal.vue'
        )
    },
    {
      path: '/HouseShowcase',
      name: 'houseshowcase',

      component: () =>
        import(
          /* webpackChunkName: "client-chunk-product-details" */ '@/views/HouseShowcase.vue'
        )
    },
    {
      path: '/WebXR',
      name: 'webXR',

      component: () =>
        import(
          /* webpackChunkName: "client-chunk-product-details" */ '@/views/WebXR.vue'
        )
    }
  ]
})

/**
 * Handle user redirections
 */
// eslint-disable-next-line consistent-return

export default router
