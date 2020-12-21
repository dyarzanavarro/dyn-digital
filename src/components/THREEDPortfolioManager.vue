<template>
  <div id="scene-container" ref="sceneContainer"></div>
</template>

<script>
// eslint-disable-next-line
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default {
  name: 'THREEPortfolioManager',
  data() {
    return {
      container: null,
      scene: null,
      camera: null,
      controls: null,
      renderer: null
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      // set container
      this.container = this.$refs.sceneContainer
      // add stats
      // add camera
      const fov = 105 // Field of view
      const aspect = this.container.clientWidth / this.container.clientHeight
      const near = 0.1 // the near clipping plane
      const far = 150 // the far clipping plane
      const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
      camera.position.set(9, 20, 50)
      this.camera = camera
      // create scene
      this.scene = new THREE.Scene()
      this.scene.background = new THREE.Color('lightgrey')
      // add lights
      const ambientLight = new THREE.HemisphereLight(
        0xffffff, // bright sky color
        0x353535, // dim ground color
        0.3 // intensity
      )

      this.scene.add(ambientLight)
      // add controls
      // create renderer
      this.renderer = new THREE.WebGLRenderer({ antialias: true })
      this.renderer.setSize(
        this.container.clientWidth,
        this.container.clientHeight
      )
      this.renderer.setPixelRatio(window.devicePixelRatio)
      this.renderer.gammaFactor = 2.2
      this.renderer.outputEncoding = THREE.sRGBEncoding
      this.renderer.physicallyCorrectLights = true
      this.container.appendChild(this.renderer.domElement)
      // set aspect ratio to match the new browser window aspect ratio
      this.camera.aspect =
        this.container.clientWidth / this.container.clientHeight
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(
        this.container.clientWidth,
        this.container.clientHeight
      )
      const loader = new GLTFLoader()
      loader.load(
        'assets//Octopus//scene.gltf',
        gltf => {
          gltf.scene.scale.set(4, 4, 4)
          gltf.scene.position.x = 0 // Position (x = right+ left-)
          gltf.scene.position.y = 0 // Position (y = up+, down-)
          gltf.scene.position.z = 0

          this.scene.add(gltf.scene)
        },
        undefined,
        undefined
      )
      this.renderer.setAnimationLoop(() => {
        this.render()
      })
    },
    render() {
      this.renderer.render(this.scene, this.camera)
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#scene-container {
  height: 100rem;
  width: 100%;
}
</style>
