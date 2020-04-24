export default {
  name: 'HDSCard',
  render (createElement) {
    return createElement('div', {
      class: 'hds-card hds-fluid'
    }, [
      createElement('div', {
        class: 'hds-content'
      }, [
        createElement('header', {
          class: 'hds-header hds-left-floated'
        }, [this.title, 
            createElement('div', {class: 'hds-sub-header'}, this.description)
        ])
      ]),
      createElement('div', {
        class: 'hds-content hds-fluid'
      }, this.$slots.default),
      createElement('div', {
        class: 'hds-extra hds-content',
        style: {
          'text-align': 'right'
        }
      }, this.$slots.actions),
    ])
  },
  data () {
    return {
      
    }
  },
  props: {
    title: String,
    description: String
  }
}

