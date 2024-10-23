<script setup>
import { ref } from 'vue';

// Define reactive variables to track the coordinates
const x = ref(0);
const y = ref(0);


// Update coordinates based on the mouse movement
function coordinate(event) {
  x.value = event.clientX - window.innerWidth / 2;
  y.value = event.clientY - window.innerHeight / 2;
  console.log(window.innerWidth);
  document.querySelector('.banner').style.transform = `translate(${x.value * .1}px, ${y.value * .1}px)`;
} 
</script>

<template>
  <div @mousemove="coordinate" class="body">
    <div class="banner">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum deleniti minima consequuntur nostrum repellendus qui tempore assumenda? Velit, omnis ipsa vitae, recusandae eveniet laboriosam consectetur, mollitia sequi molestias labore provident.
    </div>
  </div>
</template>

<style lang="scss">
  .body {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: start;

    .banner {

      height: 100px;
      background-color: black;
      color: white;

      overflow: visible;
      z-index: 99;
      

    }
  }
</style>
