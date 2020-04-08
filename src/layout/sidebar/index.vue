<template>
  <div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="this.$route.path"
        router>
        <sidebar-item v-for="route in items" :key="route.index" :item="route" ></sidebar-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
    import item from './item'
    import sidebaritmes from '@/config/sidebar-items'
    export default {
        name: 'm',
        data() {
           return{
               items : sidebaritmes
           }
        },
        components: {
            'sidebarItem':item
        }
    }
</script>

<style scoped>
  .el-menu {
    background: rgba(255, 255, 255, 0);
  }
</style>
