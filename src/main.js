import '@babel/polyfill';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import '@/firebase/';
import './sass/variables.scss';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fab, fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app');
