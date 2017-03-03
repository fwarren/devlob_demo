import VueRouter from 'vue-router'

const router = new VueRouter({
    routes: [
        {path: '/', component: require('./components/Main.vue')},
        {path: '/login', component: require('./components/authentication/Login.vue')},
        {path: '/register', component: require('./components/authentication/Register.vue')},
        {path: '/about', component: require('./components/About.vue')},
        {path: '/contacts', component: require('./components/Contacts.vue')},
    ]   
})


export default router
