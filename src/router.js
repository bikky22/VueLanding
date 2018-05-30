import Vue from 'vue'
import Router from 'vue-router'
import Landing from './components/Landing/Landing.vue'
import BackGround from './components/BackGround/BackGround.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'landing',
            component: Landing
        },
        {
            path: '/background/:purl',
            name: 'background',
            component: BackGround
        },
    ]
})
