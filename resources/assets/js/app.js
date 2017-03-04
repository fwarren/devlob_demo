require('./bootstrap');

import Vue        from 'vue'
import App from './App.vue';
import router from './routes';
import VueRouter  from 'vue-router'
import Auth from './packages/auth/Auth.js'

Vue.use(VueRouter);
Vue.use(Auth);

const app = new Vue({
    el: '#app',
    components: { App },
    template: '<app></app>',
    router
})
