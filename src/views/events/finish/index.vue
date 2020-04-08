<template>
  <div>
    <span>{{msg}}</span>
    <el-button @click="getall()">获取所有事件</el-button>
  </div>
</template>

<script>
  import tableOne from "../../../components/dfTable/tableOne";
    export default {
        name: "finishevent",
        data(){
            return{
                msg:{}
            }
        },
        components:{
            "ftable":tableOne
        },
        methods:{
            getall(){
                this.axios.get("/eventData/selectAll").then((res)=>{
                    console.log(res.data);
                    this.msg = res.data;
                })
            }
        }
    }
</script>

<style scoped>

</style>
