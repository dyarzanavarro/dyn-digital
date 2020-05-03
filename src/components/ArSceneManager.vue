<template>
  <a-scene physics cursor="rayOrigin: mouse">
    <a-entity
      camera
      look-controls
      wasd-controls="acceleration:100"
      position="1 1 1"
      fly="false"
    ></a-entity>

    <a-entity
      id="leftHand"
      hand-controls="hand: left; handModelStyle: lowPoly; color: #ffcccc"
    ></a-entity>
    <a-entity
      id="rightHand"
      hand-controls="hand: right; handModelStyle: lowPoly; color: #ffcccc"
    ></a-entity>

    <a-assets>
      <!-- ... -->
      <img
        id="groundTexture"
        src="https://cdn.aframe.io/a-painter/images/floor.jpg"
      />
      <img id="boxTexture" src="https://i.imgur.com/mYmmbrp.jpg" />
      <img
        id="skyTexture"
        src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg"
      />
      <img
        id="groundTexture"
        src="https://cdn.aframe.io/a-painter/images/floor.jpg"
      />
    </a-assets>

    <a-box
      src="#boxTexture"
      static-body
      drag-rotate-component
      position="-1 0.5 -3"
      rotation="0 45 0"
      color="#4CC3D9"
      animation="property: object3D.position.y; to: 2.2; dir: alternate; dur: 500; loop: true"
    ></a-box>
    <a-sphere
      dynamic-body
      drag-rotate-component
      position="0 5.25 -5"
      radius="1.25"
      color="#EF2D5E"
    ></a-sphere>
    <a-cylinder
      dynamic-body
      drag-rotate-component
      position="1 0.75 -3"
      radius="0.5"
      height="1.5"
      color="#FFC65D"
    ></a-cylinder>
    <a-plane
      src="#groundTexture"
      repeat="10 10"
      static-body
      position="0 0 -4"
      rotation="-90 0 0"
      width="30"
      height="30"
      color="#fffff"
    ></a-plane>
    <a-sky src="#skyTexture"></a-sky>

    <a-light type="ambient" color="#445451"></a-light>
    <a-light type="point" intensity="1" position="2 10 4"></a-light>
  </a-scene>
</template>

<script>
// eslint-disable-next-line
import 'aframe'

export default {
  name: 'ArSceneManager',

  mounted() {
    const externalScript = document.createElement('script')
    externalScript.setAttribute(
      'src',
      '//cdn.rawgit.com/donmccurdy/aframe-physics-system/v4.0.1/dist/aframe-physics-system.min.js'
    )
    document.head.appendChild(externalScript)
  }
}
</script>

<style>
a-scene {
  display: block;
  width: 100%;
}
</style>
