import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Drugs from './components/Drugs.vue'
import Certifiers from './components/Certifiers.vue'
import Users from './components/Users.vue'
import Pharmacies from './components/Pharmacies.vue'
import './plugins/element.js'

Vue.config.productionTip = false

Vue.use(VueRouter)


const routes = [
  {
    path: '/drugs',
    component: Drugs
  },
  {
    path: '/certifiers',
    component: Certifiers
  },
  {
    path: '/users',
    component: Users
  },
  {
    path: '/pharmacies',
    component: Pharmacies
  },
  {
    path: '*',
    component: Drugs
  }
];

const router = new VueRouter({
  routes // short for `routes: routes`
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
