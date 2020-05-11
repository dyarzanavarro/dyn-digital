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
      <v-lazy
        :options="{
          threshold: 0.5
        }"
        min-height="200"
        transition="scroll-y-transition"
      >
        <v-container class="entrytext">
          <h2 class="introtext">Hello 🌊</h2>
          <!-- animated Text  -->
          <h2 class="introtext">I'm Daniel</h2>

          <!-- animated Text  -->

          <br />
          <h2>
            UX Engineer and Freelance Web Developer
          </h2>
          <h2>
            I learn, design and
            <a class="linkhover" href="projects">build things</a>. Mostly on the
            web.
          </h2>
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
            considerate, cooperative and creative. These are not physical
            details but character and personality traits that identify you as
            you; the looks, appearance matters but is secondary. Again,
            objective and audience matter. If you were meeting your adoptive
            parents at the train station how would you’d describe your
            appearance so you would be recognized? How would you describe
            yourself to your fiancé’s parent so you would be well received?
            Descriptive writing can be very persuasive- or misleading. It starts
            and ends with you, and is determined by your objective- to gain
            favour, get the job or…, and depends largely on the circumstances of
            you vs what your intended audience needs to know, should know. Take
            care to know your audience and objective, and balance your
            descriptive details suitably. Description can range from sparse to
            superfluous, get it right, reasonable under the circumstances, in a
            most viable median -descriptive essay writing.
          </p></v-container
        >
      </v-lazy>
    </div>
  </v-app>
</template>
<script>
import { mapState } from 'vuex'
// eslint-disable-next-line import/no-extraneous-dependencies

export default {
  components: {},
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

.home {
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
    background-color: $background !important;
  }

  .home-page-title {
    text-align: center;
  }

  .linkhover {
    background: linear-gradient(to right, $background 50%, $secondary 50%);
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
.introtext {
  font-size: 4rem;
}
</style>
