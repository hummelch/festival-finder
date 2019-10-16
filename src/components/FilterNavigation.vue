<template>
  <div>
    <h1 class="text-xs-center mt-4 mb-4">Suche</h1>
      <v-list two-line subheader>
        <div class="text-xs-center mb-4">
          <v-btn-toggle v-model="text">
            <v-btn to="/list" flat value="list">Liste</v-btn>
            <v-btn to="/map" flat value="map">Karte</v-btn>
            <v-btn to="/calendar" flat value="calendar">Kalender</v-btn>
          </v-btn-toggle>
        </div>
        <v-select
          v-model="selectedFilters.genres"
          :items="filters.genres"
          chips
          label="Genre"
          :multiple="true"
          @change="selectedFilterChanged('genre', selectedFilters.genres)"
        ></v-select>

        <v-divider ></v-divider>

        <v-autocomplete
          v-model="selectedFilters.bands"
          :items="filters.bands"
          label="Bands"
          :multiple="true"
           @change="selectedFilterChanged('bands', selectedFilters.bands)"
        ></v-autocomplete>


        <v-btn color="primary" dark large @click="syncFiltersToUrl()">Suchen (45)</v-btn>
      </v-list>
  </div>
</template>
<script>

export default {
  name: 'filterNavigation',

  data() {
    return {
      loading: true,
      selectedFilters: {
        genres: [],
        bands: [],
      },
      filters: {
        genres: [],
        bands: [],
      },
      text: 'list',
      drawer: null,
      options: {},
      isDetail: true,
      model: '',
    };
  },
  mounted() {
    this.loading = true;
    this.getFilters();
  },
  methods: {
    async getFilters() {
      await this.$store.dispatch('loadFilters');
      const storedFilters = this.$store.getters.getFilters;
      this.filters = storedFilters.filters;
      this.syncFiltersFromUrl();
      this.loading = false;
    },
    selectedFilterChanged(filterKey, newValues) {
      this.syncFiltersToUrl();
      this.$store.commit('setSelectedFiltersFor', {
        key: filterKey,
        value: newValues,
      });
    },
    syncFiltersFromUrl() {
      const { genres, bands } = this.$route.query;
      if (genres) {
        this.selectedFilters.genres = genres.split(',').map(String);
      }
      if (bands) {
        this.selectedFilters.bands = bands.split(',').map(String);
      }
    },
    syncFiltersToUrl() {
      this.$router.push({
        query: {
          genres: this.selectedFilters.genres.join(','),
          bands: this.selectedFilters.bands.join(','),
        },
      });
    },
  },
};
</script>
