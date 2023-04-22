<script setup lang="ts">
import axios from "axios";
import {API_URL} from "../shared/constants";
import MyHeader from "../widgets/MyHeader.vue";
import Balance from "../widgets/balance/Balance.vue"

const response = await axios.get(`${API_URL}/main.json`)
const userData = await response.data
</script>

<template>
  <my-header :user="user"/>
  <main>
    <balance v-if="userData" :id="userData.id"></balance>
  </main>
</template>

<style scoped>

</style>