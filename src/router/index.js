import Vue from 'vue'
import VueRouter from 'vue-router'

import portalLayout from '../layout/portalLayout.vue'
import companyLayout from '../layout/cmpnyLayout.vue'
import userLayout from '../layout/userLayout.vue'
import authLayout from '../layout/authlayout.vue'



Vue.use(VueRouter)

const routes = [


  //ADMIN ROUTES

  {
    path: "/",
    redirect: '/home',
    component: portalLayout,
    meta: {
      requiresAuth: true,
      isAdmin: true
    },
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('../views/Home.vue')
      },

      {
        path: 'drives',
        name: 'drives',
        component: () => import('../views/drives.vue')
      },
      {
        path: 'students',
        name: 'students',
        component: () => import('../views/students.vue')
      },
      {
        path: '/student/profile',
        name: 'studentProfile',
        component: () => import('../views/student/profile.vue')
      },
      {
        path: 'companies',
        name: 'companies',
        component: () => import('../views/companies.vue')
      },
      {
        path: 'settings',
        name: 'settings',
        component: () => import('../views/settings.vue')
      },

    ],
  },
  {
    path: "/recruiter",
    redirect: '/recruiter/dashboard',
    component: companyLayout,
    meta: {
      requiresAuth: true,
      isAdmin: true
    },
    children: [
      {
        path: '/recruiter/dashboard',
        name: 'home',
        component: () => import('../views/recruiter/dashboard.vue')
      },
      {
        path: '/recruiter/drives',
        name: 'drives',
        component: () => import('../views/recruiter/drives.vue')
      },
      {
        path: '/recruiter/drives/addNew',
        name: 'addDrive',
        component: () => import('../views/recruiter/drive/addDrive.vue')
      },
      {
        path: '/recruiter/students',
        name: 'students',
        component: () => import('../views/recruiter/regStudents.vue')
      },
      {
        path: '/recruiter/student/profile',
        name: 'studentProfile',
        component: () => import('../views/recruiter/student/profile.vue')
      },
      {
        path: '/recruiter/settings',
        name: 'settings',
        component: () => import('../views/recruiter/settings.vue')
      },

    ],
  },
  {
    path: "/student",
    redirect: '/student/dashboard',
    component: userLayout,
    meta: {
      requiresAuth: true,
      isAdmin: true
    },
    children: [
      {
        path: '/student/dashboard',
        name: 'studentHome',
        component: () => import('../views/user/home.vue')
      },
      {
        path: '/student/drives',
        name: 'studentDrives',
        component: () => import('../views/user/jobApplications.vue')
      },
      {
        path: '/student/user',
        name: 'userProfile',
        component: () => import('../views/user/profile.vue')
      },
      {
        path: '/student/singleDrive',
        name: 'singleDrive',
        component: () => import('../views/user/singleDrive.vue')
      },
      {
        path: '/student/help',
        name: 'help',
        component: () => import('../views/user/help.vue')
      },



    ],
  },
  {
    path: "/login",
    redirect: '/auth',
    component: authLayout,
    meta: {
      requiresAuth: true,
      isAdmin: true
    },
    children: [
      {
        path: '/auth',
        name: 'studentHome',
        component: () => import('../views/auth/login.vue')
      },




    ],
  },

  // {
  //   path: "/login",
  //   component: authLayout,
  //   children: [
  //     {
  //       path: '/auth',
  //       name: 'login',
  //       component: () => import('../views/auth/login.vue')
  //     },
  //   ],
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
