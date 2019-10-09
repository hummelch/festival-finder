import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import ListResult from './views/ListResult.vue';
import MapResult from './views/MapResult.vue';
import CalendarResult from './views/CalendarResult.vue';
import ResultDetail from './views/ResultDetail.vue';
import About from './views/About.vue';
import LegalNotice from './views/LegalNotice.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/list/:bands/:genre',
      name: 'list',
      component: ListResult,
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: CalendarResult,
    },
    {
      path: '/map',
      name: 'map',
      component: MapResult,
    },
    {
      path: '/detail/:name',
      name: 'detail',
      component: ResultDetail,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/legal-notice',
      name: 'legalNotice',
      component: LegalNotice,
    },
  ],
});
