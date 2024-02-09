import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import VueI18n from 'vue-i18n'


const app = createApp(App)

app.use(createPinia())
app.use(router)

const i18n = new VueI18n({
    locale: 'zh_TW',
    fallbackLocale: 'zh_TW',
    messages,
});

// 3. WebSocket setup
app.use(VueNativeSock, `${process.env.VUE_APP_WSS}`, {
    connectManually: true,
});

// 7. Export i18n
export default i18n;