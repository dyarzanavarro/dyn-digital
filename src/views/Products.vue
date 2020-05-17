<template>
  <div class="page-wrapper">
    <v-app class="background">
      <v-list shaped>
        <v-subheader>Grocery list</v-subheader>
        <v-list-item-group v-model="item" color="primary">
          <v-list-item v-for="(item, i) in items" :key="i" avatar>
            <v-list-item-content> {{ item }} </v-list-item-content>
            <v-list-item-action>
              <v-icon @click="remove(i)"> mdi-delete</v-icon>
            </v-list-item-action>
          </v-list-item>
        </v-list-item-group>
        <v-text-field
          v-model="newItem"
          solo
          label="Add Item"
          append-icon="mdi-plus"
          @click:append="addItem"
        >
        </v-text-field>
      </v-list>
    </v-app>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState('app', ['networkOnLine']),

  data: () => ({
    items: ['Bananas', 'Spinach', 'IceCream']
  }),
  methods: {
    remove(index) {
      const list = this.items
      const newList = [
        ...list.slice(0, index),
        ...list.slice(index + 1, list.length)
      ]
      this.items = newList
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
