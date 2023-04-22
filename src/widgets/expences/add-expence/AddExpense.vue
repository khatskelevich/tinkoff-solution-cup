<script lang="ts" setup>
import {reactive} from 'vue'
//@ts-ignore
import {ElMessageBox} from 'element-plus'
import {downloadOperation, Operation} from "./downloadOperation";

const props = defineProps<{ dialogVisible: boolean, id: string | number }>()
const emit = defineEmits(['close'])

const form = reactive<Operation>({
  name: '',
  value: 0,
  date: '',
  category: ''
})

const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Are you sure?')
      .then(() => {
        done()
      })
      .catch(() => {
        // catch error
      })
}

const confirm = () => {
  downloadOperation(props.id, form)
      .then(() => {
        emit('close', false)
      })
}
</script>
<template>
  <el-dialog
      :model-value="dialogVisible"
      @update:modelValue="$emit('close', dialogVisible)"
      title="Operation"
      width="40%"
      :before-close="handleClose"
  >
    <el-form :model="form" label-width="120px">
      <el-form-item label="Operation name">
        <el-input v-model="form.name"/>
      </el-form-item>
      <el-form-item label="Date of operation">
        <el-col :span="11">
          <el-date-picker
              v-model="form.date"
              type="date"
              placeholder="Pick a date"
              style="width: 100%"
          />
        </el-col>
      </el-form-item>
      <el-form-item label="Category">
        <el-input v-model="form.category"/>
      </el-form-item>
      <el-form-item label="Value">
        <el-input-number step="50" precision="2" v-model="form.value"/>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="confirm">Cancel</el-button>
        <el-button type="primary" @click="$emit('close', false)">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
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