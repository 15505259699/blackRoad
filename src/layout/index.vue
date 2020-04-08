<template>
  <div class="content">
    <el-container style="height: 100%;">
      <el-aside width="200px">
       <sidebar></sidebar>
      </el-aside>
      <el-container>
        <el-header><navbar></navbar></el-header>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import sidebar from './sidebar/index'
import navbar from './navbar/index'
export default {
  name: 'home',
  data () {
    return {
    }
  },
  methods:{
  },
  components: {
    sidebar, navbar
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .el-header{
      background:linear-gradient(rgb(156,255,242), rgb(255,122,240));
      color: #333;
      text-align: left;
      line-height: 60px;
    }

    .el-aside {
      background:linear-gradient(rgb(245,249,0),rgb(58,255,241)) ;
      line-height: 200px;
    }

    .el-main {
      background:#fff;
      color: #333;
      text-align: center;
      line-height: 160px;
      padding: 0;
    }

    body > .el-container {
      margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
      line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
      line-height: 320px;
    }
</style>
