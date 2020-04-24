<template>    
  <article class="hds-segment hds-inverted">
    <div class="hds-header hds-inverted">
      {{title}}
      <div class="hds-sub-header" style="margin-top: 1rem;">
        {{description}}
      </div>
    </div>
  </article>
</template>
<script>
export default {
  name: 'ComponentHeader',
  props: {
    title: String,
    description: String
  }
}
</script>
<style scoped>
  .hds-segment{
    background-color: #5b7fa3;
    border-radius: 0px;
  }
</style>