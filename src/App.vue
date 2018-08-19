<template>
    <div id="app">
        <table width="100%">
            <tr>
                <td colspan="2" style="background-color:darkgoldenrod">
                    <router-view name="myHeader"></router-view>
                </td>
            </tr>
            <tr>
                <td width="20%" style="background-color:thistle">
                    <router-view name="mySidebar"></router-view>
                </td>
                <td width="80%" style="background-color:aquamarine">
                    <router-view name="myDetail"></router-view>
                </td>
            </tr>
        </table>

        <img src="./assets/logo.png">
        <div>
            <router-view name="myHello"></router-view>
        </div>

        <hr/>
        <button class="btn btn-primary">确定</button>
        <button class="btn btn-success">使用</button>
        <button class="btn btn-danger">注意</button>
        <hr/>
        <div class="myclass1">你好！CSS样式</div>
        <hr/>
        <p>
            <!--使用router-link组件来导航-->
            <!--通过传入to属性指定链接-->
            <!--router-link默认会被渲染成一个<a>标签，就是超链接嘛-->
            <router-link to="/">首页</router-link>
            <router-link to="/about">关于</router-link>
            <router-link to="/aboutme">aboutme</router-link>  <!--路由别名-->
            <router-link to="/news">新闻</router-link>
            <!--这里学URL重定向-->
            <router-link to="/player/1">player1</router-link>
            <router-link to="/curry">curry</router-link>
        </p>
        <hr/>
        <p>
            <!--上面是静态的路由，这里是动态的路由哦-->
            <router-link to="/player/1">库里1</router-link>
            <router-link to="/player/2">哈登1</router-link>
        </p>
        <hr/>
        <p>
            <!--路由编程部分--->
            <button @click="btnClick(1)">库里2</button>
            <button @click="btnClick(2)">哈登2</button>

            <!--注意与上面的区别，这里to之前面有一个冒号，表明要嵌入一个对象-->
            <!--对象的内容是什么？其实就是下面router.push方法里面的参数内容！！-->
            <!--也就是说，不用router.push方法来定向，也可以直接放到这里来实现！-->
            <!--实现的方法也太多了吧，阿门！-->
            <router-link :to="{name:'Player',params:{uid:1}}">库里3</router-link>
            <router-link :to="{path:'/Player/2/stats'}">哈登3</router-link>
        </p>
        <hr/>
        <p>
            <router-link to="/user/1/usa">User-1</router-link>
            <router-link to="/user/2/china">User-2</router-link>
            <router-link to="/user/3/korea">User-3</router-link>
        </p>
        <!--路由出口，要有这句页面才能渲染出来！切记。切记。切记。-->
        <router-view/>
    </div>
</template>
/* eslint-disable no-new */
<script>
    import './assets/my.css'

    export default {
        name: 'App',
        methods: {
            btnClick(uid) {
                //路由定向。有很多种写法如下:
                //定向到组件本页
                this.$router.push({path: `/player/${uid}`}); //坑货啊，这里path后面的值不是用单引号''啊？居然是用``这个符号？Esc下方那个！！
                //还可以直接定向到组件的子组件页
                //this.$router.push({path:`/player/${uid}/stats`});
                //可以定向到组件名，并传参数
                //this.$router.push({name:'Player',params:{uid:uid}});
                //这一句只是演示get的传参的方法，因本组件没写出相应功能，没有任何效果。注意地址栏就知道是什么变化。
                //this.$router.push({path:'/player',query:{uid:uid}}); //url-get参数写法
                //url履历控制(其实就是我们平时浏览网面的时候往前翻、往后翻历史页面)－1往后翻，1往前翻
                //this.$router.go(-1)
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
