require('./bootstrap');

import Vue        from 'vue'
import App from './App.vue';
import VueRouter  from 'vue-router'
import router from './routes';

Vue.use(VueRouter)

const app = new Vue({
    el: '#app',
    components: { App },
    template: '<app></app>',
    router
})

/*
const app = new Vue({
    el: '#app',
    render: h => h(App),
    router: Router
});
*/
