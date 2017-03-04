import VueRouter from 'vue-router'

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: require('./views/Main.vue')
        },
        {
            path: '/login',
            component: require('./components/authentication/Login.vue'),
            meta: {
                forVisitors: true
            }
        },
        {
            path: '/register',
            component: require('./components/authentication/Register.vue'),
            meta: {
                forVisitors: true
            }
        },
        {
            path: '/about',
            component: require('./views/About.vue')
        },
        {
            path: '/contacts',
            component: require('./views/Contacts.vue')
        },
        {
            path: '/feed',
            component: require('./components/Feed.vue'),
            meta: {
                forAuth: true
            }
        },
    ]   
})

export default router
