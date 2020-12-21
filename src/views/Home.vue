<template>
  <v-app class="home">
    <v-container> </v-container>

    <ShowCase />
  </v-app>
</template>
<script>
import { mapState } from 'vuex'
// eslint-disable-next-line import/no-extraneous-dependencies
import ShowCase from '@/components/ShowCase.vue'

export default {
  components: { ShowCase },
  data: () => ({
    menu: false
  }),

  head() {
    return {
      title: {
        inner: 'Home'
      },
      meta: [
        {
          name: 'description',
          content: `${this.appTitle} home page`,
          id: 'desc'
        }
      ]
    }
  },
  computed: mapState('app', ['appTitle'])
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.hiddenText {
  color: $background;
}
.entrytext {
  transform: none;
  opacity: 0.87;
}
.name {
  float: left;
}
.img {
  float: right;
  width: 60%;
}

.home-page-title {
  text-align: center;
}
.claims {
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 8.08515, 0, 0, 1);
  font-size: 8vw;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display: inline-block;
}
.secondClaim {
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 8.08515, 0, 0, 1);
  font-size: 8vw;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: right;
}

.linkhover {
  background: linear-gradient(to right, $background 50%, $secondary 50%);
  background-position: -0% 0;
  background-size: 200% auto;
  color: #121212;
  text-decoration: none;
  transition: background-position 0.5s ease-out;
}
.linkhover:hover {
  background-position: 99.99% 0;
}

.introtext {
  font-size: 5.2rem;
  animation: fadeIn 5s ease-in both;
  opacity: 0.87;
}
</style>
