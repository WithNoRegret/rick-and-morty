import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

import { createRouter, createWebHistory } from 'vue-router'
import CharactersView from './views/CharactersView.vue'
import CharacterCardView from './views/CharacterCardView.vue'
import EpisodesView from './views/EpisodesView.vue'
import Page404View from './views/Page404View.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: CharactersView },
        { path: '/character/:id', component: CharacterCardView },
        { path: '/episodes', component: EpisodesView },
        { path: '/:pathMatch(.*)*', component: Page404View }
    ]
})


createApp(App)
    .use(router)
    .mount('#app')
