<template>
  <div class="connection-test">
    <el-button type="primary" :loading="loading" @click="handleTest">
      {{ t('gateway.testConnection') }}
    </el-button>

    <div v-if="testResult" class="test-result">
      <div class="result-item">
        <span class="result-label">{{ t('gateway.connectionStatus') }}:</span>
        <el-tag :type="testResult.connected ? 'success' : 'danger'" size="large">
          {{ testResult.connected ? '🟢 ' + t('gateway.connectionSuccess') : '🔴 ' + t('gateway.connectionFailed') }}
        </el-tag>
      </div>

      <div v-if="testResult.connected" class="result-item">
        <span class="result-label">{{ t('gateway.connectionLatency') }}:</span>
        <span class="result-value">{{ testResult.latency }} {{ t('gateway.ms') }}</span>
      </div>

      <div v-if="testResult.message" class="result-item">
        <span class="result-label">{{ t('gateway.connectionMessage') }}:</span>
        <span class="result-value">{{ testResult.message }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import http from '@/utils/http'

const { t } = useI18n()

const props = defineProps({
  gatewayUrl: {
    type: String,
    required: true
  },
  token: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['success', 'fail'])

const loading = ref(false)
const testResult = ref(null)

const handleTest = async () => {
  loading.value = true

  console.log('ConnectionTest - start testing connection')
  console.log('ConnectionTest - gatewayUrl:', props.gatewayUrl)
  console.log('ConnectionTest - token:', props.token ? 'set' : 'not set')

  try {
    // 直接在前端测试Gateway连接，不通过后端
    const startTime = Date.now()
    const response = await fetch(`${props.gatewayUrl}/api/status`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${props.token}`,
        'Content-Type': 'application/json'
      }
    })
    const latency = Date.now() - startTime

    console.log('ConnectionTest - test response:', response)

    if (response.ok) {
      const data = await response.json()
      testResult.value = {
        connected: true,
        latency: latency,
        message: '连接成功'
      }
      console.log('ConnectionTest - connection success')
      emit('success', { connected: true, latency, data })
    } else {
      testResult.value = {
        connected: false,
        message: `连接失败: ${response.status} ${response.statusText}`
      }
      console.log('ConnectionTest - connection failed')
      emit('fail')
    }
  } catch (error) {
    console.error('ConnectionTest - test connection failed:', error)

    // 详细的错误信息
    let errorMessage = t('gateway.testFailed')
    if (error.response) {
      if (error.response.status === 400) {
        errorMessage = t('gateway.paramError') + (error.response.data?.message || t('gateway.checkGatewayToken'))
      } else if (error.response.status === 401) {
        errorMessage = t('gateway.authFailed')
      } else if (error.response.status === 404) {
        errorMessage = t('gateway.gatewayNotFound')
      } else {
        errorMessage = t('gateway.serverError') + (error.response.data?.message || error.message)
      }
    } else if (error.request) {
      errorMessage = t('gateway.networkError')
    } else {
      errorMessage = t('gateway.configError') + error.message
    }

    testResult.value = {
      connected: false,
      latency: 0,
      message: errorMessage
    }

    console.log('ConnectionTest - emit fail event')
    emit('fail')
  } finally {
    loading.value = false
  }
}

// 组件挂载时自动测试
onMounted(() => {
  handleTest()
})
</script>

<style scoped>
.connection-test {
  text-align: center;
}

.test-result {
  margin-top: 20px;
  padding: 20px;
  background: #f5f7fa;
  border-radius: 4px;
}

.result-item {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

.result-item:last-child {
  margin-bottom: 0;
}

.result-label {
  font-weight: 600;
  margin-right: 10px;
}

.result-value {
  color: #666;
}
</style>
