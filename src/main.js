import Vue from 'vue';
import Vuetify from 'vuetify';
import './registerServiceWorker';
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import VDateRange from 'vuetify-daterange-picker';
import 'vuetify-daterange-picker/dist/vuetify-daterange-picker.css';

import router from './router';
import store from './store';
import App from './App.vue';


Vue.use(Vuetify);
Vue.use(VDateRange);
Vue.config.productionTip = false;

store.subscribe((mutation, state) => {
  localStorage.setItem('store', JSON.stringify(state));
});

new Vue({
  router,
  store,
  beforeCreate() {
    this.$store.commit('initialiseStore');
  },
  render: h => h(App),
}).$mount('#app');
