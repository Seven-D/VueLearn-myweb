<template>
    <div class="myhello">
        <h1>欢迎你</h1>
        <div>{{content}}</div>
    </div>
</template>
/* eslint-disable no-new */
<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                content: 'Welcome to Vue.js World!'
            }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--scoped参数表时只作用于本组件，不影响全局-->
<style scoped>
    .myhello{
        color: lightseagreen;
    }
    .mycls1 {
        color: blue;
        background: azure;
    }
</style>
