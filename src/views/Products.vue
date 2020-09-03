<script>
/* eslint-disable vue/valid-v-else */
</script>
<template>
  <div class="page-wrapper">
    <v-app class="background">
      <v-row
        v-touch="{
          left: () => swipe('Left'),
          right: () => swipe('Right'),
          up: () => swipe('Up'),
          down: () => swipe('Down')
        }"
        align="center"
        class="grey lighten-2"
        justify="center"
        style="height: 500px"
      >
        <v-subheader>Swipe Direction</v-subheader>
        {{ swipeDirection }}
      </v-row>
    </v-app>
  </div>
</template>

<script>
export default {
  data: () => ({
    swipeDirection: 'None'
  }),

  methods: {
    swipe(direction) {
      this.swipeDirection = direction
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.background {
  background: $background !important;
}

.products {
  background: $background !important;
}
.products-page-title {
  text-align: center;
  margin-bottom: 60px;
}

.product-list {
  margin: 20px 0;
}
</style>
