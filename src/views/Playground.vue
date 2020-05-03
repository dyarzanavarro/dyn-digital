<template>
  <v-app>
    <v-container fluid class="playground">
      <v-toolbar-title class="title">Playground</v-toolbar-title>

      <v-row class="row">
        <v-col>
          <v-card class="mx-auto cards" max-width="400">
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://aframe.io/images/card.jpg?v2"
            >
            </v-img>

            <v-card-subtitle class="pb-0"
              >Playing around with A-Frame in Vue</v-card-subtitle
            >

            <v-card-text class="text--primary">
              <div>
                A quick test of A-Frames capabilities with the added physics
                system
              </div>

              <div>
                https://github.com/aframevr/aframe +
                https://github.com/donmccurdy/aframe-physics-system
              </div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text left>
                Share
              </v-btn>
              <v-spacer></v-spacer>

              <v-btn
                :to="{ name: 'aFrameScene' }"
                right
                class="ma-2"
                tile
                outlined
                color="success"
              >
                <v-icon left>mdi-pencil</v-icon> Explore AR/VR Scene
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col>
          <v-card class="mx-auto cards" max-width="400">
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://miro.medium.com/max/724/1*aDcnXab1QC_5KF8JUxDEYA.png"
            >
            </v-img>

            <v-card-subtitle class="pb-0"
              >Playing around with ThreeJS in Vue</v-card-subtitle
            >

            <v-card-text class="text--primary">
              <div>
                A quick test of ThreeJS capabilities with the added physics
                system
              </div>

              <div></div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text left>
                Share
              </v-btn>
              <v-spacer></v-spacer>

              <v-btn
                :to="{ name: 'threeJSScene' }"
                right
                class="ma-2"
                tile
                outlined
                color="success"
              >
                <v-icon left>mdi-pencil</v-icon> Explore ThreeJS Scene
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col>
          <v-card class="mx-auto cards" max-width="400">
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://aframe.io/images/card.jpg?v2"
            >
            </v-img>

            <v-card-subtitle class="pb-0"
              >Playing around with A-Frame in Vue</v-card-subtitle
            >

            <v-card-text class="text--primary">
              <div>
                A quick test of A-Frames capabilities with the added physics
                system
              </div>

              <div>
                https://github.com/aframevr/aframe +
                https://github.com/donmccurdy/aframe-physics-system
              </div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text left>
                Share
              </v-btn>
              <v-spacer></v-spacer>

              <v-btn
                :to="{ name: 'aFrameScene' }"
                right
                class="ma-2"
                tile
                outlined
                color="success"
              >
                <v-icon left>mdi-pencil</v-icon> Explore AR/VR Scene
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script></script>

<style scoped lang="scss">
@import '@/theme/variables.scss';

.playground {
  background: $background !important;
}
.row .playground .col .v-application--wrap {
  background: $background !important;
}
.cards {
  border-radius: 48px;
  background: $background !important;
  box-shadow: 8px 8px 16px #cce6e6, -8px -8px 16px #faffff;
}
</style>
