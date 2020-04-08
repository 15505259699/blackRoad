<template>
  <div>
    <el-table
      :data="tData"
      style="width: 100%">
      <el-table-column v-for="ldata in lData" :prop="ldata.pr" :label="ldata.label" :key="lData.index"></el-table-column>
      <el-table-column>
        <el-button
        size="mini"
        @click="handleEdit(scope.$index, scope.row)">{{btn.edit}}</el-button>
        <el-button
          size="mini"
          @click="handleDelete(scope.$index, scope.row)">{{btn.delete}}</el-button></el-table-column>
    </el-table>
  </div>
</template>

<script>
    export default {
        name: "tableButton",
        props:{
            tData:{
                type: Array,
                required: true
            },
            lData:{
                type:Array,
                required: true
            },
            btn:{
                type:Object,
                required:true
            }
        },
        methods: {
            handleClick(row) {
                console.log(row);
            }
        }
    }
</script>

<style scoped>

</style>
