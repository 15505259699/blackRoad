<template>
  <div>
      <span>Hi, Wecome to BlackRoad!</span>
      <div class="info-img">
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            <div class="header_img">
                <span>{{Lname}}</span>
            </div>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="i">个人信息</el-dropdown-item>
              <el-dropdown-item command="c">切换用户</el-dropdown-item>
              <el-dropdown-item command="t">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
  </div>
</template>

<script>

  export default{
    name:'',
    data(){
      return{
        msg:"Wecome to BlackRoad!",
        Lname:""
      }
    },
    methods:{
      chageuser(){
        this.$message("zhsssss");
        // this.$router.push({
        //   path:"/login",
        //   });
      },
      handleCommand(command) {
        if(command == 'i'){

        }
        if(command == 'c'){
          this.$router.push({
            path:"/",
            });
        }
        if(command == 't'){
          this.$router.push({
            path:"/",
            });
        }
      }
    },
    created() {
      this.Lname=this.$store.state.user.name;
    }
  }
</script>

<style scoped>
  .el-menu{
    z-index: 999;
  }
  .info-img{
    width: 120px;
    height: 60px;
    float: right;
    background: rgba(200,155,5,.3);
  }
  .header_img{
    width: 60px;
    height: 60px;
    border-radius: 30px;
    overflow: hidden;
    float: left;
    margin:0 20px 0 10px;
  }
  .header_img img{
    width: 100%;
    height: 100%;
  }

</style>
