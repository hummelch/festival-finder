import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';


Vue.use(Vuex);
Vue.use(VueAxios, axios);

const store = new Vuex.Store({
  state: {
    selectedFilters: {
      genres: [],
      bands: [],
      dateRange: '',
    },
    filters: {
    },
  },

  getters: {
    getSelectedFilters: state => state.selectedFilters,
    getFilters: state => state.filters,
  },
  mutations: {
    setLoadedFilters(state, filters) {
      state.filters = filters;
    },
    setSelectedFiltersFor(state, key, value) {
      state.selectedFilters[key] = value;
    },
    setSelectedFilters(state, selectedFilters) {
      state.selectedFilters = selectedFilters;
    },
    initialiseStore(state) {
      if (localStorage.getItem('store')) {
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem('store'))),
        );
      }
    },
  },
  actions: {
    loadFilters({ commit }) {
      return axios
        .get('http://localhost:3000/filters')
        .then((res) => {
          const filters = res.data;
          commit('setLoadedFilters', { filters });
        }).catch((err) => {
          console.log(err);
        });
    },
  },
});
export default store;
