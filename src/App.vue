<template>
  <div id="app">
    <v-app class="vuetifyapp">
      <nav-bar></nav-bar>
      <div class="main-wrapper">
        <router-view />
      </div>

      <new-content-available-toastr
        v-if="newContentAvailable"
        class="new-content-available-toastr"
        :refreshing-app="refreshingApp"
        @refresh="serviceWorkerSkipWaiting"
      ></new-content-available-toastr>
      <apple-add-to-home-screen-modal
        v-if="showAddToHomeScreenModalForApple"
        class="apple-add-to-home-screen-modal"
        @close="closeAddToHomeScreenModalForApple(false)"
      >
      </apple-add-to-home-screen-modal>
      <Footer v-if="!$route.meta.hideFooter"></Footer>
    </v-app>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import NewContentAvailableToastr from '@/components/NewContentAvailableToastr'
import AppleAddToHomeScreenModal from '@/components/AppleAddToHomeScreenModal'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  components: {
    NavBar,
    Footer,
    NewContentAvailableToastr,
    AppleAddToHomeScreenModal
  },
  computed: {
    ...mapGetters('app', ['newContentAvailable']),
    ...mapState('app', ['showAddToHomeScreenModalForApple', 'refreshingApp'])
  },
  methods: mapActions('app', [
    'closeAddToHomeScreenModalForApple',
    'serviceWorkerSkipWaiting'
  ])
}
</script>

<style lang="scss">
@import '@/theme/variables.scss';

body {
  background-color: $background !important;
  margin: 0;
  font-family: $body-font-family !important;
}
a {
  font-weight: 500;
  text-decoration: none;
}
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Nunito', sans-serif, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  color: #2c3e50;
  .new-content-available-toastr {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
  .apple-add-to-home-screen-modal {
    position: absolute;
    bottom: 0;
    right: 0;
    top: 0;
    left: 0;
    height: fit-content;
    width: fit-content;
    margin: auto;
    z-index: 1000;
  }
  .main-wrapper {
    background-color: $background !important;
    margin-top: 3.6rem;
    padding: 20px;
  }
}
</style>
