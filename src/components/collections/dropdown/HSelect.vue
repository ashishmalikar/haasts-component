<template>
  <div class="hds-dropdown hds-selection" tabindex="0" @focus="handleFocus" @blur="handleBlur">
    <input type="hidden" v-model="selected">
    <i class="dropdown icon"></i>
    <div class="hds-default hds-text">{{selected}}</div>
    <div class="hds-menu" v-if="isVisible">
      <div class="hds-item" data-value="1" style="">Male</div>
      <div class="hds-item" data-value="0">Female</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HSelect',
  data () {
    return {
      selected: this.default,
      isVisible: true
    }
  },
  props: {
    default: {
      type: String
    }
  },
  mounted () {
    this.initSelectEvent()
  },
  methods: {
    initSelectEvent: function () {
      document.querySelectorAll('.hds-dropdown .hds-menu .hds-item').forEach((ele) => {
        ele.addEventListener('click', (event)=>{
          let value = event.target.getAttribute('data-value')
          this.selected = value
          ele.dispatchEvent(new Event("blur"));
        })
      })
    },
    handleFocus: function () {
      document.getElementsByClassName('hds-dropdown').forEach(function(ele){
        ele.classList.add('hds-active', 'hds-visible')
      })
      document.querySelectorAll('.hds-dropdown .hds-menu').forEach(function(ele){
        ele.classList.add('hds-visible', 'hds-transition')
        ele.style.display = 'block !important'
      })
    },
    handleBlur: function () {
      document.getElementsByClassName('hds-dropdown').forEach(function(ele){
        ele.classList.remove('hds-active', 'hds-visible')
      })
      document.querySelectorAll('.hds-dropdown .hds-menu').forEach(function(ele){
        ele.classList.remove('hds-visible', 'hds-transition')
        ele.style.display = 'none !important'
      })
    }
  }
}
</script>