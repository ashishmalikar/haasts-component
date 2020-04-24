<template>
  <div id="app">
    <div v-if="isPreview">
      <router-view></router-view>
    </div>
    <div v-else>
      <hds-navigation></hds-navigation>
      <div class="hds-grid" style="height: 100%;">
        <div class="hds-column hds-size__2" style="padding: 0px;">
          <hds-sidebar-menu></hds-sidebar-menu>
        </div>
        <div class="hds-column hds-size__14" style="padding: 0px; padding-right: 1rem;">
          <div class="router-container">
            {{isPreview}}
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HDSNavigation from '@/HDSNavigation'
import HDSSidebarMenu from '@/HDSSidebarMenu'
export default {
  name: 'App',
  data () {
    return {
      isPreview: this.$route.meta.isPreview
    }
  },
  created () {
    console.log('Is Preview: '+this.isPreview)
  },
  components: {
    'hds-navigation': HDSNavigation,
    'hds-sidebar-menu': HDSSidebarMenu
  }
}
</script>
<style scoped>
#app{
  background-color: rgba(243, 242, 247, 0.555);
}
.router-container {
  height: 93vh;
  overflow-y: auto;
}
</style>