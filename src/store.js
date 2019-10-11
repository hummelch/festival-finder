import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(Vuex);
Vue.use(VueAxios, axios);

export const store = new Vuex.Store({
  state: {
    selectedFilters: {
      genre: [],
      bands: [],
      dateRange: '',
    },
    filters: {},
  },

  getters: {
    getSelectedFilters: state => state.selectedFilters,
  },
  mutations: {
    setLoadedFilters(state, filters) {
      state.filters = filters;
    },
    setSelectedFilters(state, selectedFilters) {
      state.selectedFilters = selectedFilters;
    },
  },
  actions: {
    loadFilters({ commit }) {
      axios
        .get('http://localhost:3000/filters')
        .then(r => r.data)
        .then((filters) => {
          commit('setFilters', { filters });
        });
    },
  },
});
