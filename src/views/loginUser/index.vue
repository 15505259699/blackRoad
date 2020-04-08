<template>
    <div class="foo">
      <span>登入信息</span>
      <el-form ref="form" :model="userinfo" label-width="80px">
        <el-form-item label="姓名">
          <el-input v-model="userinfo.name" disabled></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="userinfo.mobile" disabled></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="userinfo.email" disabled></el-input>
        </el-form-item>
        <el-form-item label="权限">
          <span>{{userinfo.role}}</span>
        </el-form-item>
      </el-form>
      <el-button disabled>欢迎来到bros</el-button>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return{
                msg:"wecome",
                userinfo:{},
            }
        },
        methods:{
            getstore(){
                console.log(this.userinfo)

            }
        },
        created() {
            this.userinfo=this.$store.state.user;
        }
    }
</script>

<style scoped>
    .foo{
      width: 400px;
      position: relative;
      top: 50%;
      left: 50%;
      margin-left: -200px;
      margin-top:-300px;
      border: 2px solid #333;
      padding: 20px;
    }
</style>
