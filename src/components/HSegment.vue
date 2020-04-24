<template>
  <div class="hds-card hds-fluid">
    <div class="hds-content">
      <header class="hds-header hds-left-floated">
          {{title}}
          <div class="hds-sub-header">{{description}}</div>
      </header>
    </div>
    <div class="hds-content hds-fluid">
        <slot></slot>
      </div>
    <div class="hds-extra hds-content" style="text-align: right;">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HSegment',
  data () {
    return {
      
    }
  },
  props: {
    title: String,
    description: String
  }
}
</script>