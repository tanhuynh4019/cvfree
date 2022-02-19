import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
//! Companies
import Companies from '../views/Companies/Companies.vue';

//! Cvs
import CV from '../views/CVs/CV.vue';

//! Jobs
import Job from '../views/Job.vue'
import DetailsJob from '../views/Jobs/DetailsJob.vue';
import RemoteJob from '../views/Jobs/RemoteJob.vue';

//! Career Development
import MI from '../views/CareerDevelopment/MI.vue';
import MBTI from '../views/CareerDevelopment/MBTI.vue';

//! Tools
import BHTN from '../views/Tools/BHTN.vue';
import GrossNet from '../views/Tools/GrossNet.vue';

//!Users
import Login from '../views/Users/Login.vue';
import Signup from '../views/Users/SingUp.vue';

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/viec-lam',
        name: 'Job',
        component: Job
    },
    {
        path: '/viec-lam-remote',
        name: 'RemoteJob',
        component: RemoteJob
    },
    {
        path: '/cong-ty',
        name: 'Companies',
        component: Companies
    },
    {
        path: '/trac-nghiem-tinh-cach-mbti',
        name: 'MBTI',
        component: MBTI
    },
    {
        path: '/trac-nghiem-da-tri-thong-minh-multiple-intelligences-test',
        name: 'MI',
        component: MI
    },
    {
        path: '/cong-cu-tinh-muc-huong-bao-hiem-that-nghiep',
        name: 'BHTN',
        component: BHTN
    },
    {
        path: '/vieclam/:slug',
        name: 'DetailsJob',
        component: DetailsJob
    },
    {
        path: '/mau-cv',
        name: 'CV',
        component: CV
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/sign-up',
        name: 'Signup',
        component: Signup
    },
    {
        path: '/tinh-luong-gross-net',
        name: 'GrossNet',
        component: GrossNet
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router