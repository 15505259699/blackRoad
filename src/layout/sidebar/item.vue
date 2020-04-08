<template>
  <div>
    <el-menu-item v-if="IsChild(item)" :index="item.path">
      <i :class="item.meta.icon"></i>
      <span>{{item.meta.title}}</span>
    </el-menu-item>

    <el-submenu v-else :index="item.index">
      <template slot="title">
        <i :class="item.meta.icon"></i>
        <span>{{item.meta.title}}</span>
      </template>
      <el-menu-item
        v-for="child in item.children"
        :index="child.path"
        :key="child.path">
        <i :class="child.meta.icon"></i>
        <span>{{child.meta.title}}</span>
      </el-menu-item>
    </el-submenu>
  </div>
</template>

<script>
    export default {
        name: "sidebaritem",
        props: {
            item: {
                type: Object,
                required: true
            }
        },
        methods:{
            IsChild(item){
                if(item.children == null){
                    return true
                }else{
                    return false
                }
            }
        }
    }
</script>

<style scoped>

</style>
