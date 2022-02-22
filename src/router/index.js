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
import App from '../views/Tools/App.vue';

//!Users
import Login from '../views/Users/Login.vue';
import Signup from '../views/Users/SingUp.vue';
import ForgotPassword from '../views/Users/ForgotPassword.vue';
import Upgrade from '../views/Users/Upgrade.vue';
import Gift from '../views/Users/Gift.vue';
import ViewProfile from '../views/Users/ViewProfile.vue';
import JobSuggestionSettings from '../views/Users/JobSuggestionSettings.vue';
import NotificationSettings from '../views/Users/NotificationSettings.vue';
import Security from '../views/Users/Security.vue';
import ChangePassword from '../views/Users/ChangePassword.vue';
import ApplicationHistory from '../views/Users/ApplicationHistory.vue';
import SavedJobs from '../views/Users/SavedJobs.vue';
import MeCVs from '../views/Users/MeCVs.vue';
import MeCvsCoverLetter from '../views/Users/MeCvsCoverLetter.vue';

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    //! Jobs
    {
        path: '/viec-lam',
        name: 'Job',
        component: Job
    },

    {
        path: '/vieclam/:slug',
        name: 'DetailsJob',
        component: DetailsJob
    },
    {
        path: '/viec-lam-remote',
        name: 'RemoteJob',
        component: RemoteJob
    },
    //! Companies
    {
        path: '/cong-ty',
        name: 'Companies',
        component: Companies
    },
    //! Career Development
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
    //! Tools
    {
        path: '/cong-cu-tinh-muc-huong-bao-hiem-that-nghiep',
        name: 'BHTN',
        component: BHTN
    },
    {
        path: '/tinh-luong-gross-net',
        name: 'GrossNet',
        component: GrossNet
    },
    {
        path: '/app',
        name: 'App',
        component: App
    },
    //! Cvs
    {
        path: '/mau-cv',
        name: 'CV',
        component: CV
    },
    //! Users
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
        path: '/forgot-password',
        name: 'ForgotPassword',
        component: ForgotPassword
    },
    {
        path: '/tai-khoan/nang-cap',
        name: 'Upgrade',
        component: Upgrade
    },
    {
        path: '/qua-tang',
        name: 'Gift',
        component: Gift
    },
    {
        path: '/xem-ho-so',
        name: 'ViewProfile',
        component: ViewProfile
    },
    {
        path: '/cai-dat-goi-y-viec-lam',
        name: 'JobSuggestionSettings',
        component: JobSuggestionSettings
    },
    {
        path: '/tai-khoan/cai-dat-thong-bao',
        name: 'NotificationSettings',
        component: NotificationSettings
    },
    {
        path: '/tai-khoan/bao-mat',
        name: 'Security',
        component: Security
    },
    {
        path: '/tai-khoan/mat-khau',
        name: 'ChangePassword',
        component: ChangePassword
    },
    {
        path: '/lich-su-ung-tuyen',
        name: 'ApplicationHistory',
        component: ApplicationHistory
    },
    {
        path: '/viec-lam-da-luu',
        name: 'SavedJobs',
        component: SavedJobs
    },
    {
        path: '/quan-ly-cv',
        name: 'MeCVs',
        component: MeCVs
    },
    {
        path: '/quan-ly-cover-letter',
        name: 'MeCvsCoverLetter',
        component: MeCvsCoverLetter
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router