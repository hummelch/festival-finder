<template>
<div>
<div class="text-xs-center">
  <v-card>
   <v-list two-line>
      <template v-for="(item, index) in items">
              <v-list-tile
              
              :key="item.title"
              avatar
              ripple
              @click=""
            >
              <v-list-tile-avatar>
                <img :src="item.avatar">
              </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  <v-list-tile-sub-title>{{ item.headline }}</v-list-tile-sub-title>
                  
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
                  <v-icon color="grey lighten-1">star_border</v-icon>
                </v-list-tile-action>
              </v-list-tile>
              <v-divider
                v-if="index + 1 < items.length"
                :key="index"
              ></v-divider>
            </template>

          </v-list>
        </v-card>
      <v-pagination
        v-model="page"
        :length="6"
      ></v-pagination>
    </div>
    <v-footer class="pa-3">
      <v-spacer></v-spacer>
      <a href="">About</a>
      <a href="">Impressum</a>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
</div>

</template>

<script>

export default {
  name: 'listResult',
  components: {
  },
  data () {
    return {
      page: 1,
      items: [
        { action: '7. - 9. Juni 2019', headline: '79106 Freiburg', title: 'Rock im Park',  avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg', subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" },
        { action: '7. - 9. Juni 2019', headline: '79106 Freiburg', title: 'Rock am Ring',  avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg', subtitle: "Wish I could come, but I'm out of town this weekend." },
        { action: '1. - 3. August 2019', headline: '79106 Freiburg', title: 'Wacken open Air',  avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg', subtitle: 'Do you have Paris recommendations? Have you ever been?' },
        { action: '21. - 23. Juni 2019', headline: 'Summer Breeze', title: 'Summer Breeze',  avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg', subtitle: 'Have any ideas about what we should get Heidi for her birthday?' },
        { action: '14. - 17. August 2019', headline: '79106 Freiburg', title: 'Southside',  avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg', subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.' }
      ]
    };
  }
};
</script>
