import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Drugs from './components/Drugs.vue';
import Certifiers from './components/Certifiers.vue';
import Users from './components/Users.vue';
import Pharmacies from './components/Pharmacies.vue';
import DrugsList from './components/DrugsList.vue';
import CertsList from './components/CertifiersList.vue';
import UsersList from './components/UsersList.vue';
import PharmsList from './components/PharmList.vue';
import './plugins/element.js';

Vue.config.productionTip = false;

Vue.use(VueRouter)


const routes = [{
    path: '/drugs',
    component: Drugs
  },
  {
    path: '/drugs/all',
    component: DrugsList
  },
  {
    path: '/certifiers',
    component: Certifiers
  },
  {
    path: '/certifiers/all',
    component: CertsList
  },
  {
    path: '/users',
    component: Users
  },
  {
    path: '/users/all',
    component: UsersList
  },
  {
    path: '/pharmacies',
    component: Pharmacies
  },
  {
    path: '/pharmacies/all',
    component: PharmsList
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
}).$mount('#app');
