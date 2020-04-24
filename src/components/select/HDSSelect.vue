<template>
  <div>
    <label class="label">{{label}}</label>
    <div class="hds-dropdown hds-selection" tabindex="0" @focus="handleFocus" @blur="handleBlur">
      <i class="hds-dropdown hds-icon"></i>
      <div class="hds-text" :class="{ 'hds-default': !selectedText }">{{selectedText || placeholder}}</div>
      <div class="hds-menu hds-transition">
        <template v-for="option in options">
          <div class="hds-item" 
          :data-value="option.value" 
          :data-text="option.text" 
          :key="option.value"
          @click="handleValueSelect"
          :class="{ 'hds-active hds-selected': option.value === selectedValue }">
            {{option.text}}
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HDSSelect',
  props: {
    options: Array,
    placeholder: String,
    label: String
  },
  data () {
    return {
      selectedValue: String,
      selectedText: ''
    }
  },
  created () {
    this.options.forEach(option=> {
      if(option.selected) { 
        this.selectedValue = option.value
        this.selectedText = option.text
      }
    })
  },
  methods: {
    handleFocus: function (event) {
      
      event.target.classList.add('hds-active', 'hds-visible')

      let menu = event.target.querySelector('.hds-dropdown .hds-menu')

      menu.classList.add('hds-active', 'hds-visible')

      menu.style.display = 'block !important'

    },
    handleBlur: function (event) {

      let dropdown = event.target
      dropdown.classList.remove('hds-active', 'hds-visible')

      let menu = dropdown.querySelector('.hds-menu')

      menu.classList.remove('hds-active', 'hds-visible')
      menu.style.display = 'none !important'

    },
    hideMenu: function () {
      this.$el.querySelector('.hds-dropdown').blur()
    },
    handleValueSelect: function (event) {

      this.hideMenu()

      let previousSelectedValue = this.selectedValue,
      selectedValue = event.target.getAttribute('data-value'),
      selectedText = event.target.getAttribute('data-text')
      this.$emit('change', previousSelectedValue, selectedValue, selectedText)

      this.selectedValue = selectedValue
      this.selectedText = selectedText

    }
  }
}
</script>
<style>
.label {
  display: block;
  margin: 0em 0em 0.28571429rem 0em;
  color: rgba(0, 0, 0, 0.87);
  font-size: 0.92857143em;
  font-weight: bold;
  text-transform: none;
}
</style>