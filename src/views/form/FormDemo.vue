<template>
  <div>
    <hds-component-header title="Form" description="HDS Form Description"/>
    <div class="hds-container hds-fluid hds-padded" style="padding: 2rem;">
      <hds-form @submit="handleSubmit" title="Basic Form Demo">
        <div class="hds-field">
          <label for="">Name</label>
          <input type="text" placeholder="Full Name">
        </div>
      </hds-form>
    </div>
  </div>
</template>