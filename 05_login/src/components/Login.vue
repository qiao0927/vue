<template>
  <div>
    <mt-field label="用户名" state="success" v-model="username"></mt-field>
    <mt-field label="邮箱" :state="emailState" v-model="email"></mt-field>
    <mt-button @click="doLogin">登录</mt-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      email: "",
      emailState: ""
    };
  },
  methods:{
            doLogin(){
                this.$axios.put('users/'+ this.username,{
                    isLogin:true
                }).
                then( res=>{
                    this.$router.push({
                        name:'list'
                    });
                })
            }
        },
  watch: {
    email: function(newV) {
      if (newV == "qiao@itcast.cn") {
        this.emailState = "success";
      } else if (!newV.includes("@")) {
        this.emailState = "error";
      } else {
        this.emailState = "warning";
      }
    }
  }
};
</script>
<style scoped>

</style>
