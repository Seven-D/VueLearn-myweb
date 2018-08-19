<template>
  <div>
    <h1>球员页面</h1>
    <ul>
      <li>编号：{{detail.uid}}</li>
      <li>名字：{{detail.name}}</li>
      <li>得分：{{detail.point}}</li>
    </ul>
    <router-link :to="profile">简介</router-link>
    <router-link :to="stats">数据</router-link>
    <hr/>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: "player",
    data() {
      return {
        detail:{},
        profile:'',
        stats:''
      }
    },
    mounted() {
      //接收URL参数ID
      this.detail = this.getPlayer(this.$route.params.uid);
      this.profile = '/player/' + this.$route.params.uid + '/profile';
      this.stats = '/player/' + this.$route.params.uid + '/stats';
    },
    //beforeRouteUpdate这个方法是必要的
    //如果没有这个方法，那么Player组件只能实例化一次，也就是当点击“库里”能切换到“库里页面”，接着点击“哈登”，是切不到哈登页面的
    //必须点击HOME回到主页，才能再切换到哈登。也就是说无法连续切换。具体原理…………比较绕，没明白
    //总之，这个方法要结合mounted方法用就是了，mounted方法只能实例化一次。
    beforeRouteUpdate(to, from, next) {
      this.detail = this.getPlayer(to.params.uid);
      this.profile = '/player/' + to.params.uid + '/profile';
      this.stats = '/player/' + to.params.uid + '/stats';
      next();
    },
    methods: {
      getPlayer(uid) {
        switch (uid.toString()) {
          case '1':
            return {uid: 1, name: '库里', point: 26};
          case '2':
            return {uid: 2, name: '哈登', point: 30};
          default:
            return {uid: -1};
        }
      }
    }
  }
</script>

<style scoped>

</style>
