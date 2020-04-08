<template>
  <div class="login-page">
    <div class="outer_label">
        <img class="" src="../../../build/logo.png"/>
    </div>
    <div class="input-user">
        <el-input placeholder="用户名" v-model="user" clearable></el-input>
        <el-input placeholder="密码" v-model="pwd" show-password></el-input>
        <el-input placeholder="联系方式" v-model="phone" clearable></el-input>
        <el-input placeholder="电子邮箱" v-model="email" clearable></el-input>
<!--        <el-input placeholder="备注" v-model="role" clearable></el-input>-->
<!--        <el-form-item label="图片">-->
<!--            <el-upload-->
<!--                       ref="upload"-->
<!--                       action="/upload.do"-->
<!--                       name="picture"-->
<!--                       list-type="picture-card"-->
<!--                       :limit="1"-->
<!--                       :file-list="fileList"-->
<!--                       :on-exceed="onExceed"-->
<!--                       :before-upload="beforeUpload"-->
<!--                       :on-preview="handlePreview"-->
<!--                       :on-success="handleSuccess"-->
<!--                       :on-remove="handleRemove">-->
<!--                <i class="el-icon-plus"></i>-->
<!--            </el-upload>-->
<!--            <el-dialog :visible.sync="dialogVisible">-->
<!--                <img width="100%" :src="dialogImageUrl" alt="">-->
<!--            </el-dialog>-->
<!--        </el-form-item>-->
        <el-button type="primary" @click.native="submit">注册</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'forgot',
  data () {
    return {
      user:'',
      pwd:'',
      email:'',
      phone:'',
      role:''
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
        user.email = this.email;
        user.mobile = this.phone;
        user.role = this.role;
        this.axios.post("/user/insert",user)
        .then((res) => {
            if(res.status=="200"){
                this.$message({
                  message:'注册成功',
                  type:'success'
                })
                this.$router.push({
                  path:"/"
                })

            }else{
              this.$message({
                message:'注册失败',
                type:'wrong'
              })
            }
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
