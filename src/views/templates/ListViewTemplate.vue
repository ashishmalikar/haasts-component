<template>
  <div>
    <nav class="shell">
      <nav class="hds-menu hds-primary hds-top-attached hds-borderless">
        <a href="javascript:void(0)" class="hds-item">
          <hds-icon name="hds-cloud"/>
        </a>
        <div class="hds-right-menu">
          <div class="hds-item">
            <hds-icon name="hds-user hds-circle" size=""/>
          </div>
        </div>
      </nav>
      <nav class="hds-menu hds-top-attached hds-tiny hds-inverted tab-menu">
        <div class="hds-item">
          <hds-icon name="hds-th" size=""/>
        </div>
        <div class="hds-item">
          <hds-icon name="hds-home" size=""/>
        </div>
        <div class="hds-item tabs-container">
          <nav class="hds-menu hds-tiny tabs-menu">
            <template v-for="tab in [1,2,3,4,5,6,7,8]">
              <div :key="tab" class="hds-item" :class="{'hds-active': tab == 3}">
                Tab {{tab}}
              </div>
            </template>
          </nav>
        </div>
      </nav>
    </nav>
    <div class="container">
      <div class="hds-segment hds-top-attached" style="background-color: #e5e4e2; padding: 0px;">
        <div class="hds-menu hds-tiny hds-borderless header" style="background-color: #e5e4e2; border: none; box-shadow: none; ">
          <div class="hds-item">
            <select name="" id="" class="hds-dropdown">
              <option value="recent" selected>Recently Viewed</option>header
              <option value="allRecords">All Records</option>header
            </select>
          </div>
          <div class="hds-right-menu">
            <div class="hds-item">
              <div class="hds-buttons hds-tiny">
                <button class="hds-button hds-basic hds-tiny hds-primary">
                  New
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="hds-menu hds-tiny hds-borderless" style="background-color: #e5e4e2; border: none; box-shadow: none;">
          <div class="hds-item">
            <div class="hds-meta">
              Information Regarding list
            </div>
          </div>
          <div class="hds-right-menu">
            <div class="hds-item">
              <div class="hds-search">
                <div class="hds-icon hds-input">
                  <i class="hds-icon hds-search"></i>
                  <input type="text" placeholder="Search">
                </div>
              </div>
            </div>
            <div class="hds-item">
              <button class="hds-button hds-icon hds-compact hds-basic">
                <i class="hds-icon hds-setting"></i>
              </button>
            </div>
            <div class="hds-item">
              <button class="hds-button hds-icon hds-compact hds-basic">
                <i class="hds-icon hds-refresh"></i>
              </button>
            </div>
            <div class="hds-item">
              <button class="hds-button hds-icon hds-compact hds-basic">
                <i class="hds-icon hds-pencil"></i>
              </button>
            </div>
            <div class="hds-item">
              <div class="hds-buttons hds-basic">
                <button class="hds-button hds-icon hds-compact hds-basic"> 
                  <i class="hds-icon hds-pie hds-chart"></i>
                </button>
                <button class="hds-button hds-icon hds-compact hds-basic"> 
                  <i class="hds-icon hds-filter"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hds-segment hds-bottom-attached" style="padding: 0px; height: 78vh; overflow-y: auto;">
        <table class="hds-table hds-basic hds-small hds-striped">
          <thead style="position:sticky !important; top: 0px;">
            <tr>
              <th>Roll No</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <template v-for=" row in 50">
              <tr :key="row">
                <td>{{row}}</td>
                <td>
                  <a href="javascript:void(0)">{{'Name '+ row}}</a>
                </td>
                <td>{{row}}</td>
                <td>Type value</td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ListViewTemplate'
}
</script>
<style scoped>
.hds-menu {
    border-radius: 0px;
    margin: 0px;
  }
  .hds-menu.hds-primary {
    background-color: #e5e4e2;
  }
  .hds-menu.tab-menu{
    background-color: #354a5f
  }
  .hds-menu .hds-item{
    cursor: pointer;
  }
  .hds-item.tabs-container{
    padding: 0px
  }
  .hds-menu.tabs-menu {
    background: transparent
  }
  .hds-menu.tabs-menu .hds-item.hds-active{
    /* background-color: rgba(255, 127, 80, 0.144); */
    border-bottom: solid orange 3px;
  }
  .shell{
    position: sticky;
    top: 0px;
    z-index: 101;
  }
  .container {
    margin: 1rem;
  }
  .header > .hds-item,
  .header > .hds-right-menu .hds-item{
    padding: 10px;
  }
</style>