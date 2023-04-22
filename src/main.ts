import {createApp} from 'vue'
import './app/style.css'
import App from './app/App.vue'



import {createPinia} from "pinia"


const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
    .mount('#app')
