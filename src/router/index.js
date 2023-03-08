import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/signup/phone',
      name: 'signupPhone',
      component: () => import('@/views/SignUpPhoneView.vue')
    },
    {
      path: '/signup/mobile',
      name: 'signupMobile',
      component: () => import('@/views/SignUpMobileView.vue')
    },
    {
      path: '/signup/mobile/otp',
      name: 'signupMobileOtp',
      component: () => import('@/views/SignUpMobileOtpView.vue')
    },
    {
      path: '/signup/document',
      name: 'signupDocument',
      component: () => import('@/views/DocumentUploadPage.vue')
    },

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
