<template>
  <div class="login-page">
    <div class="outer_label">
        <img class="" src="../../../build/logo.png"/>
    </div>
    <div class="input-user">
        <el-input placeholder="请输入要修改的用户名" v-model="user" clearable></el-input>
        <el-input placeholder="请输入修改的密码" v-model="pwd" show-password></el-input>
        <el-button type="primary" @click.native="submit">确认修改</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'forgot',
  data () {
    return {
      user:'',
      pwd:''
    }
  },
  methods:{
    submit(){
      if(this.user==""){
          alert("用户名不能为空");
      }else{
        var user ={};
        user.username = this.user;
        user.password = this.pwd;
        this.axios.post("/user/update",user)
        .then((res) => {
            if(res.data = '0'){
                this.$message({
                  message:'修改成功！',
                  type:'success'
                });
                this.$router.push({
                  path:"/"
                })
            }
        })
        .catch( error =>{
            console.log(error);
        })
      }
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
