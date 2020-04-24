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
    <div class="hds-grid example" style="padding: 1rem;">
      <template v-for="row in [1,2,3,4,5,6]">
        <div class="hds-row" :key="row">
          <div class="hds-column hds-size__11">
            <div class="hds-segment">
              <div class="hds-fluid hds-placeholder">
                <div class="hds-image hds-header">
                  <div class="hds-line"></div>
                  <div class="hds-line"></div>
                </div>
                <div class="hds-paragraph">
                  <div class="hds-line"></div>
                  <div class="hds-line"></div>
                  <div class="hds-line"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="hds-column hds-size__5">
            <div class="hds-segment">
              <div class="hds-placeholder hds-fluid">
                <div class="hds-paragraph">
                  <div class="hds-line"></div>
                  <div class="hds-line"></div>
                  <div class="hds-line"></div>
                </div>
                <div class="hds-paragraph">
                  <div class="hds-line"></div>
                  <div class="hds-line"></div>
                  <div class="hds-line"></div>
                </div>
              </div>
            </div>
          </div>
      </div>
      </template>
    </div>
  </div>
</template>
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
  .hds-column {
    padding: 1rem;
  }
  .hds-grid.example .hds-column .hds-segment{
    height: 20vh;
  }
  .shell{
    position: sticky;
    top: 0px;
    z-index: 101;
  }
</style>