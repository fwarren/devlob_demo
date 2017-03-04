require('./bootstrap');

import Vue        from 'vue'
import App from './App.vue';
import Router from './routes.js';
import VueRouter  from 'vue-router'
import Auth from './packages/auth/Auth.js'

Vue.use(VueRouter);
Vue.use(Auth);

Router.beforeEach(
    (to, from, next) => {
        if(to.matched.some(record => record.meta.forVisitors)) {
            if(Vue.auth.isAuthenticated()) {
                next({
                    path: '/feed'
                })
            } else {
                next()
            }
        } else if(to.matched.some(record => record.meta.forAuth)) {
            if(! Vue.auth.isAuthenticated()) {
                next({
                    path: '/login'
                })
            } else {
                next()
            }
        } else {
            next()
        }
    }
)

const app = new Vue({
    el: '#app',
    components: { App },
    template: '<app></app>',
    router: Router
})
