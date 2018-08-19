# myweb

> A Vue.js project,Learning Vue Lessons adv

## Build Setup

``` bash
# install dependencies 安装依赖
npm install

# serve with hot reload at localhost:8080  运行
npm run dev

# build for production with minification  发布打包
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
##VUE.JS的进阶课程 
``` bash
概要：
Vue.js是一套用于构建用户界面的渐进式框架。
VUe的核心库只关注视图层，不仅易于上手，还便于与第三方库或即有项目的整合。
另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue也完全能够为复杂的单页面应用提供驱动。
类似的框架还有angular (google出品)React（faceBook出品）-等等
进阶课程内容范围：
 + cli :vue.js命令行方式的使用和开发
 + vue-router :路由框架
 + vuex :状态管理
 + transition :动画效果
 + etc.
 
  基础知识：
  + javascript/ES6
  + HTML5/CSS3
  + 小马VUE入门课程第一季---->
``` 
  
##命令行工具的安装
```bash
之前所讲解的VUE入门教程都是在浏览器上直接引用VUE,没有安装。
本节开始，安装VUE的命令行工具，并了解VUE框架怎么使用。
实战学习：
    1、最新版本的确认：npm show vue-cli    列出了所有版本并指明了最新版本
    2、选择版本并安装：npm install -g vue-cli@2.9.6   -g代表全局安装 ，@后面指定版本号
    3、确认已安装版本：vue -V     注意是大写V
    4、使用帮助：   vue -h
    5、涉及的命令挺少的：
        init 初始化一个新的项目或者APP（基于模板，从零自己编就没意义了，对开发效率也影响）
        list 查看可用的（官方）模板
        build 发布，打包发布
        help  帮助文档了  可以试试 vue help init
```
##各种项目模板
```bash
VUE命令默认提供的各种模板, 用vue list去看看:
  ★  browserify - A full-featured Browserify + vueify setup with hot-reload, linting & unit testing.
  ★  browserify-simple - A simple Browserify + vueify setup for quick prototyping.
  ★  pwa - PWA template for vue-cli based on the webpack template
  ★  simple - The simplest possible Vue setup in a single HTML file
  ★  webpack - A full-featured Webpack + vue-loader setup with hot reload, linting, testing & css extraction.
      （这个是最常用也是功能最全使用最多的官方模板，我们也就是用这个了）
  ★  webpack-simple - A simple Webpack + vue-loader setup for quick prototyping.
```
##建立webPack模板工程
```bash
实战指令 ：
    vue init webpack myweb  新建了一个以webpack为模板的工程
    cd myweb 进入工程目录
    npm run dev  开发运行项目
    npm run build  发布打包
    code .
    
    主要：
    * src 源文件目录，以后所有的代码编写基本都在这个目录；
    * dist 打包的目录，biuld发布的文件放在此；
    * package.json 项目配置文件，重要！
    
```
##引入bootstrap4框架（库）
```bash
vue-webpack工程导入bootstrap框架  ,当前网面开发应用最多的一个框架.
**让网页组件更加漂亮！**
实战指令：
    cd myweb  进入工程目录
    npm install bootstrap --save --save-exact  安装bootstrap, 
    参数意义：--save作为固定依赖存到package.json文件中，--save-exact指精确版本号
    nano main.js  编辑应用程序的入口文件，这是整个应用的入口，所有的全局都在此声明
    ...
    import 'bootstrap/dist/css/bootstrap.min.css'
    ...
    编辑视图文件，测试bootstrap功能
    cd src
    nano App.vue 编辑应用程序文件
    ...
    <button class="btn btn-primary">确定</button>
    <button class="btn btn-success">使用</button>
    <button class="btn btn-danger">注意</button>
    ...
    npm start
    
    可以看到三个按钮出现在页面中，并且样式就是bootstrap的样式，漂亮。
    如果把import 'bootstrap/dist/css/bootstrap.min.css'这句注释掉，
    按钮的效果回到标准的HTML5的样式。
    说明我们可以在项目全局用上了bootstrap的框架了。！
```
##使用Ajax库－axios
```bash
1、为什么要用Ajax库，用来做什么？
   **__从服务器端取得数据！__**
   **为网页增加远程数据的存取能力(Ajax)**
   **HTTP库axios（支持浏览器 or 用于Node.js开发）**
   axios官网：https://github.com/axios/axios
   因为用VUE开发的应用程序都是基于单页的应用程序，也就是说不，提，交。
   不提交如何取得数据呢？通过Ajax库就能够取得！
2、怎么使用？
   $cd myweb 进入工程目录
   $npm install --save --save-exact axios vue-axios  
   安装两个内容：axios本库，以及vue-axios这个是axios封闭的VUE组件，可简化代码使用。
   **注册组件**：
   $nano main.js 编辑main.js文件
   ...
   import axios from 'axios'  //引用
   import VueAxios from 'vue-axios' //引用
   Vue.use(VueAxios,axios)  //注册,这样全局组件都能使用这两个库了
   ...
   **各组件：**
   $nano HelloWorld.vue  编辑HelloWorld.vue文件
   ...
   <pre>{{content}}</pre>  在模板区加入这个一句,显示变量content内容
   ...
   export default{
       name:"HelloWorld",
       data(){
           return {content:""};
       },
       //VUE页面加载完成后会调用这个事件mounted
       mounted(){
           //利用axios库向这个网址进行提交动作，然后返回一个数据集body
           //将body的内容赋给变量content
           this.axois.post("http://api.komavideo.com/news/list").then(body=>{
               this.content = body.data;
           });
       }
   };
     
