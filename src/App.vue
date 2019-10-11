<template>
  <v-app>
    <v-navigation-drawer
      fixed
      v-model="drawer"
      app
    >
      <filter-navigation></filter-navigation>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon class="hidden-lg-and-up" @click.stop="drawer = !drawer">
      </v-toolbar-side-icon>
      <v-btn icon @click="$router.go(-1)" v-if="$route.name === 'detail'">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-menu bottom left>
        <v-btn>
          <v-icon>search</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile>EN</v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app>
      Home
      Impressum
    </v-footer>
</v-app>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import FilterNavigation from '@/components/FilterNavigation.vue';
import store from '@/store.js';

export default {
  name: 'app',
  components: {
    FilterNavigation,
  },
  created() {
    console.log(this);
    this.store.action.loadFilters();
  },
  data: () => ({
    text: 'list',
    drawer: null,
    options: {},
    isDetail: true,
  }),
};
</script>
