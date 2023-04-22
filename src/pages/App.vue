<script setup lang="ts">
import HelloWorld from '../pages/HelloWorld.vue'
import Loader from "../widgets/loader/Loader.vue";
import MainPage from "./MainPage.vue";

</script>

<template>
  <suspense>
    <HelloWorld/>

    <template #fallback>
      <loader/>
    </template>
  </suspense>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
