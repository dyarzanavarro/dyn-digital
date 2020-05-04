<template>
  <v-footer dark padless>
    <v-card
      flat
      tile
      class="lighten-1 blue-grey--text darken-3 pt-0 text-center footer"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 class blue-grey--text darken-3 pt-0"
          icon
          :href="icon.link"
          target="_blank"
        >
          <v-icon size="24px">{{ icon.icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-subtitle class="blue-grey--text darken-3 pt-0">
        <a class="linkhover" href="/legal">Legal</a>
      </v-card-subtitle>
      <v-card-text class="blue-grey--text darken-3 pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
        Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
        accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a
        sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
        lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus
        iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor
        vel ut orci. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="blue-grey--text darken-3 pt-0">
        {{ new Date().getFullYear() }} — <strong>dyn-digital</strong>
      </v-card-text>
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

.footer {
  background-color: $background !important;
  box-shadow: -8px -8px 16px #cce6e6, 8px 8px 16px #faffff;
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
</style>
