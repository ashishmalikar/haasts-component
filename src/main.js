import Vue from 'vue'
import App from './App.vue'
import router from './router';
import '@/assets/css/hds.css'
import '@/assets/css/icon.css'
import 'prismjs'
import Prism from 'vue-prism-component'
import 'prismjs/themes/prism.css'

import * as hdsComponents from './components/button'
// import * as directives from './directives';

import { HDSAccordion, HDSAccordionItem } from '@/components/accordion'
import { HDSButton, HDSButtons } from '@/components/button'
import { HDSBreadcrumb } from '@/components/breadcrumb'
import { HDSCard } from '@/components/card'
import ComponentHeader from '@/components/ComponentHeader'
import ComponentContainer from '@/components/ComponentContainer'
import HDSContainer from '@/components/container/HDSContainer'
import HDSForm from '@/components/form/HDSForm'
import {HDSGrid, HDSColumn} from '@/components/grid'
import HDSIcon from '@/components/icon/HDSIcon'
import {HDSImage} from '@/components/image'
import {HDSInput} from '@/components/input'
import {HDSMenuBar} from '@/components/menu'

import HDSTab from '@/components/tab/HDSTab'
import HDSTabItem from '@/components/tab/HDSTabItem'

import HCheckbox from '@/components/collections/checkbox/HCheckbox'
import HSelect from '@/components/collections/dropdown/HSelect'
import HSegment from '@/components/HSegment'
import { HDSSelect } from '@/components/select'
import {HDSHeader} from '@/components/header'
import HTable from '@/components/collections/HTable'
import HDSSidebarMenu from '@/components/HDSSidebarMenu'

Vue.config.productionTip = false


// Object.values(allComponents).forEach(function(comp){
//   console.log('component naem,: '+comp.name)
//   console.log('component: ', JSON.stringify(comp))
//   Vue.component(comp.name, comp)
// })

// const install = (Vue, options = {}) => {
  // for (let key in hdsComponents) {
  //   // let _key = options.prefix ? options.prefix + key : key
  //   console.log('_key: '+key)
  //   Vue.component(key, hdsComponents[key])
  // }
// }

Vue.component('prism', Prism)

Vue.component('hds-button', HDSButton)
Vue.component('hds-buttons', HDSButtons)
Vue.component('hds-breadcrumb', HDSBreadcrumb)
Vue.component('hds-card', HDSCard)
Vue.component('hds-component-header', ComponentHeader)
Vue.component('hds-component-container', ComponentContainer)
Vue.component('hds-container', HDSContainer)
Vue.component('hds-grid', HDSGrid)
Vue.component('hds-column', HDSColumn)
Vue.component('hds-header', HDSHeader)
Vue.component('hds-icon', HDSIcon)
Vue.component('hds-image', HDSImage)
Vue.component('hds-form', HDSForm)
Vue.component('hds-tab', HDSTab)
Vue.component('hds-tab-item', HDSTabItem)
Vue.component('hds-input', HDSInput)
Vue.component('hds-menu-bar', HDSMenuBar)
Vue.component('hds-select', HDSSelect)

// // Collections
Vue.component('hds-accordion', HDSAccordion)
Vue.component('hds-accordion-item', HDSAccordionItem)
Vue.component('hds-checkbox', HCheckbox)
Vue.component('hds-dropdown', HSelect)
Vue.component('hds-segment', HSegment)
Vue.component('hds-table', HTable)
Vue.component('hds-sidebar-menu', HDSSidebarMenu)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

// export * from './mixins'
// export * from './constants'
// export * from './utils'
// export * from './install'

// const HDSUI = {
//   install(Vue, options = {}) {
//     // components
//     for (const componentName in hdsComponents) {
//       const component = hdsComponents[componentName]

//       Vue.component(component.name, component)
//     }
//   }
// }

// export default HDSUI

// if (typeof window !== 'undefined' && window.Vue) {
//   window.Vue.use(HDSUI)
// }