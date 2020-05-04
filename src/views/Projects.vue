<template>
  <v-app class="projects">
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex d-flex xs12 sm6 md4>
          <v-lazy
            v-model="isActive"
            :options="{
              threshold: 0.8
            }"
            min-height="200"
            transition="scroll-x-transition"
          >
            <v-card color="purple" dark>
              <v-card-title primary class="title"
                >psychologiestudierende.ch</v-card-title
              >
              <v-card-text>{{ lorem }}</v-card-text>
            </v-card>
          </v-lazy>
        </v-flex>
        <v-flex d-flex xs12 sm6 md3>
          <v-layout row wrap>
            <v-flex d-flex>
              <v-card color="indigo" dark>
                <v-card-title primary class="title">Lorem</v-card-title>
                <v-card-text>{{ lorem.slice(0, 70) }}</v-card-text>
              </v-card>
            </v-flex>
            <v-flex d-flex>
              <v-layout row wrap>
                <v-flex v-for="i in 2" :key="i" d-flex xs12>
                  <v-card color="red lighten-2" dark>
                    <v-card-title>Lorem</v-card-title>
                    <v-card-text>{{ lorem.slice(0, 40) }}</v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex d-flex xs12 sm6 md2 child-flex>
          <v-card color="green lighten-2" dark>
            <v-card-title primary class="title">Lorem</v-card-title>
            <v-card-text>{{ lorem.slice(0, 90) }}</v-card-text>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm6 md3>
          <v-card color="blue lighten-2" dark>
            <v-card-title primary class="title">Lorem</v-card-title>
            <v-card-text>{{ lorem.slice(0, 100) }}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      lorem: `Hard relaunch; Visual Concept, UX, Implementation (Frontend & CMS), Deployment; Hosting`
    }
  }
}
</script>
<style scoped lang="scss">
@import '@/theme/variables.scss';
.projects {
  background: $background !important;
}
</style>
