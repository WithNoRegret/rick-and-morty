import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

import { createRouter, createWebHistory } from 'vue-router'
import Page404View from './views/Page404View.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: () => import('./views/CharactersView.vue') },
        { path: '/character/:id', component: () => import('./views/CharacterCardView.vue') },
        { path: '/episodes', component: () => import('./views/EpisodesView.vue') },
        { path: '/:pathMatch(.*)*', component: Page404View }
    ]
})


createApp(App)
    .use(router)
    .mount('#app')
