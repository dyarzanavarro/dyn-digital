<script>
/* eslint-disable import/no-extraneous-dependencies */
</script>
<template>
  <div id="app" :class="{ 'theme-dark ': nightMode }">
    <v-app class="vuetifyapp">
      <nav-bar> </nav-bar>

      <div class="main-wrapper">
        <v-container class="text-right">
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

#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Nunito', sans-serif, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
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
  .main-wrapper {
    margin-top: 3.6rem;
    padding: 20px;
  }
  a {
    font-weight: 500;
    text-decoration: none;
  }
  .icon-sun {
    color: #fcda5f;
  }

  .icon-moon {
    color: #041b37;
  }

  /*Dark Theme */
  &.theme-dark {
    color: #efefef;
    background-color: #333;

    .main-wrapper {
      color: #efefef;
      background-color: #333;
    }

    a {
      color: #efefef;
    }

    .page-wrapper {
      color: #efefef;
      background-color: #333 !important;
    }
    .v-lazy {
      background-color: #333 !important;
    }
    router-view {
      background-color: #333 !important;
    }

    h2 {
      color: #efefef;
    }
    h1 {
      color: #efefef;
    }
    .text-justify {
      color: #efefef;
    }
    .navbar {
      background-color: #333 !important;
      box-shadow: 8px 8px 16px #041b37, -8px -8px 16px #444;
    }

    .linkhover {
      background: linear-gradient(to right, #333 50%, $secondary 50%);
      background-position: -0% 0;
      background-size: 200% auto;
      color: #efefef;
      text-decoration: none;
      transition: background-position 0.5s ease-out;
    }
    #app {
      background-color: #333 !important;
    }
    .title {
      color: #efefef;
    }
    .cards {
      color: #efefef;
      background-color: #444;
    }
    .pb-0 {
      color: #efefef !important;
      background-color: #444;
    }
    .text--primary {
      color: #efefef !important;
      background-color: #444 !important;
    }
    .footer {
      color: #efefef;
      background-color: #333 !important;
    }

    .nav-item {
      position: relative;
      display: inline-block;
      margin-left: 1.5rem;
      line-height: 2.2rem;
      &:first-child {
        margin-left: 0;
        background: linear-gradient(to right, #333 50%, #333 50%);
        cursor: pointer;
      }
      a {
        background: linear-gradient(to right, #333 50%, #333 50%);
        cursor: pointer;
      }
    }
    .card-img2 {
      background-color: #444 !important;
    }
    .card-img3 {
      background-color: #444 !important;
    }
    .cards {
      box-shadow: 8px 8px 16px #041b37, -8px -8px 16px #444;
    }
    .actions {
      background-color: #444 !important;
      color: #efefef !important;
    }
  }

  /* Light Theme */
  &.theme-light {
    background-color: $background !important;
    color: #2c3e50 !important;
  }
}
</style>
