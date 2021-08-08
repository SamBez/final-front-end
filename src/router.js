import login from './components/login.vue'
import hello from './components/HelloWorld.vue'
import superadmin from './components/superadmin.vue'
import Home from './components/Home.vue'

export const routes = [
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/',
        name: 'hello',
        component: hello
    },
    {
        path: '/super',
        name: 'super',
        component: superadmin
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
]