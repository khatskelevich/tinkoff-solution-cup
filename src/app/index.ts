import {createApp} from 'vue'
import App from '../pages/App.vue'
import axios from 'axios'
import {createPinia} from 'pinia'
import {API_KEY} from "../shared/constants";

import 'element-plus/dist/index.css'
import './style.css'

axios.defaults.headers.common['X-API-Key'] = API_KEY

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)

export default app