export default {
  name: 'HDSGrid',
  render (createElement) {
    return createElement('div', {
      class: this.gridClassList
    }, this.$slots.default)
  },
  data () {
    return {
      gridClassList: {
        'hds-grid': true,
        'hds-stackable': true,
        'hds-doubling': true,
        'hds-columns__1': this.cols == 1,
        'hds-columns__2': this.cols == 2,
        'hds-columns__3': this.cols == 3,
        'hds-columns__4': this.cols == 4,
        'hds-columns__5': this.cols == 5,
        'hds-columns__6': this.cols == 6,
        'hds-columns__7': this.cols == 7,
        'hds-columns__8': this.cols == 8,
        'hds-columns__9': this.cols == 9,
        'hds-columns__10': this.cols == 10,
        'hds-columns__11': this.cols == 11,
        'hds-columns__12': this.cols == 12,
        'hds-columns__13': this.cols == 13,
        'hds-columns__14': this.cols == 14,
        'hds-columns__15': this.cols == 15,
        'hds-columns__16': this.cols == 16,
      }
    }
  },
  props: {
    cols: {
      type: Number
    },
    stackable: {
      type: Boolean
    },
    align: Boolean
  }
}