```
##使用自定义CSS样式
```bash
定义属于自己的样式单文件my.css
（bootstrap框架的样式已经很漂亮啦！但有时候也不能满足leader的需求呢·￥%……%）
实战指令：
    $cd assets  
    $nano my.xss  
    ...
    .myclass1{
        color:red;
        border: 1px solid blue;        
    }
    ...
    $cd ../
    $nano App.vue
    这里必须是该文件对于my.css的相对路径。
    import './assets/my.css'
    ...
    <div class="myclass1">你好！</div>
    ...
```
##组件的结构
```bash
**知识点**
vue命令行开发模式为我们带来的组件开发方式。（区别于上一季入门课程的浏览器开发方式）

**组件文件夹**
所有的组件都被统一放到组件文件夹中。
{myproject}/src/components/*

**组件格式（或者说写法）**
  + template :组件的HTML内容
  + sctript ：组件的JS代码（ES6语法）
  + style : 组件的CSS样式单
 
实战指令：
   <template>
       <div class="container">
           <h1>{{msg}}</h1>
       </div>
   </template>
   
   <script>
   //import...
   export default {
       name:'HelloWorld',
       data(){
           return {
               msg:'Welcome to Your Vue.js App !'
           }
       }
   }
   </sctipt>
   
   <style scoped>  <!--这里的scoped参数表示只作用于本组件，不影响全局，建议都用-->
   h1 {
      font-weight:normal;
      color:red;
   }
   </style>
```
##路由知我心
```bash
**路由组件vue-router**
官方网站：
https://router.vuejs.org/
https://github.com/vuejs/vue-router

实战指令：
    $npm install vue-router --save --save-exact  安装路由库
    （在初始化工程的时候，我们已经安装过这个库，这里不用再安装。）
    
**路由组件的设定**
1、src/router/index.js
2、src/main.js
在这两个文件中引入、注册、调用，完成全局路由配置。
往后所有的页面路由都是在src/router/index.js中写好。
```

##路由初体验
```bash
**知识点**：做一个简单的路由
实战演习：
    * HelloWorld.vue
    * News.vue
    * About.vue
    * router/index.js
    * App.vue
    
 ******* router/index.js******   
    import HelloWorld from '@/components/HelloWorld'
    import News from  '@/components/News'
    import About from '@/components/About'      
    Vue.use(Router)    
    export default new Router({
      routes: [
        {
          path: '/',
          name: 'HelloWorld',
          component: HelloWorld
        },
        {
          path: '/about',
          name: 'About',
          component: About
        },
        {
          path: '/news',
          name: 'News',
          component: News
        }
      ]
    })
 **********App.vue********** 
 <template>  
   <div>
     <p>
       <!--使用router-link组件来导航-->
       <!--通过传入to属性指定链接-->
       <!--router-link默认会被渲染成一个<a>标签，就是超链接嘛-->
       <router-link to="/">Home</router-link>
       <router-link to="/about">关于</router-link>
       <router-link to="/news">新闻</router-link>
    </p>
  </div>
 </template>  
  
 还是在代码中去实际实现吧，懒得写了这儿……—（）（）  
    
```
##动态路由
```bash
**知识点**：动态路由是指在URL路径中含有动态参数的路由，比如说：/player/1,/player/2,/player/3等等。

**动态路由的匹配设置**
实战：
     定制游戏玩家的动态路径：/player/:id
     
     * Player.vue
     * router/index.js
     * App.vue
     
     + Player.vue
     <template>
         <div>
             <h1>球员页面</h1>
             <p>{{detail}}</p>
         </div>
     </template>
     
     看项目文件吧%———内容多在这里不好写了~

```
##嵌套路由
```bash
**知识点**
在动态路由的基础上再加上附加的嵌套URL（即：组件），比如说，/player/:uid/*
/player/1/profile, /player/1/stats等等。

嵌套路由的使用方法，实战：
     * Player/profile.vue
     * Player/stats.vue
     * router/index.js
     * Player.vue
     
     四个文件的编写请看文件代码吧
     
```
##路由也编程
```bash
前几期讲了路由的一些基本操作（其实都快吃不进去了），不过我们都是写死路由，写死链接。这节课让路由实现简单的编程。

**知识点：**
在前面的讲解中，我们是通过<router-link>标签来生成页面的<a>标签，然后进行URL转向的。
其实我们不仅可以通过标签来实现，也可以通过编程来实现，GOGOGO~~~
    
    * router-link (之前的做法)
    * router.push(location,onComplete?,onAbort?) (注意，这里是一个方法router.push)
    
实战学习：
    #App.vue  #  
    <template>
        <div id="App">
            <p>
              <!--路由编程部分--->
              <button @click="btnClick(1)" >库里2</button>
              <button @click="btnClick(2)" >哈登2</button>
        
              <!--注意与上面的区别，这里to之前面有一个冒号，表明要嵌入一个对象-->
              <!--对象的内容是什么？其实就是下面router.push方法里面的参数内容！！-->
              <!--也就是说，不用router.push方法来定向，也可以直接放到这里来实现！-->
              <!--实现的方法也太多了吧，阿门！-->
              <router-link :to="{name:'Player',params:{uid:1}}">库里3</router-link>
              <router-link :to="{path:'/Player/2/stats'}">哈登3</router-link>
            </p>
        </div>
    </template>
    
    <script>
        export default {
          name: 'App',
          methods: {
            btnClick(uid) {
              //路由定向。有很多种写法如下:
              //定向到组件本页
              this.$router.push({path:`/player/${uid}`}); //坑货啊，这里path后面的值不是用单引号''啊？居然是用``这个符号？Esc下方那个！！
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

```
##多路由的拼图
```bash
**知识点：**
为一个路由（画面）组合多个组件，完成整个页面。
以前讲解的内容，一个页面（画面）只有一个组件。这节课是一个画面中显示（组合）多个组件。GOGOGO~

* router-view[name]  用于绑定某一个路由中的某一个组件。
* components   注意这个复数s，表明什么？多组件嘛 

实战学习：
    
    * Header.vue    代表要显示的页面的页头
    * Sidebar.vue   菜单栏，边条
    * Detail.vue    数据区
    * router/index.js   将三个组件嵌入到路由当中
    * App.vue        在入口使用路由
    
---setting/Header.vue 
<template>
    <div>
        <h1>标题栏</h1>
        <div>欢迎来到小马Vue.js课程系列</div>
    </div>
</template>

---setting/Sidebar.vue
<template>
    <div>
        <h1>边条</h1>
        
    </div>
</template>
          
---setting/Detail.vue 
<template>
    <div>
        <h1>详细显示</h1>
        <p>
           Vue.js是一套用于构建用户界面的渐进式框架。Vue的核心库只关注视图层，不仅易于上手，
           还便于与第三方库或即有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用
           时，Vue也完成能够为复杂的单面应用提供驱动。
        </p>
    </div>
</template>        

---router/index.js
import SettingDetail from '@components/setting/Detail'
import SettingHeader from '@components/setting/Header'
import SettingSidebar from '@components/setting/Sidebar'
...
   routers:[
       {
          path:'/',
          name:'Home',
          components:{
              myHeader: SettingHeader,
              mySidebar: SettingSidebar,
              myDetail: SettingDetail
          }
       }
   ]
   
---App.vue
<template>
    <div>
        <table width="100%">
              <tr>
                <td colspan="2" style="background-color:darkgoldenrod">
                  <!---路由出口
                   路由匹配到的组件将渲染在这里，在这里-->
                  <router-view name="myHeader"></router-view>
                </td>
              </tr>
                <td width="20%" style="background-color:thistle">
                  <router-view name="mySidebar"></router-view>
                </td>
                <td width="80%" style="background-color:aquamarine">
                  <router-view name="myDetail"></router-view>
                </td>
              <tr>
        
              </tr>
            </table>
    </div>
</template>


```
##URL重定向
```bash
**知识点：**
    redirect    重定向指令
    alias       路由别名
    
**实战学习：**
    * About.vue
    * router/index.js
    * App.vue
    
---About.vue
<template>
    <div>
        <h1>About Page</h1>
    </div>
    
---router/index.js
{
path: '/about',
name: 'About',
component: About,
alias:'/aboutme'
}

---App.vue
<router-link to="/aboutme">aboutme</router-link>  <!--路由别名-->
<router-link to="/news">新闻</router-link>
<!--这里学URL重定向-->
<router-link to="/player/1">player1</router-link>
<router-link to="/curry">curry</router-link>
    
</template>

```
##多参数路由
```bash
前几期咱们学习的路由仅仅是传递一个参数（回想一下，就是那个uid），这一节课讲解为路由传递多个参数，该怎么做？

**知识点：**

    * props 路由属性,注意这里的复数s，表示多个属性
    
实战学习：

    * User.vue
    * router/index.js
    * App.vue
    
+++User.vue
<template>
    <div>
        <h1>User</h1>
        <p>uid={{uid}},{{nationality}}</p>
        <p>$route.params.uid={{$route.params.uid}}</p>
        <p>$route.params.uid={{$route.params.nationality}}</p>        
    </div>
</template>
<script>
    export default {
        name:"User",
        props:['uid','nationality']
    }
</script>

+++router/index.js
import User from '@/components/User'
...
{
    path:'/User/:uid/:nationality',
    name:'User',
    component:User,
    props:true
}
...

++++App.vue
<template>
    <div>
        <router-link to="/user/1/usa">User-1</router-link>
        <router-link to="/user/2/china">User-2</router-link>
        <router-link to="/user/3/korea">User-3</router-link>
    </div>
    <hr/>
    <router-view/>
</template>

```

