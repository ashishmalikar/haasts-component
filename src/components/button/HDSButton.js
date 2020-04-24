export default {
  name: 'HDSButton',
  render (createElement) {
    return createElement('button', {
      class: this.btnClasses,
      on: {
        click: this.onClick
      }
    }, [ 
      createElement('i', {
        class: this.iconClassList
      }),
      this.label
    ])
  },
  data () {
    return {
      btnClasses: {
        'hds-button': true,
        'hds-inverted': this.inverted,
        'hds-primary': this.variant === 'primary',
        'hds-secondary': this.variant === 'secondary',
        'hds-positive': this.variant === 'positive',
        'hds-negative': this.variant === 'negative',
        'hds-mini': this.size === 'mini',
        'hds-tiny': this.size === 'tiny',
        'hds-small': this.size === 'small',
        'hds-medium': this.size === 'medium', 
        'hds-large': this.size === 'large',
        'hds-red': this.variant === 'red',
        'hds-orange': this.variant === 'orange',
        'hds-yellow': this.variant === 'yellow',
        'hds-olive': this.variant === 'olive',
        'hds-green': this.variant === 'green',
        'hds-teal': this.variant === 'teal',
        'hds-blue': this.variant === 'blue',
        'hds-violet': this.variant === 'violet',
        'hds-purple': this.variant === 'purple',
        'hds-pink': this.variant === 'pink',
        'hds-brown': this.variant === 'brown',
        'hds-grey': this.variant === 'grey',
        'hds-black': this.variant === 'black',
        'hds-basic': this.basic === 'true',
        'hds-icon': this.icon,
      },
      iconClassList: {
        'hds-icon': this.icon
      }
    }
  },
  created () {
    this.iconClassList[this.icon] = true
  },
  props: {
    label: String,
    title: String,
    tabindex: Number,
    variant: {
      type: String,
      default: 'default'
    },
    inverted: Boolean,
    size: {
      type: String
    },
    basic: String,
    icon: String
  },
  methods: {
    onClick: function (event) {
      this.$emit('click', event)
    }
  }
}