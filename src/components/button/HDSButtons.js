export default {
  name: 'HDSButtons',
  render (createElement) {
    return createElement('div', {
      class: 'hds-buttons'
    }, this.$slots.default)
  }
}