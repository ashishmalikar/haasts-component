<template>
  <div id="app">
    <div class="hds-menu hds-borderless hds-fixed" style="background-color: #e5e4e2;">
        <div class="hds-item">
          <hds-header>Haasts Component Library</hds-header>
        </div>
        <div class="hds-right-menu">
          <div class="hds-item">
            <i class="fas fa-user-circle"></i>
          </div>
        </div>
    </div>
    <hds-container style="margin-top: 4rem;" fluid=true>
      <div class="hds-grid hds-stackable">
        <div class="hds-column hds-size__2" style="padding: 0px; position: sticky !important; top: 5rem; background-color: #e5e4e2;">
          <hds-sidebar-menu></hds-sidebar-menu>
        </div>
        <div class="hds-column hds-size__10">
          <hds-segment id="layout" title="Layout" subTitle="Sub Title">
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
            <template slot="actions">
              <button class="hds-button hds-mini hds-primary hds-basic">Click Here</button>
            </template>
          </hds-segment>

          <hds-segment title="Elements" id="elements">
            <!-- Buttons -->
            <hds-header>Buttons</hds-header>
            <hds-divider/>
            <h4 class="hds-header hds-dividing">Variants</h4>
            <hds-button label="Default" variant="default"></hds-button>
            <hds-button label="Primary" variant="primary"></hds-button>
            <hds-button label="Secondary" variant="secondary"></hds-button>
            <hds-button label="Negative" variant="negative"></hds-button>

            <h4 class="hds-header hds-dividing">Colors</h4>
            <hds-button color="red" label="Red"></hds-button>
            <hds-button color="orange" label="Orange"></hds-button>
            <hds-button color="yellow" label="Yellow"></hds-button>
            <hds-button color="olive" label="Olive"></hds-button>
            <hds-button color="green" label="Green"></hds-button>
            <hds-button color="teal" label="Teal"></hds-button>
            <hds-button color="blue" label="Blue"></hds-button> 
            <br><br>
            <hds-button color="violet" label="Violet"></hds-button>
            <hds-button color="purple" label="Purple"></hds-button>
            <hds-button color="pink" label="Pink"></hds-button>
            <hds-button color="brown" label="Brown"></hds-button>
            <hds-button color="grey" label="Grey"></hds-button>
            <hds-button color="black" label="Black"></hds-button>
            <h4 class="hds-header hds-dividing">Size</h4>
            <hds-button label="mini" size="mini" variant=""></hds-button>
            <hds-button label="tiny" size="tiny"></hds-button>
            <hds-button label="small" size="small"></hds-button>
            <hds-button label="medium" size="medium"></hds-button>
            <hds-button label="large" size="large"></hds-button>

            <!-- Icons -->
            <hds-header>Icons</hds-header>
            <hds-divider/>
            <hds-icon name="user"/>
          </hds-segment>
          <hds-segment title="Collections">
            <hds-header>Accordion</hds-header>
            <hds-divider/>
            <hds-accordion>
              <hds-accordian-section label="Accordion 1">Accordion 1</hds-accordian-section>
              <hds-accordian-section label="Accordion 1">Accordion 1</hds-accordian-section>
              <hds-accordian-section label="Accordion 1">Accordion 1</hds-accordian-section>
            </hds-accordion>
            <!-- Checkboxes -->
            <hds-header>Checkbox</hds-header>
            <hds-divider/>
            <hds-checkbox label="Check me" title="Check me" name="example1"></hds-checkbox> <br><br>
            <hds-checkbox label="Radio Checkbox" title="Check me" name="example2" variant="radio"></hds-checkbox> <br><br>
            <hds-checkbox label="Slider" title="" variant="slider"></hds-checkbox> <br><br>
            <hds-checkbox label="Toggle" title="" variant="toggle"></hds-checkbox>
            <!-- Dropdown -->
            <hds-header>Dropdown</hds-header>
            <hds-divider/>
            <hds-dropdown>
              
            </hds-dropdown>
            <hds-header>Table</hds-header>
            <hds-table></hds-table>
          </hds-segment>
          <hds-segment title="Views"></hds-segment>
          <hds-segment title="Modules"></hds-segment>
        </div>
        <div class="hds-column hds-size__4" style="padding: 0px; height: 100%;">
          <div class="hds-menu hds-vertical hds-fluid" style="height: 100%;">
          </div>
        </div>
      </div>
    </hds-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      msg: 5
    }
  },
  components: {
    
  }
}
</script>

<style lang="scss">

</style>
