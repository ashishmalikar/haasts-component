<template>
  <div>
    <article class="hds-segment hds-inverted" style="background-color: #5b7fa3; border-radius: 0px;">
      <div class="hds-header hds-inverted">
        {{title}}
        <div class="hds-sub-header" style="margin-top: 1rem;">
          {{description}}
        </div>
      </div>
    </article>
    <div class="container" style="padding: 2rem;">
      <slot></slot>
    </div>
  </div>
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