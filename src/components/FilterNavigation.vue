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
          v-model="genresValues"
          :items="genresItems"
          chips
          label="Chips"
          :multiple="true"
          solo
          @change="updateGenres()"
        ></v-select>

        <v-select
          :items="sizeItems"
          label="Solo field"
          solo
        ></v-select>

 <v-divider ></v-divider>
        <v-autocomplete
          v-model="model"
          :items="bands"
          label="Bands"
          :multiple="true"
        ></v-autocomplete>


        <v-btn color="primary" dark large @click="syncFiltersToUrl()">Suchen (45)</v-btn>
      </v-list>
  </div>
</template>
<script>

export default {
  name: 'filterNavigation',

  data: () => ({
    genresItems: ['Metal', 'Rock', 'Pop', 'Rap', 'Alternative'],
    genresValues: [],
    sizeItems: ['bis 5.000', '5.000 - 10.000', '10.001 - 20.000', '20.001 - 30.000', '30.001 - 40.000', '20.001 - 30.000'],
    bands: ['The Wombats', 'Cage the Elefant', 'System of a Down'],
    text: 'list',
    drawer: null,
    options: {},
    isDetail: true,
    model: '',
  }),
  mounted() {
    this.genresValues = this.$route.query.genre.split(',').map(String);
  },
  methods: {
    setGrid(grid) {
      if (this.canBeUsedinGrid(grid)) {
        this.isSelected = grid;
        this.$store.dispatch('loadSelectedGrid', grid);
      }
    },
    updateGenres() {
      console.log('huhu');
    },
    syncFiltersToUrl() {
      this.$router.push({
        query: {
          genre: this.genresValues.join(','),
        },
      });
    },
  },
};
</script>
