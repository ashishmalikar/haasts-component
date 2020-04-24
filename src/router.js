import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home'
import AppTemplate from '@/views/templates/AppTemplate.vue'
import ListViewTemplate from '@/views/templates/ListViewTemplate'
Vue.use(Router);

export default new Router({
  mode: 'history',
	routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/template-layouts',
      name: 'TemplateLayouts',
      component: () => import('./views/templates/TemplateLayouts.vue')
    },
    {
      path: '/app-template',
      name: 'AppTemplate',
      component: AppTemplate,
      meta: {
        isPreview: true
      }
    },
    {
      path: '/list-view-template',
      name: 'ListViewTemplate',
      component: ListViewTemplate,
      meta: {
        isPreview: true
      }
    },
    {
      path: '/accordion',
      name: 'HDSAccordion',
      component: () => import('./views/accordion/AccordionDemo.vue')
    },
    {
      path: '/button',
      name: 'HDSButton',
      component: () => import('./views/button/HDSButtonDemo.vue')
    },
    {
      path: '/breadcrumb',
      name: 'HDSBreadcrumb',
      component: () => import('./views/breadcrumb/BreadcrumbDemo.vue')
    },
    {
      path: '/layout-grid',
      name: 'LayoutGrid',
      component: () => import ('./views/layoutGrid/HDSGridDemo.vue')
    },
    {
      path: '/icon',
      name: 'HDSIcon',
      component: () => import ('./views/icon/HDSIconDemo.vue')
    },
    {
      path: '/form',
      name: 'FormDemo',
      component: () => import('./views/form/FormDemo.vue')
    },
    {
      path: '/container',
      name: 'ContainerDemo',
      component: () => import('./views/container/ContainerDemo.vue')
    },
    {
      path: '/card',
      name: 'CardDemo',
      component: () => import('./views/card/CardDemo.vue')
    },
    {
      path: '/image',
      name: 'ImageDemo',
      component: () => import('./views/image/ImageDemo.vue')
    },
    {
      path: '/input',
      name: 'HDSInputDemo',
      component: () => import('./views/input/InputDemo.vue')
    },
    {
      path: '/link',
      name: 'LinkDemo',
      component: () => import ('./views/link/LinkDemo')
    },
    {
      path: '/menu',
      name: 'MenuDemo',
      component: () => import('./views/menu/MenuDemo')
    },
    {
      path: '/select',
      name: 'SelectDemo',
      component: () => import('./views/select/SelectDemo')
    },
    {
      path: '/tab',
      name: 'HDSTab',
      component: () => import('./views/tab/TabDemo')
    }
    
  ]
})