import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    userId: null,
    email: null,
    token: null,
    isLoggedIn: false,
    heartbeatTimer: null
  }),

  getters: {
    isGuest: (state) => !state.isLoggedIn
  },

  actions: {
    // 登录
    login(userData) {
      console.log('userStore.login called, userData:', userData)
      this.userId = userData.userId
      this.email = userData.email
      this.token = userData.token
      this.isLoggedIn = true

      console.log('Saving user info to localStorage')
      // 保存到LocalStorage
      localStorage.setItem('token', userData.token)
      localStorage.setItem('userId', userData.userId)
      localStorage.setItem('userEmail', userData.email)

      // 启动心跳定时器
      this.startHeartbeat()

      console.log('Login state:', {
        userId: this.userId,
        email: this.email,
        isLoggedIn: this.isLoggedIn,
        token: this.token ? 'set' : 'not set'
      })
    },

    // 登出
    logout() {
      this.userId = null
      this.email = null
      this.token = null
      this.isLoggedIn = false

      // 停止心跳定时器
      this.stopHeartbeat()

      // 清除LocalStorage
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
      localStorage.removeItem('userEmail')
    },

    // 检查认证状态
    checkAuth() {
      const token = localStorage.getItem('token')
      const userId = localStorage.getItem('userId')
      const email = localStorage.getItem('userEmail')

      if (token && userId && email) {
        this.userId = userId
        this.email = email
        this.token = token
        this.isLoggedIn = true

        // 启动心跳定时器
        this.startHeartbeat()

        return true
      }

      return false
    },

    // 启动心跳定时器
    startHeartbeat() {
      // 清除现有定时器
      this.stopHeartbeat()

      // 每30秒发送一次心跳
      this.heartbeatTimer = setInterval(async () => {
        if (!this.token) {
          this.stopHeartbeat()
          return
        }

        try {
          const response = await fetch('/api/auth/heartbeat', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${this.token}`
            }
          })

          if (!response.ok) {
            console.error('心跳失败:', response.status)
            // 如果是401未授权，停止心跳并登出
            if (response.status === 401) {
              this.logout()
            }
          } else {
            const data = await response.json()
            console.log('心跳成功:', data)
          }
        } catch (error) {
          console.error('心跳请求失败:', error)
        }
      }, 30000) // 30秒

      console.log('心跳定时器已启动')
    },

    // 停止心跳定时器
    stopHeartbeat() {
      if (this.heartbeatTimer) {
        clearInterval(this.heartbeatTimer)
        this.heartbeatTimer = null
        console.log('心跳定时器已停止')
      }
    }
  }
})
