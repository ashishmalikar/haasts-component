<template>
  <hds-component-container title="Select" description="">
    <hds-card title="Basic">
      <hds-select label="Basic Label" :options="options" placeholder="Select Option" @change="handleChange"></hds-select>
    </hds-card>
  </hds-component-container>
</template>
<script>
export default {
  name: 'SelectDemo',
  data () {
    return {
      options: [
        { text: 'Option 1', value: 'Option1' },
        { text: 'Option 2', value: 'Option2', selected: true },
        { text: 'Option 3', value: 'Option3' },
        { text: 'Option 4', value: 'Option4' },
        { text: 'Option 5', value: 'Option5' }
      ]
    }
  },
  methods: {
    handleChange (previousValue, newValue, newText) {
      console.log('Precious Value: '+previousValue)
      console.log('New Selected Value: ', newValue)
    }
  }
}
</script>