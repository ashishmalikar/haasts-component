export default {
  name: 'HDSDateInput',
  render (createElement) {
    return createElement('div', {
      class: 'hds-input'
    }, createElement('input', {
      attrs: {
        placeholder: new Date()
      }
    }))
  }
}