<script setup lang="ts">
import Loader from "../widgets/loader/Loader.vue";
import MainPage from "./MainPage.vue";

</script>

<template>
  <suspense>
    <MainPage/>

    <template #fallback>
      <loader/>
    </template>
  </suspense>
</template>

<style scoped>
</style>
