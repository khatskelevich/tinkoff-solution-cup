<script setup lang="ts">
import BalanceSkeleton from "./BalanceSkeleton.vue";
import {WalletFilled} from '@element-plus/icons-vue'
import axios from "axios";
import {API_URL} from "../../shared/constants";
import {ref} from "vue";
import AddExpence from "../expences/add-expence/AddExpense.vue";

const props = defineProps<{ id: number | string }>()

const response = await axios.get(`${API_URL}/balance/${props.id}.json`)
const data = response.data

const dialogVisible = ref(false)
const toggleBalanceDialog = (value: boolean) => {
  console.log( dialogVisible.value )
  dialogVisible.value = value
}
</script>
<template>
  <suspense>
    <el-card>
      <section class="balance-wrapper">
        <article class="balance">
          <span class="balance-title">Общий баланс</span>
          <span class="balance-main">{{ data.balance }}</span>
        </article>
        <el-button type="primary" :icon="WalletFilled" round @click="toggleBalanceDialog"/>
      </section>

      <add-expence @close="toggleBalanceDialog" :id="id" :dialogVisible="dialogVisible"/>
    </el-card>

    <template #fallback>
      <balance-skeleton/>
    </template>
  </suspense>
</template>

<style scoped>
.balance-wrapper {
  display: flex;
}

.balance {
  flex: 1 1 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.balance-title {
  font-size: 14px;
  color: grey;
}

.balance-main {
  font-size: 32px;
  color: #363B64;
  font-weight: bold;
}
</style>