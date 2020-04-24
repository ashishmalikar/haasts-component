<template>
  <div class="hds-checkbox" :class="classes">
    <input type="checkbox" :name="name" :title="title">
    <label>{{label}}</label>
  </div>
</template>
<script>
export default {
  name: 'HCheck',
  data () {
    return {
      classes: {
        'hds-radio': this.variant === 'radio',
        'hds-slider': this.variant === 'slider',
        'hds-toggle': this.variant === 'toggle'
      }
    }
  },
  props: {
    label: {
      type: String
    },
    name: {
      type: String
    },
    title: {
      type: String
    },
    variant: {
      type: String
    }
  }
}
</script>