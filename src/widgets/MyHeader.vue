<script setup lang="ts">
import {User} from "../shared/user/User";

defineProps<{ user: User }>()
</script>

<template>
  <el-page-header :icon="null">
    <template #content>
      <div class="flex items-center">
        <el-avatar
            :size="32"
            class="mr-3"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
        <span class="text-large font-600 mr-3"> Walleter </span>
        <span class="text-sm mr-2 header-text">Expence tracker</span>
      </div>
    </template>
  </el-page-header>
</template>

<style scoped>
.header-text {
  color: var(--el-text-color-regular)
}
</style>