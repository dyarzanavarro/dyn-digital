<template>
  <v-container>
    <dialog-drag id="dialog-1">
      <p>Test dialog</p>
    </dialog-drag>
    <drop-area @drop="drop">
      <p>Drop Here</p>
    </drop-area></v-container
  >
</template>
<script>
import { DialogDrag, DropArea } from 'vue-dialog-drag'

export default {
  name: 'FileDrop',
  DialogDrag,
  DropArea,
  components: { DialogDrag, DropArea },
  methods: {
    drop(id) {
      console.log('drop id:', id)
    }
  }
}
</script>
<style></style>
<style src="vue-dialog-drag/dist/vue-dialog-drag.css"></style>
<style src="vue-dialog-drag/dist/vue-drop-area.css"></style>
<style src="vue-dialog-drag/dist/dialog-styles.css"></style>
