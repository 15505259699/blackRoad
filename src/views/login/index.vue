<template>
  <div class="login-page">
    <div class="outer_label">
        <img class="" src="../../../build/logo.png"/>
    </div>
    <div class="input-user">
        <el-input placeholder="请输入用户名" v-model="user" clearable></el-input>
        <el-input placeholder="请输入密码" v-model="pwd" show-password></el-input>
        <el-button type="primary" @click.native="login">Login</el-button>
    </div>
    <div class="other_f">
        <router-link to="/forgot">忘记密码？</router-link>
        <router-link to="/register">注册新用户</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      msg: '',
      user:'',
      pwd:''
    }
  },
  methods:{
    login(){
      if(this.user=="" || this.pwd==""){
          this.$message({
                    message: '用户名或密码不能为空！',
                    type: 'warning'
                  });
      }else{
        this.axios.get("/user/findUserByName",{params:{name:this.user}}).then((res) => {
            if(res.status == 200){

              var username = res.data.username;
              var password = res.data.password;
              if(this.user==username && this.pwd ==password){
                  this.$message({
                       message:"登录成功",
                       type:'success'
                    });
                  this.$store.dispatch('login',res.data);
                  console.log("请求成功");
                  this.$router.push({
                      path:"/home",
                    });
              }else{
                console.log("user or pwd is wrong!");
                this.$message.error("用户名或密码错误");
              }
            }
        })
      }
      //   this.$router.push({path:'/home'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login-page{
    width:400px;
    height:400px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -200px;
    margin-top:-200px;
    text-align:center;
  }
  .input-user .el-button{
    width: 100%;
  }
</style>
