<template>
  <div>
    <hds-component-container title="Buttons" description="A button indicates a possible user action">
      <hds-segment title="Basic Buttons">
        <HDSButton @click="handleClick" label="Primary Button" variant="primary"></HDSButton>
        <hds-button label="Primary Basic Button" variant="primary" basic="true"></hds-button>
        <hds-button label="Basic Button" basic="true"></hds-button>
      </hds-segment>
      <hds-segment title="Buttons With Icon">
        <hds-button label="Add Student" variant="primary" icon="hds-cart"/>
      </hds-segment>
      <hds-segment title="Variants">
        <hds-header title="Solid"/>
        <hds-button label="Primary" variant="primary">Primary</hds-button>
        <hds-button label="Secondary" variant="secondary">Secondary</hds-button>
        <hds-button label="Positive" variant="positive">Positive</hds-button>
        <hds-button label="Negative" variant="negative">Negative</hds-button>
        <hds-header title="Basic"/>
        <hds-button basic="true" label="Primary" variant="primary">Primary</hds-button>
        <hds-button basic="true" label="Secondary" variant="secondary">Secondary</hds-button>
        <hds-button basic="true" label="Positive" variant="positive">Positive</hds-button>
        <hds-button basic="true" label="Negative" variant="negative">Negative</hds-button>
      </hds-segment>
      <hds-segment title="Colors">
        <hds-button basic="true" label="Red" variant="red">      </hds-button>
        <hds-button basic="true" label="Orange" variant="orange"></hds-button>
        <hds-button basic="true" label="Yellow" variant="yellow"></hds-button>
        <hds-button basic="true" label="Olive" variant="olive"> </hds-button>
        <hds-button basic="true" label="Green" variant="green"> </hds-button>
        <hds-button basic="true" label="Teal" variant="teal">  </hds-button>
        <hds-button basic="true" label="Blue" variant="blue">  </hds-button>
        <hds-button basic="true" label="Violet" variant="violet"></hds-button>
        <hds-button basic="true" label="Purple" variant="purple"></hds-button>
        <hds-button basic="true" label="Pink" variant="pink">  </hds-button>
        <hds-button basic="true" label="Brown" variant="brown"> </hds-button>
        <hds-button basic="true" label="Grey" variant="grey">  </hds-button>
        <hds-button basic="true" label="Black" variant="black"> </hds-button>
      </hds-segment>
      <hds-segment title="Inverted" inverted="true" v-if="false">
        <hds-header title="Colors"/>
          <hds-button inverted="true" basic="true" label="Red" variant="red">      </hds-button>
          <hds-button inverted="true" basic="true" label="Orange" variant="orange"></hds-button>
          <hds-button inverted="true" basic="true" label="Yellow" variant="yellow"></hds-button>
          <hds-button inverted="true" basic="true" label="Olive" variant="olive"> </hds-button>
          <hds-button inverted="true" basic="true" label="Green" variant="green"> </hds-button>
          <hds-button inverted="true" basic="true" label="Teal" variant="teal">  </hds-button>
          <hds-button inverted="true" basic="true" label="Blue" variant="blue">  </hds-button>
          <hds-button inverted="true" basic="true" label="Violet" variant="violet"></hds-button>
          <hds-button inverted="true" basic="true" label="Purple" variant="purple"></hds-button>
          <hds-button inverted="true" basic="true" label="Pink" variant="pink">  </hds-button>
          <hds-button inverted="true" basic="true" label="Brown" variant="brown"> </hds-button>
          <hds-button inverted="true" basic="true" label="Grey" variant="grey">  </hds-button>
          <hds-button inverted="true" basic="true" label="Black" variant="black"> </hds-button>
      </hds-segment>
      <hds-segment title="Button Group">
        <hds-buttons>
          <hds-button icon="hds-align hds-left"/>
          <hds-button icon="hds-align hds-center"/>
          <hds-button icon="hds-align hds-right"/>
          <hds-button icon="hds-align hds-justify"/>
        </hds-buttons>
      </hds-segment>
    </hds-component-container>
  </div>
</template>
<script>
export default {
  data () {
    return {
      variant: 'default'
    }
  },
  methods: {
    handleClick (event) {
      console.log('Clicked: '+JSON.stringify(event.target.getAttribute('class')))
    }
  }
}
</script>
<style scoped>
.hds-segment {
  border-radius: 0px;
  
}
</style>