<template>
  <div class="page-wrapper">
    <img alt="logo-bento" class="logo" src="@/assets/img/boo_final.svg" />

    <h1>Hello 🌊</h1>
    <h2>I am Daniel</h2>
    <h3>
      I learn, design and
      <a class="linkhover" href="/projects">build things</a>. Mostly on the web.
    </h3>
    <h3>
      I also adore <a class="linkhover" href="playground">alliterations.</a>
    </h3>
<v-app id="inspire" :dark="setTheme">
    <v-container>
      <v-switch :label="`Dark Theme`" v-model="goDark"></v-switch>
      <v-row dense>
        <v-col cols="12">
          <v-card>
          <v-card-title class="headline" color="#385F73" dark>
              Unlimited music now
            </v-card-title>

            <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever,
              online and offline.</v-card-subtitle>

            <v-card-actions>
              <v-btn text>Listen Now</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col v-for="(item, i) in items" :key="i" cols="12">
          <v-card :color="item.color" dark>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline"
                  v-text="item.title"
                ></v-card-title>

                <v-card-subtitle v-text="item.artist"></v-card-subtitle>
              </div>

              <v-avatar class="ma-3" size="125" tile>
                <v-img :src="item.src"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

<v-container>
     <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-card-title>
      <h2 class="display-1">Daniel</h2>
      <v-spacer></v-spacer>
      <span class="title">$34.99</span>
    </v-card-title>

    <v-card-text>
      Hire me now! I definitely can do some stuff. I am also bad at some things. 
      I also work well with others, preferably dogs.
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

    <v-card-actions>
      <v-btn
        block
        class="white--text"
        color="deep-purple accent-4"
      >
        Add to Cart
      </v-btn>
    </v-card-actions>
  </v-card>

</v-container>
</v-app>

  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  data: () => ({
    items: [
      {
        color: '#1F7087',
        src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        title: 'Supermodel',
        artist: 'Foster the People'
      },
      {
        color: '#952175',
        src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
        title: 'Halcyon Days',
        artist: 'Ellie Goulding'
      }
    ],
          menu: false,

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

.page-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo {
    margin-bottom: 3rem;
    width: 30%;
  }

  .home-page-title {
    text-align: center;
  }

  .linkhover {
    background: linear-gradient(to right, #ffffff 50%, #ee964b 50%);
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
