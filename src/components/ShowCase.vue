<template>
  <v-container fluid>
    <v-row class="row">
      <v-col cols="12" sm="12" md="4" lg="4">
        <v-card
          class="mx-auto cards mb-6"
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
            <v-chip class="ma-2 chip" label text-color="white" color="black">
              <v-icon left>mdi-label</v-icon>
              HTML
            </v-chip>
            <v-chip class="ma-2 chip" label text-color="white" color="green">
              <v-icon left>mdi-label</v-icon>
              CSS
            </v-chip>
            <v-chip class="ma-2 chip" label text-color="white" color="pink">
              <v-icon left>mdi-label</v-icon>
              JS
            </v-chip>
          </v-card-text>

          <v-card-actions class="actions">
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
      <v-col cols="12" sm="12" md="4" lg="4">
        <v-card
          class="mx-auto cards mb-6"
          max-width="400"
          href="https://www.steppinginto.ch/"
          target="_blank"
        >
          <v-img class="white--text card-img2" height="200px"> </v-img>

          <v-card-subtitle class="pb-0">Steppinginto</v-card-subtitle>

          <v-card-text class="text--primary">
            Several applied universities launched a career program for STEM
            students and it needed a Website. Had to be easily configurable and
            understandable.
          </v-card-text>

          <v-card-actions class="actions">
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

      <v-col class="lg-col-4 mb-4">
        <v-card
          class="mx-auto cards mb-6"
          max-width="400"
          href="https://github.com/dyarzanavarro/workshop_website"
          target="_blank"
        >
          <v-img class="white--text card-img3" height="200px"> </v-img>

          <v-card-subtitle class="pb-0">Launch dentisana.ch</v-card-subtitle>

          <v-card-text class="text--primary">
            <div>
              Single Page Application for a local dentistry, with focus on Speed
              and UX. No longer active.
            </div>

            <v-chip class="ma-2 chip" label text-color="white" color="black">
              <v-icon left>mdi-label</v-icon>
              HTML
            </v-chip>
            <v-chip class="ma-2 chip" label text-color="white" color="green">
              <v-icon left>mdi-label</v-icon>
              CSS
            </v-chip>
            <v-chip class="ma-2 chip" label text-color="white" color="pink">
              <v-icon left>mdi-label</v-icon>
              JS
            </v-chip>
          </v-card-text>

          <v-card-actions class="actions">
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
</template>

<script>
export default {
  name: 'ShowCase'
}
</script>

<style scoped lang="scss">
@import '@/theme/variables.scss';

.projects {
  background: $background !important;
}
.row .projects .col .v-application--wrap {
  background: $background !important;
}
.cards {
  border-radius: 48px !important;
  background: $background !important;
  box-shadow: 8px 8px 16px #d1d1d1, -8px -8px 16px #ffffff;
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
