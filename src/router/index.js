import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '@/vue/PageHome'
import PageYourDump from '@/vue/PageYourDump'
import PageFaq from '@/vue/PageFaq'
import PageContact from '@/vue/PageContact'
import PageLogin from '@/vue/PageLogin'
const routes = [
    {
        path: '/',
        name: 'home',
        component: PageHome  
    },
    {
        path: '/yourdump',
        name: 'yourdump',
        component: PageYourDump 
    },
    {
        path: '/faq',
        name: 'faq',
        component: PageFaq 
    },
    {
        path: '/contact',
        name: 'contact',
        component: PageContact  
    },
    {
        path: '/login',
        name: 'login',
        component: PageLogin  
    }
]

export default createRouter({
    history: createWebHistory(),
    routes,
  })