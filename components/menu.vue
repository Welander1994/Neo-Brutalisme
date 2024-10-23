<script setup>

</script>

<template>
    <div class="navbar dropShadow">
        <a href="#home">Home</a>
        <a href="#menu">Menu</a>
        <a href="#about">About Us</a>
        <a href="#contact" class="navbar-right">{{body}}</a>
    </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap');

  .navbar {
    display: flex;
    margin: 20px auto;
    width: 80vw;
    background-color: var(--white);
    padding: 20px;
    z-index: -99;
    gap: 20px;

    a {
      text-decoration: none;
      color: black;
      font-family: "Public Sans", sans-serif;
      font-optical-sizing: auto;
      font-weight: 800;
      font-style: normal;
      transition: 1s;


      &:hover {
        text-decoration: underline;

      }
    }
  }

</style>