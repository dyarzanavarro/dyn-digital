<template>
  <div id="app" :class="{ 'theme-dark ': nightMode }">
    <v-app class="vuetifyapp">
      <div class="main-wrapper">
        <v-container
          class="text-right"
          style="padding: 1rem;
}"
        >
          <v-icon
            v-if="nightMode"
            class="icon-sun"
            @click="nightMode = !nightMode"
            >fas fa-sun</v-icon
          >
          <v-icon v-else class="icon-moon" @click="nightMode = !nightMode"
            >fas fa-moon</v-icon
          ></v-container
        >
        <router-view />
      </div>
      <nav-bar> </nav-bar>

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
/* eslint-disable import/no-extraneous-dependencies */
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import NewContentAvailableToastr from '@/components/NewContentAvailableToastr'
import AppleAddToHomeScreenModal from '@/components/AppleAddToHomeScreenModal'
import { mapState, mapActions, mapGetters } from 'vuex'
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader

export default {
  components: {
    NavBar,
    Footer,
    NewContentAvailableToastr,
    AppleAddToHomeScreenModal
  },
  data() {
    return {
      nightMode: false
    }
  },
  computed: {
    ...mapGetters('app', ['newContentAvailable']),
    ...mapState('app', ['showAddToHomeScreenModalForApple', 'refreshingApp'])
  },

  watch: {
    nightMode() {
      localStorage.setItem('nightMode', JSON.stringify(this.nightMode))
    }
  },

  created() {
    this.nightMode = JSON.parse(localStorage.getItem('nightMode'))
  },
  methods: mapActions('app', [
    'closeAddToHomeScreenModalForApple',
    'serviceWorkerSkipWaiting'
  ])
}
</script>

<style lang="scss">
@import '@/theme/variables.scss';

.vuetifyapp {
  overflow: hidden !important;
}
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Nunito', sans-serif, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  padding: 0.6rem;
  background-color: $background;

  .new-content-available-toastr {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background-color: $background !important;
    color: #2c3e50;
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

  .icon-sun {
    color: #fcda5f !important;
  }

  .icon-moon {
    color: #121212;
  }

  /*Dark Theme */
  &.theme-dark {
    color: $background;
    background-color: #121212;

    .main-wrapper {
      color: $background;
      background-color: #121212;
      z-index: 1000;
      padding-right: 2rem;
    }

    a {
      color: #efefef;
    }
    .hamburger {
      color: #efefef;
    }
    .page-wrapper {
      color: #efefef;
      background-color: #121212 !important;
    }
    .v-lazy {
      background-color: #121212 !important;
    }
    router-view {
      background-color: #121212 !important;
    }

    h2 {
      color: #efefef;
      opacity: 0.87;
    }
    h1 {
      color: #efefef;
      opacity: 0.87;
    }
    .text-justify {
      color: #efefef;
      opacity: 0.87;
    }
    .navbar {
      background-color: #121212 !important;
      box-shadow: 8px 8px 16px #121212, -8px -8px 16px #3b3a3a;
    }

    .linkhover {
      background: linear-gradient(to right, #121212 50%, $secondary 50%);
      background-position: -0% 0;
      background-size: 200% auto;
      color: #efefef;
      text-decoration: none;
      transition: background-position 0.5s ease-out;
    }
    #app {
      background-color: #121212 !important;
    }
    #app.theme-dark {
      background-color: #121212 !important;
    }
    .title {
      color: #efefef;
    }
    .cards {
      color: #efefef;
      background-color: #3b3a3a;
    }
    .cta {
      color: $secondary !important;
      box-shadow: none;
      background-color: #3b3a3a !important;
    }
    .pb-0 {
      color: #efefef !important;
      background-color: #3b3a3a;
    }
    .text--primary {
      color: #efefef !important;
      background-color: #3b3a3a !important;
    }
    .footer {
      color: #efefef;
    }
    .claims {
      color: white;
    }
    .secondClaim {
      color: white;
    }
    .nav-item {
      position: relative;
      display: inline-block;
      margin-left: 1.5rem;
      line-height: 2.2rem;
      &:first-child {
        margin-left: 0;
        background: linear-gradient(to right, #121212 50%, #121212 50%);
        cursor: pointer;
      }
      a {
        background: linear-gradient(to right, #121212 50%, #121212 50%);
        cursor: pointer;
        opacity: 0.87;
      }
    }
    .card-img2 {
      background-color: #3b3a3a !important;
    }
    .card-img3 {
      background-color: #3b3a3a !important;
    }
    .cards {
      box-shadow: 8px 8px 16px #121212, -8px -8px 16px #3b3a3a;
    }
    .actions {
      background-color: #3b3a3a !important;
      color: #efefef !important;
    }
  }

  /* Light Theme */
  &.theme-light {
    background-color: $background !important;
    color: #2c3e50 !important;
  }
  .main-wrapper {
    padding-right: 2rem;
    z-index: 1000;
  }
}
</style>
