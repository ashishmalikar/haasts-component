<template>
  <hds-component-container title="Accordion" description="">
    <div class="hds-accordion hds-styled hds-fluid">
      <div class="hds-active hds-title hds-block">
        <i class="hds-dropdown hds-icon"></i>
        What is a dog?
      </div>
      <div class="hds-active hds-content">
        <p>A dog is a type of domesticated animal. 
          Known for its loyalty and faithfulness, 
          it can be found as a welcome guest in many households across the world.</p>
      </div>
    </div>
  </hds-component-container>
</template>
<script>
export default {
  name: 'AccordionDemo'
}
</script>
<style scoped>
  .hds-title{
    /* background-color: cornflowerblue !important; */
  }
</style>