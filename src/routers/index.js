import Vue from 'vue'
import Router from  'vue-router'

import UpdateView from "@/components/UpdateView";
import LoginView from "@/components/LoginView";
import HelloWorld from "@/components/HelloWorld";

Vue.use(Router)

export default new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            name: 'home',
            component: HelloWorld
        },
        {
            path: '/update',
            name: 'updateView',
            component: UpdateView
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView
        }
    ]
})