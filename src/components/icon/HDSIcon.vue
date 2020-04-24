<template>
  <i :class="iconClassList"></i>
</template>
<script>
export default {
  name: 'HDSIcon',
  props: {
    name: {
      type: String
    },
    size: {
      type: String
    }
  },
  data () {
    return {
      iconClassList: {
        'hds-icon': true,
        'hds-tiny': this.size === 'tiny',
        'hds-small': this.size === 'small',
        'hds-medium': this.size === 'medium',
        'hds-large': this.size === 'large',
        'hds-big': this.size === 'big',
        'hds-huge': this.size === 'huge',
      }
    }
  },
  created () {
    this.iconClassList[this.name] = true
  }
}
</script>