<template>
<div>
    <div>
        Karten Ansicht
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
  name: 'mapResult',
  components: {
  },
  data() {
    return {
    };
  },
};
</script>
