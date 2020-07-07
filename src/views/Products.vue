<script>
/* eslint-disable vue/valid-v-else */
</script>
<template>
  <div class="page-wrapper">
    <v-app class="background"> </v-app>
  </div>
</template>

<script>
export default {}
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
