<template>
  <v-app>
    <v-container>
      <v-card>
        <v-card-title>
          <ArSceneManager />
        </v-card-title>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
import ArSceneManager from '@/components/ArSceneManager'

export default {
  components: { ArSceneManager }
}
</script>

<style></style>
