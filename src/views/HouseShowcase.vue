<template>
  <v-app class="houseshowcase">
    <v-card class="elevation-2">
      <v-img
        class="white--text card-img zoom cover"
        src="@/assets/img/tenerife/03_Casa-Puerto-Madera_Alejandro-Beautell-min.jpg"
      >
      </v-img>
    </v-card>
  </v-app>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
@import '@/theme/variables.scss';

.houseshowcase {
  background: $background !important;
}

.zoom {
  animation: scale 40s linear infinite;
}

@keyframes scale {
  50% {
    -webkit-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -ms-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
  }
}
</style>
