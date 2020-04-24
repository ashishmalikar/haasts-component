export default {
  name: 'HDSHeader',
  render (el) {
    return el('div', {
      class: this.titleClassList,
      style: {
        margin: '1rem'
      }
    }, [this.title, 
      el('div', {
        class: this.descrClassList
      }, [ this.description ])
    ])
  },
  data () {
    return  {
      titleClassList: {
        'hds-header': true,
        'hds-dividing': this.dividing === 'true',
        'hds-block': this.block,
        'hds-inverted': this.inverted
      },
      descrClassList: {
        'hds-sub-header': true
      }
    }
  },
  props: {
    title: {
      type: String
    },
    description: String,
    dividing: String,
    block: Boolean,
    inverted: Boolean
  }
}