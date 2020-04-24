<template>
  <form 
  action="javascript:void(0)" 
  @submit="handleFormSubmit($event)" 
  :class="formClassList">
  <header class="hds-header hds-dividing">
    {{title}}
    <div class="hds-sub-header">{{description}}</div>
  </header>
    <slot></slot>
  </form>
</template>
<script>
export default {
  name: 'HDSForm',
  props: {
    title: {
      type: String
    },
    description: String
  },
  data () {
    return {
      formClassList: {
        'hds-form': true
      }
    }
  },
  methods: {
    handleFormSubmit: function (event) {
      this.$emit('submit', event)
    }
  }
}
</script>