import Vue from 'vue'
import Router from  'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import("../components/HelloWorld")
        },
        {
            path: '/update',
            name: 'updateView',
            component: () => import("../components/UpdateView")
        },
        {
            path: '/login',
            name: 'login',
            component: () => import("../components/LoginView")
        }
    ]
})