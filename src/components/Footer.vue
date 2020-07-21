<template>
  <v-footer padless class="footer">
    <v-card flat tile class="flex lighten-1 blue-grey--text footer">
      <v-row>
        <v-col>
          <v-card-title class="logo_footer">
            <v-btn
              v-for="(icon, idx) in icons"
              :key="idx"
              class="mx-4 blue-grey--text darken-3 pt-0"
              icon
              :href="icon.link"
              target="_blank"
            >
              <v-icon size="24px">{{ icon.icon }}</v-icon>
            </v-btn>
          </v-card-title>
        </v-col>
        <v-col>
          <v-card-subtitle class="blue-grey--text text-center mb-6">
            <a class="linkhover" href="/legal">Legal</a>
          </v-card-subtitle>
        </v-col>
        <v-col>
          <v-card-text class="blue-grey--text text-right">
            {{ new Date().getFullYear() }} — <strong>dyn-digital</strong>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',

  data: () => ({
    icons: [
      { icon: 'mdi-github', link: 'https://github.com/dyarzanavarro' },
      {
        icon: 'mdi-linkedin',
        link: 'https://www.linkedin.com/in/dyarzanavarro/'
      },
      { icon: 'mdi-twitter', link: 'https://twitter.com/dyarnav' },
      { icon: 'mdi-mail', link: 'mailto:danielyarza1@gmail.com' }
    ]
  })
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.logo {
  height: 125px;
}

.footer {
  background-color: $background !important;
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

#app.theme-dark {
  background-color: #121212 !important;
}

#app.theme-dark .footer {
  background-color: #121212 !important;
}
</style>
