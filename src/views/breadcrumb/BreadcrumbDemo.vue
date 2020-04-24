<template>
  <div>
    <hds-component-container title="breadcrumb" description="A breadcrumb is used to show hierarchy between content">
      <hds-card title="Basic">
        <div class="hds-breadcrumb">
          <a class="hds-section">
            <hds-icon name="hds-home"/>
          </a>
          <span class="hds-divider">/</span>
          <a class="hds-section">Registration</a>
          <span class="hds-divider">/</span>
          <div class="hds-active hds-section">Personal Information</div>
        </div>
      </hds-card>
      <hds-card title="Segment">
        <hds-breadcrumb :item="example1Data.items"></hds-breadcrumb>
      </hds-card>
    </hds-component-container>
  </div>
</template>
<script>
export default {
  name: 'HDSBreadcrumb',
  data () {
    return {
      example1Data: {
        home: { label: 'Home'},
        items: [
            {label:'Categories'},
            {label:'Sports'},
            {label:'Football'},
            {label:'Countries'},
            {label:'Spain'},
            {label:'F.C. Barcelona'},
            {label:'Squad'},
            {label:'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi'}
        ]
      }
    }
  }
}
</script>