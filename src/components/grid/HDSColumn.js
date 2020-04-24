export default {
  render (createElement) {
    return createElement('div', {
      class: this.columnClassList
    }, this.$slots.default)
  },
  data () {
    return {
      columnClassList: {
        'hds-column': true,
        'hds-size__1': this.size == 1,
        'hds-size__2': this.size == 2,
        'hds-size__3': this.size == 3,
        'hds-size__4': this.size == 4,
        'hds-size__5': this.size == 5,
        'hds-size__6': this.size == 6,
        'hds-size__7': this.size == 7,
        'hds-size__8': this.size == 8,
        'hds-size__9': this.size == 9,
        'hds-size__10': this.size == 10,
        'hds-size__11': this.size == 11,
        'hds-size__12': this.size == 12,
        'hds-size__13': this.size == 13,
        'hds-size__14': this.size == 14,
        'hds-size__15': this.size == 15,
        'hds-size__16': this.size == 16,
      }
    }
  },
  props: {
    size: {
      type: Number,
    }
  }
}