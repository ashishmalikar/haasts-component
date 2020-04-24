<template>
  <div class="hds-menu hds-top-attached hds-borderless hds-inverted">
    <div class="hds-item hds-header">
      <img src="@/assets/logo.png" alt="">
    </div>
    <div class="hds-right-menu">
      <router-link to="./getstarted" class="hds-item">Get Started</router-link>
      <router-link to="./documentation" class="hds-item">Documentation</router-link>
      <router-link to="./template-layouts" class="hds-item">Layouts</router-link>
      <router-link to="./resources" class="hds-item">Resources</router-link>
    </div>
  </div>
</template>
<style scoped>
.hds-menu.hds-top-attached{
  background-color: #354a5f;
}
</style> 