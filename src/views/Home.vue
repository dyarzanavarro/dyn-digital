<template>
  <v-app class="home">
    <h1>TITEL SCREN</h1>
  </v-app>
</template>
<script>
import { mapState } from 'vuex'
// eslint-disable-next-line import/no-extraneous-dependencies

export default {
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

.intro_links {
  line-height: 80%;
  font-size: 3.8rem;
  font-weight: 600;
  color: black;
  text-decoration: none;
  background: linear-gradient(to right, $background 50%, $secondary 50%);
  background-size: 200% auto;
  background-position: -0% 0;
  transition: background-position 0.5s ease-out;
}
.intro_sublink {
  font-size: 1.4rem;
  font-weight: 600;
  color: $logoSecondary;
  text-decoration: none;
}
.v-application p {
  margin-bottom: 0px;
}

.intro_links:hover {
  background-position: 99.99% 0;
}

.cards {
  background: white !important;
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
.cta {
  color: $logo !important;
  box-shadow: none;
  background-color: white !important;
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
