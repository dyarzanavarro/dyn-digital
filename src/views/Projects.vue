<template>
  <v-app class="projects">
    <h1 class="title">Projects</h1>
    <ShowCase></ShowCase>
  </v-app>
</template>

<script>
import ShowCase from '@/components/ShowCase'

export default {
  components: { ShowCase }
}
</script>

<style scoped lang="scss">
@import '@/theme/variables.scss';

.title {
  padding-left: 24px;
}
.projects {
  background: $background !important;
}
.row .projects .col .v-application--wrap {
  background: $background !important;
}
</style>
