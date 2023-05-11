import { createRouter, createWebHistory, RouterView } from 'vue-router'

import HomeView from "../views/HomeView.vue";

const router = createRouter({
    mode: 'history',
    base: import.meta.env.BASE_URL,
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/:pathMatch(.*)*',
            component: () => import('../views/NotFound.vue'),
        },
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
    ]
})
export default router