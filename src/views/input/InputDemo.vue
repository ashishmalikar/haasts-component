<template>
  <hds-component-container title="Input" description="An input is a field used to elicit a response from a user">
    <hds-card title="Basic">
      <hds-input placeholder="Input" type="text" label="Name"/>
    </hds-card>
    <hds-card title="Date Type">
      <hds-input placeholder="Input" type="date"/>
    </hds-card>
  </hds-component-container>
</template>
<script>
export default {
  data () {
    return {
      value: 'Some value'
    }
  }
}
</script>