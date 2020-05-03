<template>
  <div class="app"></div>
</template>

<script>
import 'three'

export default {
  mounted() {
    /* eslint-disable global-require */
    /* eslint-disable no-undef */

    global.THREE = require('three')

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )

    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)
    renderer.setClearColor(0xff0000, 1)

    const geometry = new THREE.BoxGeometry()
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    camera.position.z = 5
  }
}
</script>

<style>
body {
  margin: 0;
}
canvas {
  display: block;
}
</style>
