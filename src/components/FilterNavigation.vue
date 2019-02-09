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
          multiple
          solo
        ></v-select>

        <v-select
          :items="sizeItems"
          label="Solo field"
          solo
        ></v-select>

        <v-divider ></v-divider>

        <v-btn color="primary" dark large>Suchen (45)</v-btn>
      </v-list>
</div>
</template>
<script>

export default {
  name: 'filterNavigation',

  data () {
    return {
    };
  }
};
</script>
