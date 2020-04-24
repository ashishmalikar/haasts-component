export default {
  name: 'HDSContainer',
  render (createElement) {
    return createElement('div', {
      class: this.classList
    }, this.$slots.default)
  },
  data () {
    return {
      classList: {
        'hds-container hds-fluid': true,
      }
    }
  },
  props: {
    fluid: {
      type: Boolean
    }
  }
}