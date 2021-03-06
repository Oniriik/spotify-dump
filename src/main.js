import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

const spotifyDumpApp = createApp(App)
spotifyDumpApp.use(router)
spotifyDumpApp.use(store)
spotifyDumpApp.mount('#app')