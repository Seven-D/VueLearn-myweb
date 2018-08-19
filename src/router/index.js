import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/HelloWorld'
import News from '@/components/News'
import About from '@/components/About'
import Player from '@/components/Player'
import PlayerProfile from '@/components/Player/Profile'
import PlayerStats from '@/components/Player/Stats'

import SettingDetail from '@/components/setting/Detail'
import SettingHeader from '@/components/setting/zHeader'
import SettingSidebar from '@/components/setting/Sidebar'

import User from '@/components/User'

Vue.use(Router);

export default new Router({
    routes: [
        //多路由拼图，根路径改成这样
        {
            path: '/',
            name: 'Home',
            //注意这里的复数s
            components: {
                myHeader: SettingHeader,
                mySidebar: SettingSidebar,
                myDetail: SettingDetail,
                myHello:Hello
            }
        },

        {
            path: '/about',
            name: 'About',
            component: About,
            alias: '/aboutme'  //路由别名。之前通过上面path可以访问组件About，同时通过这个别名这里也可以访问组件About。
        },
        //这里是重定向。之前要访问球员库里的信息，我们要给出实际访问URL/player/1（不管是静态还是动态，最终都是要这个地址）
        //而现在，我们是直接访问'/curry'，然后重定向到'/player/1'
        //重定向写法有多种，如下：
        {
            path: '/curry',
            redirect: '/player/1'
            //redirect:{name:'About'} //重定向到组件
            //redirect:'/about'     //重定向组件的路径
            //redirect:'/aboutme'   //重定向到组件别名  都可以，都 可以 ！
        },
        {
            path: '/news',
            name: 'News',
            component: News
        },

        {
            path: '/player/:uid',
            name: 'Player',
            component: Player,
            //嵌套路由在这儿，子路由
            children: [
                {
                    path: 'profile',
                    component: PlayerProfile
                },
                {
                    path: 'stats',
                    component: PlayerStats
                }
            ]
        },
        //多参数路由

        {
            path: '/user/:uid/:nationality',
            name: 'User',
            component: User,
            props: true  //注意这里要打开
        }
    ]
})
