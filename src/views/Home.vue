<script>
// eslint-disable-next-line no-lone-blocks
{
  /* eslint-disable vue/no-parsing-error */
  /* eslint-disable vue/valid-v-bind */
}
</script>
<template>
  <v-app class="home">
    <div class="page-wrapper">
      <h2 class="introtext">I'm Daniel🌊</h2>
      <span class="hiddenText">at night</span>
      <v-lazy
        :options="{
          threshold: 0.5
        }"
        min-height="200"
        transition="scroll-y-transition"
      >
        <v-container class="entrytext">
          <section class="name"></section>
          <img
            class="img"
            src="../assets/img/undraw_Freelancer_re_irh4.svg"
            alt="Kiwi standing on oval"
          />

          <!-- animated Text  -->

          <br />

          <v-row class="mb-6">
            <v-col :lg="8"
              ><h2>
                UX Engineer and Freelance Web Developer
              </h2>
              <h2>
                I learn, design and
                <a class="linkhover" href="/playground">build things</a>. Mostly
                on the web.
                <span class="hiddenText">I also like alliterations!</span>
              </h2></v-col
            >
          </v-row>
          <br />
          <br />
          <h1>About me</h1>

          <p class="text-justify">
            Personal descrpritive essays about yourself are very particular; you
            are, or should be, highly knowledgeable about you; descriptive
            details can be very broad but must match your target audience- a
            prospective employer, lover, business partner, political party,
            charity seeking volunteers… Naturally what you divulge or share is
            determined by your objective and the recipient/audience. Assuming
            this is not high stakes, complex or in some way problematic, it
            generally works well to be open, honest, sincere, truthful, modest,
            considerate, cooperative and creative.
          </p>
          <br />

          <h1 class="claims">UNDERSTAND</h1>
          <svg id="shape-dash" viewBox="0 0 163 7">
            <rect
              width="93"
              height="4"
              x="282"
              y="423"
              fill-rule="evenodd"
              transform="translate(-279 -423)"
              style="fill:rgb(0,0,255)"
            ></rect>
          </svg>
          <h1 class="secondClaim">DESIGN</h1>
          <svg id="shape-dash" viewBox="0 0 163 7">
            <rect
              width="43"
              height="4"
              x="282"
              y="423"
              fill-rule="evenodd"
              transform="translate(-149 -423)"
              style="fill:rgb(255,255,0)"
            ></rect>
          </svg>
          <h1 class="claims">TEST</h1>
          <svg id="shape-dash" viewBox="0 0 163 7">
            <rect
              width="23"
              height="4"
              x="282"
              y="423"
              fill-rule="evenodd"
              transform="translate(-279 -423)"
              style="fill:rgb(0,255,0)"
            ></rect>
          </svg>

          <h2 class="introtext">Samples of my work</h2>
          <!-- animated Text  -->
          <ShowCase></ShowCase>
        </v-container>
      </v-lazy>
    </div>
  </v-app>
</template>
<script>
import { mapState } from 'vuex'
// eslint-disable-next-line import/no-extraneous-dependencies
import ShowCase from '@/components/ShowCase'

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

.page-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: fadeIn 2s ease-in both;

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
    width: 40%;
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
}
.introtext {
  font-size: 3rem;
  animation: fadeIn 5s ease-in both;
  opacity: 0.87;
}
</style>
