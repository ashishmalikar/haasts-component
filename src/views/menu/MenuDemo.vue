<template>
  <hds-component-container title="Menu Bar" description="">
    <hds-card title="Basic">
      <hds-menu-bar :items="items"></hds-menu-bar>
    </hds-card>
    <hds-card title="Colored">
      <hds-header title="Orange"/>
      <hds-menu-bar :items="items" active-color="orange" @change="handleChange"></hds-menu-bar>
      <hds-header title="Blue "/>
      <hds-menu-bar :items="items" active-color="blue"></hds-menu-bar>
    </hds-card>
  </hds-component-container>
</template>
<script>
export default {
  name: 'HDSMenuDemo',
  data () {
    return {
      items: [
        { label: 'Tab 1', id: 'Tab1'},
        { label: 'Tab 2', active: true },
        { label: 'Tab 3'},
        { label: 'Tab 4'},
      ]
    }
  },
  methods: {
    handleChange (newValue) {
      console.log('Change value: ', newValue)
    }
  }
}
</script>