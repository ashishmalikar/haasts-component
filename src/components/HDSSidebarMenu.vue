<template>
  <div class="hds-menu hds-vertical hds-fluid" style="background-color: #e5e4e2; position: sticky; top: 3.5rem;">
    <template v-for="item in items">
      <div :key="item.id" class="hds-item">
        {{item.label}}
      </div>
    </template>
    <div class="hds-item">
      <a href="layout">
        Layout
      </a>
    </div>
    <div class="hds-item">
      <hds-header>Elements</hds-header>
      <div class="hds-list">
        <a class="hds-item" href="javascript:void(0)">Buttons</a>
        <a class="hds-item" href="javascript:void(0)">Icons</a>
      </div>
    </div>
    <div class="hds-item">
      <a href="">
      Collections
      </a>
    </div>
    <div class="hds-item">
      <a href="">Views</a>
    </div>
    <div class="hds-item">
      <hds-header>Modules</hds-header>
      <div class="hds-list">
        <a href="javascript:void(0)" class="hds-item">Accordion</a>
        <a href="javascript:void(0)" class="hds-item">Checkbox</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HDSSidebarMenu',
  data () {
    return {
      items: [
        {
          label: 'Layout'
        }
      ]
    }
  }
}
</script>