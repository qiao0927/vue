<template>
  <div>
    <router-link :to="{name:'login'}">登录</router-link>
    <mt-button type="danger" size="small" @click="exit">退出</mt-button>
    <router-link :to="{name:'music'}">音乐</router-link>
    <router-link :to="{name:'list'}">列表</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  methods:{
    exit(){
      this.$axios.put('users/qiao',{
        isLogin:false
      }).then(res=>{
        this.$router.push({
          name:'login'
        })
      })
    }
  }
  
}
</script>
<style scoped>

</style>
