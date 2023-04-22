<script setup lang="ts">
import BalanceSkeleton from "./BalanceSkeleton.vue";
import axios from "axios";
import {API_URL} from "../../shared/constants";

const props = defineProps<{ id: number | string }>()

const response = await axios.get(`${API_URL}/balance/${props.id}.json`)
const data = response.data
</script>
<template>
  <suspense>
    <el-card>
      <div class="balance">
        <span class="balance-title">Общий баланс</span>
        <span class="balance-main">{{ data.balance }}</span>
      </div>
    </el-card>

    <template #fallback>
      <balance-skeleton/>
    </template>
  </suspense>
</template>

<style scoped>
.balance {
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