import { createApp } from 'vue'
import './style.css'
import App from '@/views/App.vue'
import routes from '@/router/routes'
import components from './components'
import store from '@/store'
import 'normalize.css'

const vueApp = createApp(App)

vueApp.use(routes)
vueApp.use(store)
vueApp.use(components, {})

vueApp.component('app', App)

vueApp.mount('#app')
