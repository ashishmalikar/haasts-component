<template>
  <hds-component-container title="Tabs" description="">
    <hds-tab>
      <hds-tab-item name="Tab 1">
        This is tab 1 content
      </hds-tab-item>
      <hds-tab-item name="Tab 2" isActive="true">
        This is tab 2 content
      </hds-tab-item>
      <hds-tab-item name="Tab 3">ddd</hds-tab-item>
      <hds-tab-item name="Tab 4">dd</hds-tab-item>
      <hds-tab-item name="Tab 5">ddd</hds-tab-item>
    </hds-tab>
  </hds-component-container>
</template>
<script>
export default {
  name: 'TabDemo',
  computed: {
    tabs () {
      let tabs = []
      for(var i=0; i< 15; i++) {
        tabs.push({
          label: 'Tab '+ (i+1),
          isActive: i == 5
        })
      }
      return tabs
    }
  }
}
</script>
<style scoped>
.hds-menu .hds-item{
  min-width: 75px;
}
.hds-menu .hds-item.hds-active {
  border-bottom: solid #5b7fa3 3px;
}
</style>