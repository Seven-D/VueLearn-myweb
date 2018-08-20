<template>
    <div>
        <h1 style="font-size: xx-large">News Page</h1>
        <pre class="mycls1">{{content}}</pre>
    </div>
</template>

<script>
    export default {
        name: "news",
        data() {
            return {
                content: ''
            }
        },
        mounted() {
            // 利用axios库向这个网址进行提交动作，然后返回一个数据集body
            // 将body的内容赋给变量content
            //http://api.komavideo.com/news/list  这个是小马视频的新闻API-URL
            this.axios.post("http://api.komavideo.com/news/list").then(body => {
                this.content = body.data
            })
        }
    }
</script>

<style scoped>
    .mycls1 {
        color: blue;
        background: antiquewhite;
    }
</style>
