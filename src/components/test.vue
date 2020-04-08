<template>
  <div class="test">
    <h2>加减法计算器</h2>
    <span>{{data_state}}</span>
    <el-button @click="chagestate">chage</el-button>
    <span>{{msg}}</span>
    <span>{{getdata}}</span>
    <button @click="getdataofapi">get</button>
  </div>
</template>
<script>
  export default {
      name: 'test',
      data () {
          return {
              data_state:"",
              msg:"获取跨域数据",
              getdata:""
          }
      },
      methods:{
          chagestate(){
              // this.$store.commit('CHANGE_STATE',10);
              // this.$store.dispatch('set_token',10);
              console.log(this.$store.getters.token)
              // this.data_state = this.$store.state.token;
          },
          getdataofapi(){
              this.axios.get("user/findUserAll").then((res)=>{
                  console.log(res.data)
                  this.data_state = res.data.data.token;
              })
          }
      }
  }
</script>
