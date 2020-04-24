<template>
  <nav :class="menuClassList">
    <template v-for="item in items">
      <a 
      :key="item.label" 
      class="hds-item" 
      :class="{'hds-active': item.active}" 
      @click="handleClick"
      :data-value="item.id"
      href="javascript:void(0)"> 
        {{item.label}}
      </a>
    </template>
  </nav>
</template>
<script>
export default {
  name: 'HDSMenuBar',
  data () {
    return {
      menuClassList: {
        'hds-menu': true,
        'hds-red': this.activeColor === 'red',
        'hds-orange': this.activeColor === 'orange',
        'hds-yellow': this.activeColor === 'yellow',
        'hds-olive': this.activeColor === 'olive',
        'hds-green': this.activeColor === 'green',
        'hds-teal': this.activeColor === 'teal',
        'hds-blue': this.activeColor === 'blue',
        'hds-violet': this.activeColor === 'violet',
        'hds-purple': this.activeColor === 'purple',
        'hds-pink': this.activeColor === 'pink',
        'hds-brown': this.activeColor === 'brown',
        'hds-grey': this.activeColor === 'grey',
        'hds-black': this.activeColor === 'black'
      }
    }
  },
  props: {
    items: [],
    activeColor: String
  },
  created () {

  },
  methods: {
    handleClick: function (event) {
      this.$el.querySelectorAll('.hds-item').forEach(function(el){
        el.classList.remove('hds-active')
      })
      event.target.classList.add('hds-active')
      this.$emit('change', event.target.getAttribute('data-value'))
    }
  }
}
</script>