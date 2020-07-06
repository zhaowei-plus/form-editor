import axios from 'axios'
import store from '@/store'

// 请求拦截器
axios.interceptors.request.use(
  config => {
    // header 中统一加上token
    // const token = store.state.token
    // token && (config.headers.Authorization = token)
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
axios.interceptors.response.use(
  response => {
    // 返回状态是200 表示接口请求成功
    if (response.status === 200) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },

  error => {
    const { response } = error
    if (response.status) {
      switch (status) {
        // 异常状态处理
      }
    }

    return Promise.reject(response)
  }
)
