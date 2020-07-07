<template>
  <header class="navbar" :class="{ offline: !networkOnLine }">
    <router-link to="/home">
      <img alt="logo-bento" class="logo" src="@/assets/img/logo.svg" />
    </router-link>

    <div class="links">
      <nav class="nav-links">
        <div class="nav-item">
          <router-link to="/projects">Projects</router-link>
        </div>
        <div class="nav-item">
          <router-link to="/playground">Playground</router-link>
        </div>
        <div class="nav-item">
          <router-link to="/products">Products</router-link>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import firebase from 'firebase/app'
import { mapGetters, mapState } from 'vuex'

export default {
  computed: {
    ...mapGetters('authentication', ['isUserLoggedIn']),
    ...mapState('authentication', ['user']),
    ...mapState('app', ['networkOnLine', 'appTitle', 'appShortTitle'])
  },
  methods: {
    async logout() {
      await firebase.auth().signOut()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.navbar {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
  right: 0;
  height: $navbar-height;
  background-color: $background;
  box-shadow: 8px 8px 16px #d1d1d1, -8px -8px 16px #ffffff;
  box-sizing: border-box;
  border-bottom: 1px solid #eaecef;
  line-height: 2.2rem;

  a {
    display: flex;
    align-items: center;
  }
  .title-desktop {
    display: inline;
  }
  .title-mobile {
    display: none;
  }
  @media (max-width: 500px) {
    padding: 0.2rem 0.3rem;
    .can-hide {
      display: none;
    }
    .title-desktop {
      display: none;
    }
    .title-mobile {
      display: block;
    }
    .logo {
      height: 1.7rem;
    }
  }
  .site-name {
    font-size: 1.3rem;
    font-weight: 600;
    color: #2c3e50;
    position: relative;
  }
  .logo {
    height: 3.7rem;
    padding-right: 8px;
  }
  .links {
    padding-left: 1.5rem;
    box-sizing: border-box;
    white-space: nowrap;
    font-size: 0.9rem;
    position: absolute;
    right: 0.8rem;
    top: 0.7rem;
    display: flex;
    .nav-links {
      display: flex;
      align-items: center;
      justify-content: center;
      .nav-item {
        position: relative;
        display: inline-block;
        margin-left: 1.5rem;
        line-height: 2.2rem;
        &:first-child {
          margin-left: 0;
          background: linear-gradient(
            to right,
            $background 50%,
            $secondary 50%
          );
          cursor: pointer;

          background-position: -0% 0;
          background-size: 200% auto;
          color: #333;
          text-decoration: none;
          transition: background-position 0.5s ease-out;
        }
        a {
          font-weight: 500;
          font-size: 0.9rem;
          text-decoration: none;
          border-color: #2c3e50;
          line-height: 1.4rem;
          display: inline-block;
          cursor: pointer;
          background: linear-gradient(
            to right,
            $background 50%,
            $secondary 50%
          );
          background-position: -0% 0;
          background-size: 200% auto;
          color: #333;
          text-decoration: none;
          transition: background-position 0.5s ease-out;
        }
        @mixin activatedLink() {
          margin-bottom: -2px;
        }
        .router-link-active {
          @include activatedLink;
        }
        @media (hover) {
          :hover {
            @include activatedLink;
            background-position: 99.99% 0;
          }
        }
      }
    }
  }
  &.offline {
    background: $navbar-offline-color;
    .links .nav-links .nav-item a,
    .site-name {
      color: white;
    }
  }
  .user-picture {
    max-height: 32px;
    margin-left: 1.5rem;
    border-radius: 50%;
  }
  .offline-label {
    padding: 0px 10px;
    border: 1px solid white;
    border-radius: 5px;
    color: white;
    margin-left: 1.5rem;
  }
}

.links:hover {
  background-position: 99.99% 0;
}
</style>
