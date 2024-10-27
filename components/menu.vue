<template>
  <div class="menu" onload="width()">
    <div class="content">
    <ul>
      <li><NuxtLink v-on:click="close()" href="/">Index</NuxtLink></li>
    </ul>
    <img v-on:click="toogle()" src="~/assets\icons\menu.png" alt="Mobile Menu">
      <ul class="linkContainer " :class="{ show: toggleMenu }">
        <li><NuxtLink v-on:click="close()" href="/text">text</NuxtLink></li>
        <li><NuxtLink v-on:click="close()" href="#">test</NuxtLink></li>
        <li><NuxtLink v-on:click="close()" href="#">test</NuxtLink></li>
      </ul>
    </div>
  </div>
</template>

<script setup>

import { ref } from 'vue';

const toggleMenu = ref(false);

const close = () => {
  toggleMenu.value = false;
}

const toogle = () => {
  toggleMenu.value = !toggleMenu.value;
}

</script>

<style lang="scss">
  .menu {
    border-bottom: 2px solid var(--primary-dark);
    background-color: var(--secondary-light);
    img {
      display: none;
      padding: 10px 20px;

    }

    .content {
      display: flex;
      flex-direction: row;
      width: 65vw;
      margin: auto;
      justify-content: space-between;
      align-items: center;

      border-left: 2px solid var(--primary-dark);
      border-right: 2px solid var(--primary-dark);
    }
}

ul {
  display: flex;
  list-style: none;
  gap: 20px;
  padding: 10px;
  margin: 10px;

  a {
    display: flex;
    justify-content: center;
    
    text-decoration: none;
    color: var(--primary-dark);
    text-transform: capitalize;
  }
}

/* Tablet breakpoint at 1080px */
@media (max-width: 1080px) {
  body {
    .menu {


      .content {
        width: 85vw;
      }



      
    }
  }
}

/* Mobile breakpoint at 640px */
@media (max-width: 640px) {
  body {
    .menu {
      img {
      display: block;
    }
      .content {
        width: 85vw;
      }
      .linkContainer {
       
        position: absolute;
        top: 60px;
        transform: translateY(-100vh);
 
        width: inherit;
        height: calc(100dvh - 60px - 58px);
        padding: 0 0 60px 0;
        margin: -2px;

        display: flex;
        flex-direction: column;
        width: inherit;

        justify-content: space-evenly;
        align-items: center;
        transition: 1s;
      
        z-index: -1;

        border-left: 2px solid var(--primary-dark);
        border-right: 2px solid var(--primary-dark);
       a {
         font-size: 24px;
       }


     

     }
     .linkContainer::after {
        content: '';
        width: 100vw;
        height: 60px;
        position: absolute;
        bottom: 0px;
        border-top: 2px solid var(--primary-dark);


      }
  }
  }
  .show {
    transform: translateY(0vh) !important;
    filter: blur(0px) !important;
       }
}

</style>