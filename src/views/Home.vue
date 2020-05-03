<template>
  <div class="page-wrapper">
    <v-container class="container">
      <img alt="logo-bento" class="logo" src="@/assets/img/boo_final.svg" />

      <container class="entrytext">
        <h1>Hello 🌊</h1>
        <h2>I am Daniel</h2>
        <h3>
          I learn, design and
          <a class="linkhover" href="/projects">build things</a>. Mostly on the
          web.
        </h3>
        <h3>
          I also adore <a class="linkhover" href="playground">alliterations.</a>
        </h3>
      </container>
      <h1>About me</h1>

      <p class="text-justify">
        Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut, faucibus
        non, euismod id, nulla. Fusce convallis metus id felis luctus
        adipiscing. Aenean massa. Vestibulum purus quam, scelerisque ut, mollis
        sed, nonummy id, metus. Nulla consequat massa quis enim. Praesent
        venenatis metus at tortor pulvinar varius. Donec venenatis vulputate
        lorem. Phasellus accumsan cursus velit. Pellentesque ut neque.
      </p>

      <p class="text-justify">
        Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut, faucibus
        non, euismod id, nulla. Fusce convallis metus id felis luctus
        adipiscing. Aenean massa. Vestibulum purus quam, scelerisque ut, mollis
        sed, nonummy id, metus. Nulla consequat massa quis enim. Praesent
        venenatis metus at tortor pulvinar varius. Donec venenatis vulputate
        lorem. Phasellus accumsan cursus velit. Pellentesque ut neque.
      </p>

      <v-container>
        <v-scroll-x-transition mode="in" hide-on-leave="true">
          <v-card class="mx-auto" max-width="400">
            <v-card-title>
              <h2 class="display-1">Daniel</h2>
              <v-spacer></v-spacer>
              <span class="title">$34.99</span>
            </v-card-title>

            <v-card-text>
              Hire me now! I definitely can do some stuff. I am also bad at some
              things. I also work well with others, preferably dogs.
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-text>
              <span class="subheading">Select type</span>

              <v-chip-group
                v-model="selection"
                active-class="deep-purple--text text--accent-4"
              >
                <v-chip>🍉 Web Development</v-chip>
                <v-chip>🍍 Web Design</v-chip>
                <v-chip>🥝 UX Design / Engineering</v-chip>
                <v-chip>🍌 Product Managment</v-chip>
                <v-chip>🍅 Progressive Web Applications</v-chip>
                <v-chip>🌶️ Wordpress</v-chip>
              </v-chip-group>
            </v-card-text>
          </v-card>
        </v-scroll-x-transition>
      </v-container>
    </v-container>
  </div>
</template>
<script>
import { mapState } from 'vuex'

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

#app {
  background-color: $background !important;
}
.container {
  background-color: $background !important;
}
.page-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: fadeIn 1s ease-in both;

  .entrytext {
    opacity: 1;
    transform: none;
  }
  .logo {
    margin-bottom: 3rem;
    width: 30%;
  }

  .home-page-title {
    text-align: center;
  }

  .linkhover {
    background: linear-gradient(to right, #e3ffff 50%, #ee964b 50%);
    background-position: -0% 0;
    background-size: 200% auto;
    color: #333;
    text-decoration: none;
    transition: background-position 0.5s ease-out;
  }
  .linkhover:hover {
    background-position: 99.99% 0;
  }
}
</style>
