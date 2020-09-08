<template>
  <v-app class="projects">
    <h1>Projects</h1>
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

.projects {
  background: $background !important;
}
.row .projects .col .v-application--wrap {
  background: $background !important;
}
.cards {
  border-radius: 48px !important;
  background: $background !important;
  box-shadow: 8px 8px 16px #d1d1d1, -8px -8px 16px #ffffff;
}

.card-img {
  background: url(https://psychologiestudierende.ch/wp-content/uploads/2020/04/cropped-psyCH_logo_PNG_white_medium.png)
      no-repeat,
    #da0020;
  background-size: contain;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.card-img2 {
  background: url(https://www.steppinginto.ch/wp-content/uploads/2018/04/cropped-stepping_into_logo_RZ_ohne_baseline-e1532439888802-2.jpg)
    no-repeat white;
  background-size: contain;
  display: block;
  align-content: center;
  margin-left: auto;
  margin-right: auto;
}

.card-img3 {
  background: url('../assets/img/dentisana2.gif') no-repeat;
  display: block;
  align-content: center;
  margin-left: auto;
  margin-right: auto;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
