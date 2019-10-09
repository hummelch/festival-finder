import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default (config) => new Vuex.Store({
  state: {
     selectedFilters: {
       genre: [],
       bands: [],
       dateRange: '',
     },
  },

  getters: {
    getSelectedFilters: (state) => {
      return state.selectedFilters;
    },
    getComponentByName: (state) => (name) => {
      return state.componentDetails[name];
    },
    getSelectedGrid: (state) => {
      return state.selectedGrid;
    }
  },
  mutations: {
    setSelectedFilters (state, selectedFilters) {
      state.selectedFilters = selectedFilters;
    },
    setSelectedGrid (state, grid) {
      state.selectedGrid = grid;
    },
    setComponentDetails (state, {detail, componentName}) {
      state.componentDetails = {
        ...state.componentDetails,
        [componentName]: detail
      }
    }
  },
  actions: {
    loadFilters ({ commit }) {
      axios
        .get(`http://localhost:3000/filters`)
        .then(r => r.data)
        .then(detail => {
        commit('setFilters', {detail, componentName});
      })
    },
    loadSelectedFilters ({ commit }, grid) {
      commit('setSelectedFilters ', grid);
    },
    loadComponentList ({ commit }) {
      axios
        .get(`${config.root}componentOverview.json`)
        .then(r => r.data)
        .then(list => {
        commit('setComponentList', list);
      })
    },
    loadComponentDetails ({ commit }, componentName) {
      axios
        .get(`${config.root}${componentName}/package.json`)
        .then(r => r.data)
        .then(detail => {
        commit('setComponentDetails', {detail, componentName});
      })
    }
    
  }
})