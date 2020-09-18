<template>
  <v-container>
    <v-sheet
      tabindex="0"
      title="Click to grap a file from your PC!"
      color="indigo lighten-4"
      width="100%"
      height="200"
      class="pa-2"
    >
      <input type="file" [1] accept="text/xml" style="display:none" /> [2]
    </v-sheet>
  </v-container>
</template>
<script>
export default { name: 'FileDrop' }
</script>
