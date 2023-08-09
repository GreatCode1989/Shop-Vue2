import Vue from 'vue'
import VueRouter from 'vue-router'
import CatalogCommon from '../components/Catalog/CatalogCommon.vue';
import CardUser from '../components/Cart/CardUser.vue'
import MainPage from '../components/main-page/MainPage.vue'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: 'mainPage',
    component: MainPage
  
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: CatalogCommon
  
  },
  {
    path: '/card',
    name: 'card',
    component: CardUser,
    props: true
  
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
