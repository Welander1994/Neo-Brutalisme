<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    startTime();
})
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =  h + ":" + m + ':' + s ;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
</script>

<template>
    <div>
        <p id="txt">12:48</p>
    </div>
</template>

<style lang="scss" scoped>
@font-face {
  font-family: myFirstFont;
  src: url('~/assets/fonts/digital-7 (mono).ttf');
}
        p {
                padding: 10px;
                margin: 0;
                font-family: myFirstFont;
                opacity: 50%;
            }
</style>