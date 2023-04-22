<script setup lang="ts">
import MyHeader from "../widgets/MyHeader.vue";
import Balance from "../widgets/balance/Balance.vue"
import {getUserData} from "../shared/user/getUserData";
import ExpensesHistory from "../widgets/expences/history/ExpensesHistory.vue";

const userData = await getUserData()
</script>

<template>
  <my-header :user="userData"/>
  <main>
    <balance v-if="userData" :id="userData.id"></balance>
    <expenses-history :id="userData.id"/>
  </main>
</template>

<style scoped>

</style>