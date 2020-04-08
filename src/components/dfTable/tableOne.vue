<template>
  <div>
    <el-table
      :data="tData"
      style="width: 100%">
      <el-table-column v-for="ldata in lData" :prop="ldata.pr" :label="ldata.label" :key="lData.index"></el-table-column>
    </el-table>
  </div>
</template>

<script>
    export default {
        name: "tableOne",
        props:{
            tData:{
                type: Array,
                required: true
            },
            lData:{
                type:Array,
                required: true
            }
        },
        created() {
            // console.log(tableData);
        }
    }
</script>

<style scoped>

</style>
