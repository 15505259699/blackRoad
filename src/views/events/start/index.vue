<template>
  <div class="foo">
    <stable :tData="tableData" :lData="labelData"></stable>
  </div>
</template>

<script>
  import tableOne from "@/components/dfTable/tableOne";
  import {formatDate} from "@/utils/Date"
    export default {
        name: "startevent",
        data(){
            return{
                msg:"正在进行中的事务",
                tableData: [],
                labelData:[{
                      pr:'id',
                      label:'序号',
                },{
                    pr: 'startime',
                    label: '开始事件'
                },{
                    pr: 'finishtime',
                    label: '结束时间'
                },{
                    pr: 'name',
                    label: '事件名称'
                },{
                    pr: 'user',
                    label: '参与者'
                },{
                    pr: 'state',
                    label: '状态'
                },{
                    pr: 'remark',
                    label: '备注'
                }]
            }
        },
        components:{
            "stable":tableOne
        },
        computed:{
        },
        created(){
            this.axios.get("/eventData/selectAll").then((res)=>{
                for(let arr of res.data){
                     console.log(arr)
                    arr.startime = formatDate(arr.startime);
                    arr.finishtime = formatDate(arr.finishtime);
                    this.tableData.push(arr);
                }
            })
        }
    }
</script>

<style scoped>
  .foo{
    position: relative;
    top: 10%;
    left: 10%;
    width: 80%;
  }

</style>
