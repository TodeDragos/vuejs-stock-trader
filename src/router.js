import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home'
import Stocks from './components/stocks/Stocks'
import Portofolio from './components/portofolio/Portofolio'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/stocks',
            name: 'Stocks',
            component: Stocks
        },
        {
            path: '/portofolio',
            name: 'Portofolio',
            component: Portofolio
        }
    ],
    mode: 'history',
})