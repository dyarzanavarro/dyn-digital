<template>
  <v-app class="projects">
    <v-container fluid>
      <v-toolbar-title class="title">Playground</v-toolbar-title>

      <v-row class="row">
        <v-col cols="12" sm="12" md="12" lg="4">
          <v-card
            class="mx-auto cards mb-12"
            max-width="400"
            href="https://psychologiestudierende.ch"
            target="_blank"
          >
            <v-img class="white--text card-img" height="200px"> </v-img>

            <v-card-subtitle class="pb-0"
              >Relaunch psychologiestudierende.ch</v-card-subtitle
            >

            <v-card-text class="text--primary">
              <div>
                WordPress based Relaunch for the psychology student council:
                Design, UX, Development, Hosting
              </div>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn
                href="https://psychologiestudierende.ch"
                target="_blank"
                right
                class="ma-4"
                tile
                outlined
                color="success"
              >
                Visit
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="12" lg="4">
          <v-card
            class="mx-auto cards mb-12"
            max-width="400"
            href="https://www.steppinginto.ch/"
            target="_blank"
          >
            <v-img class="white--text card-img2" height="200px"> </v-img>

            <v-card-subtitle class="pb-0">Steppinginto</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>
                Several applied universities launched a career program for STEM
                students and it needed a Website. Had to be easily configurable
                and understandable.
              </div>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn
                href="https://www.steppinginto.ch/"
                target="_blank"
                right
                class="ma-4"
                tile
                outlined
                color="success"
              >
                Visit
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col class="lg-col-4 mb-12">
          <v-card
            class="mx-auto cards mb-12"
            max-width="400"
            href="https://github.com/dyarzanavarro/workshop_website"
            target="_blank"
          >
            <v-img class="white--text card-img3" height="200px"> </v-img>

            <v-card-subtitle class="pb-0">Launch dentisana.ch</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>
                Single Page Application for a local dentistry, with focus on
                Speed and UX. No longer active.
              </div>

              <v-chip class="ma-2 chip" label text-color="white">
                <v-icon left>mdi-label</v-icon>
                Tags
              </v-chip>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn
                href="https://github.com/dyarzanavarro/workshop_website"
                target="_blank"
                right
                class="ma-4"
                tile
                outlined
                color="success"
              >
                Visit
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

.projects {
  background: $background !important;
}
.row .projects .col .v-application--wrap {
  background: $background !important;
}
.cards {
  border-radius: 48px;
  background: $background !important;
  box-shadow: 8px 8px 16px #cce6e6, -8px -8px 16px #cce6e6;
}

.card-img {
  background: url(https://psychologiestudierende.ch/wp-content/uploads/2020/04/cropped-psyCH_logo_PNG_white_medium.png)
      no-repeat,
    #da0020;
  background-size: contain;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.card-img2 {
  background: url(https://www.steppinginto.ch/wp-content/uploads/2018/04/cropped-stepping_into_logo_RZ_ohne_baseline-e1532439888802-2.jpg)
    no-repeat white;
  background-size: contain;
  display: block;
  align-content: center;
  margin-left: auto;
  margin-right: auto;
}

.card-img3 {
  background: url('../assets/img/dentisana2.gif') no-repeat;
  display: block;
  align-content: center;
  margin-left: auto;
  margin-right: auto;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
