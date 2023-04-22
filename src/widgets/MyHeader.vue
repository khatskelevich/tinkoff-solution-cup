<script setup lang="ts">
import {User} from "../shared/user/User";

defineProps<{ user: User }>()
</script>

<template>
  <el-page-header :icon="null">
    <template #content>
      <div class="header">
        <el-avatar
            :size="32"
            class="mr-3"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
        <p>{{ user.first_name }}'s <span class="header-subtext">expence tracker</span></p>
      </div>
    </template>
  </el-page-header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;

  font-size: 16px;
}

.header-subtext {
  color: var(--el-text-color-regular)
}
</style>