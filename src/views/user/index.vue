<template>
  <div>
    <stable :tData="tableData" :lData="labelData" :btn="btnData"></stable>
  </div>
</template>

<script>
  import tableOne from "@/components/dfTable/tableButton";
    export default {
        name:"userlist",
       data(){
           return{
                tableData:[],
                btnData:{edit:"编辑",delete:"删除"},
                labelData: [{
                    pr:'id',
                    label:'序号',
                },{
                    pr:'username',
                    label: '用户名'
                },{
                    pr:'password',
                    label:'密码'
                },{
                    pr:'email',
                    label:'邮箱'
                },{
                    pr:'mobile',
                    label:'手机号'
                },{
                    pr:'role',
                    label:'权限'
                },
                ]
           }
       },
        components:{
           'stable':tableOne
        },
        created() {
            this.axios.get("user/findUserAll").then((res)=>{
                 this.tableData = res.data;
                 console.log(this.tableData)
            })
        },

    }
</script>

<style scoped>

</style>
