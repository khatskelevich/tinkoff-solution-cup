<script setup lang="ts">
import axios from "axios";
import {API_URL} from "../../../shared/constants";
import {Operation} from "../add-expence/downloadOperation";

const props = defineProps<{ id: number | string }>()

const response = await axios.get<Operation[]>(`${API_URL}/${props.id}/operations.json`)
const operations = response.data
</script>

<template>
  <el-card>
    <template #header>
      <div class="operations">
        <span class="operation-title">History</span>
      </div>
    </template>
    <div class="operation" v-for="(operation, key) of operations" :key="key">{{ operation.name }} -
      <strong>{{ operation.value }}</strong></div>
  </el-card>
</template>

<style scoped>
.operations {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.operation-title {
  font-size: 14px;
  color: grey;
}

.operation {
  text-align: left;
}
</style>