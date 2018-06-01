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
            path: '/background/',
            name: 'background',
            component: BackGround
        },
        {
            path: '/reactapp/',
            beforeEnter() {
                window.location = "https://www.bikky.space/reactme/"
            }
        },
        {
            path: '/owcsx/',
            beforeEnter() {
                window.location = "http://www.owcsx.science/"
            }
        }
    ]
})
