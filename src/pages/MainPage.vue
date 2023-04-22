<script setup lang="ts">
import MyHeader from "../widgets/MyHeader.vue";
import Balance from "../widgets/balance/Balance.vue"
import {getUserData} from "../shared/user/getUserData";

const userData = await getUserData()
</script>

<template>
  <my-header :user="userData"/>
  <main>
    <balance v-if="userData" :id="userData.id"></balance>
  </main>
</template>

<style scoped>

</style>