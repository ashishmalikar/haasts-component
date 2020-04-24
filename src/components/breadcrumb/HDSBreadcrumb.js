export default {
  name: 'HDSBreadcrumb',
  render (createElement) {
    return createElement('div', {
      class: 'hds-breadcrumb'
    },)
  },
  props: {
    items: []
  }
}