<template>
  <v-app-bar flat class="navbar" absolute color="#eaeff0">
    <router-link to="/">
      <v-toolbar-title>DYN</v-toolbar-title>
    </router-link>
    <v-spacer></v-spacer>

    <v-app-bar-nav-icon class="hamburger"></v-app-bar-nav-icon>
  </v-app-bar>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.theme--light.v-app-bar.v-toolbar.v-sheet {
  background-color: #eaeff0;
}
</style>
