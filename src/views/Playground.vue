<template>
  <v-app class="playground">
    <v-container fluid>
      <h1>Playground</h1>

      <v-row class="row">
        <v-col cols="12" sm="12" md="4" lg="4">
          <v-card class="mx-auto cards" max-width="400">
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://miro.medium.com/max/724/1*aDcnXab1QC_5KF8JUxDEYA.png"
            >
            </v-img>

            <v-card-subtitle class="pb-0"
              >Creating a 3D Portfolio in ThreeJS</v-card-subtitle
            >

            <v-card-text class="text--primary">
              <div>
                A quick test of A-Frames capabilities with the added physics
                system
              </div>

              <div></div>
            </v-card-text>

            <v-card-actions class="actions">
              <v-spacer></v-spacer>

              <v-btn
                :to="{ name: 'THREEDPortfolio' }"
                right
                class="cta ma-4"
                tile
                text
                color="success"
                block
                rel="noopener"
              >
                Explore
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="12" sm="12" md="4" lg="4">
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

            <v-card-actions class="actions">
              <v-spacer></v-spacer>

              <v-btn
                :to="{ name: 'threeJSScene' }"
                right
                class="cta ma-4"
                tile
                text
                color="success"
                block
                rel="noopener"
              >
                Explore
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="12" sm="12" md="4" lg="4">
          <v-card class="mx-auto cards" max-width="400">
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://immersive-web.github.io/webxr-samples/media/logo/webxr-logo.svg"
              contain
            >
            </v-img>

            <v-card-subtitle class="pb-0">WebXR</v-card-subtitle>

            <v-card-text class="text--primary">
              Lorem ipsum
            </v-card-text>

            <v-card-actions class="actions">
              <v-spacer></v-spacer>

              <v-btn
                :to="{ name: 'webXR' }"
                right
                class="cta ma-4"
                tile
                text
                block
                rel="noopener"
              >
                Explore
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="12" sm="12" md="4" lg="4">
          <v-card class="mx-auto cards" max-width="400">
            <v-img
              class="white--text align-end"
              height="200px"
              src="@/assets/img/tenerife/03_Casa-Puerto-Madera_Alejandro-Beautell-min.jpg"
            >
            </v-img>

            <v-card-subtitle class="pb-0"
              >Experimental House Showcase</v-card-subtitle
            >

            <v-card-text class="text--primary">
              I've always wanted to experiment with an architectural / house
              showcase
            </v-card-text>

            <v-card-actions class="actions">
              <v-spacer></v-spacer>

              <v-btn
                :to="{ name: 'houseshowcase' }"
                center
                class=" cta ma-2"
                tile
                text
                block
                rel="noopener"
              >
                Explore
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'Playground',
  data() {
    return {}
  }
}
</script>

<style scoped lang="scss">
@import '@/theme/variables.scss';

.playground {
  background: $background !important;
}
.row .playground .col .v-application--wrap {
  background: $background !important;
}
.cards {
  border-radius: 48px !important;
  background: $background !important;
  box-shadow: 8px 8px 16px #d1d1d1, -8px -8px 16px #ffffff;
}

.cta {
  color: $logo !important;
  box-shadow: none;
}
</style>
