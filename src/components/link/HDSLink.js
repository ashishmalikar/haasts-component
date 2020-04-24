export default {
  name: 'HDSLink',
  render (createElement) {
    return createElement('div', {
      class: this.classList
    })
  },
  data () {
    return {
      classList: {
        'hds-link': true
      }
    }
  }
}