<template>
 <div class="page-wrapper">
   <v-app>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2000px-Google_2015_logo.svg.png" alt="" />
<br />
<h3>Sign in to continue to Gmail</h3>
<br />
<div class="loginContainer">
      <img alt="logo-bento" class="logo" src="@/assets/img/boo_login.svg" />
  <p id="name">Your Name</p>
  <p id="email">your_email@gmail.com</p>
  <p v-if="loginError">{{ loginError }}</p>
    <!-- Auth UI -->
    <div
      v-show="user !== undefined && !user && networkOnLine"
      data-test="login-btn"
      class="login-btn"
      @click="login"
    >
     Log in 💾
    </div>
  
</div>


    <!-- Loader -->
    <div v-show="user === undefined" data-test="loader">Authenticating...</div>

    <!-- Offline instruction -->
    <div v-show="!networkOnLine" data-test="offline-instruction">
      Please check your connection, login feature is not available offline.
    </div>

  <v-dialog v-model="dialog" persistent max-width="290">
      <template v-slot:activator="{ on }">
      
        <v-btn color="#46bd87" dark v-on="on">Why Login?</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">A place for groceries</v-card-title>
        <v-card-text>This started as a way to test Vues Authentification process. It works quite well
          and all User data is saved on Firebase. I use it as a way to add items to my virtual grocery list.
          Login and create a list yourself!

        </v-card-text>
        <v-card-actions>
         <v-btn color="green darken-1" text @click="dialog = false">Please no</v-btn>

          <v-btn color="green darken-1" text @click="dialog = false">
            <div v-show="user !== undefined && !user && networkOnLine" data-test="login-btn" class="login-btn" @click="login">Login now</div></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

   </v-app>

 </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { isNil } from 'lodash'
import firebase from 'firebase/app'
import { desktop as isDekstop } from 'is_js'

export default {
 data: () => ({ loginError: null,
 dialog: false
 
 }
 
 
 
 ),



  head() {
    return {
      title: {
        inner: 'Login'
      },
      meta: [
        {
          name: 'description',
          content: `Sign in or sign up to ${this.appTitle}`,
          id: 'desc'
        }
      ]
    }
  },
  computed: {
    ...mapState('authentication', ['user']),
    ...mapState('app', ['networkOnLine', 'appTitle'])
  },
  watch: {
    user: {
      handler(user) {
        if (!isNil(user)) {
          const redirectUrl = isNil(this.$route.query.redirectUrl)
            ? '/products'
            : this.$route.query.redirectUrl
          this.$router.push(redirectUrl)
        }
      },
      immediate: true
    }
  },
  methods: {
    ...mapMutations('authentication', ['setUser']),
    async login() {
      this.loginError = null
      const provider = new firebase.auth.GoogleAuthProvider()
      this.setUser(undefined)

      try {
        // Firebase signin with popup is faster than redirect
        // but we can't use it on mobile because it's not well supported
        // when app is running as standalone on ios & android
        // eslint-disable-next-line no-unused-expressions
        isDekstop()
          ? await firebase.auth().signInWithPopup(provider)
          : await firebase.auth().signInWithRedirect(provider)
      } catch (err) {
        this.loginError = err
        this.setUser(null)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.page-wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .login-page-title {
    text-align: center;
  }

  .login-btn {
    cursor: pointer;
    border-radius: 3px;
    border-color: #2c3e50;
    margin-left: 48px;

    &:hover {
      color: $vue-color;
      border-color: $vue-color;
    }
  }

  img {
  width:200px;
  display:block;
  margin:10px auto 0px auto;
}
h4{
  font-family: 'Open Sans', sans-serif;
  font-size:30px;
  text-align:center;
}
h3{
  font-family: 'Open Sans', sans-serif;
  font-size:18px;
  text-align:center;
  margin-top: 0px;
}
.loginContainer{
  width:300px;
  background-color:#f2f2f2;
  margin:0 auto;
  padding-top:10px;
  padding-bottom:1.4rem;
  margin-bottom: 2rem;
}
#icon{
  border-radius:50%;
  width:80px;
  height:80px;
  background-color: #ff5050;
  border:5px solid white;
  margin:0 auto;
  text-align:center;
  font-size:50px;
  line-height:75px;
  color:white;
  font-family: 'Open Sans', sans-serif;
  }
p {
  font-family: 'Open Sans', sans-serif;
  text-align:center;
}
#name{
  font-weight:bold;
  font-size:20px;
}
#email {
  font-size:13px;
}
input{
  display:block;
  margin:0 auto;
  height:22px;
  border-radius:13%;
}
div{
  text-align:center;
}
a{
  margin-left:-120px;
  font-size:12px;
  font-family: 'Open Sans', sans-serif;
}
}
</style>
