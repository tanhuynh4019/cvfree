import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Job from '../views/Job.vue'
import RemoteJob from '../views/Jobs/RemoteJob.vue';
import Companies from '../views/Companies/Companies.vue'
import MBTI from '../views/CareerDevelopment/MBTI.vue';

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