import VueRouter from 'vue-router'

const router = new VueRouter({
    routes: [
        {path: '/', component: require('./views/Main.vue')},
        {path: '/login', component: require('./components/authentication/Login.vue')},
        {path: '/register', component: require('./components/authentication/Register.vue')},
        {path: '/about', component: require('./views/About.vue')},
        {path: '/contacts', component: require('./views/Contacts.vue')},
    ]   
})


export default router
