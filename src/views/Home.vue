<template>
  <div class="page-wrapper">
    <h1 class="home-page-title">{{ appTitle }}</h1>
    <img alt="logo-bento" class="logo" src="@/assets/img/dog-colour.svg" />

<h1>Hello 🌊</h1>
<h2>I am Daniel</h2>
<h3>I learn, design and <a href="/projects">build things</a>. Mostly on the web.</h3>

<h2>I also adore <a href="playground">alliterations.</a></h2>


    <!-- <a
      rel="noopener"
      class="documentation-link"
      target="_blank"
      href="https://bento-starter.netlify.com/"
      >Documentation →</a
    > -->
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
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

:root {
  --mainColor: #ff9800;
}

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

  a {
  background-image: linear-gradient(to right, #ffffff 50%, #EE964B 50%);
  background-position: -0% 0;
  background-size: 200% auto;
  color: #333;
  text-decoration: none;
  transition: background-position 0.5s ease-out;
}
 a:hover {
  background-position: -99.99% 0;
}
}
</style>
