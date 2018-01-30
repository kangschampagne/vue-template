import axios from 'axios'
import { apiEndpointBaseUrl } from '@/site-config'
import { authInterceptor } from './interceptors'

class Api {
  constructor (apiClient, resources) {
    this.apiClient = apiClient

    Object.entries(resources).forEach(([key, factory]) => {
      this[key] = factory(this.apiClient)
    })
  }
}

function install (Vue, options) {
  const apiClient = axios.create({
    baseURL: apiEndpointBaseUrl,
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
      'Accept-Language': 'zh-CN',
      'X-Country': 'zh'
    }
  })

  apiClient.interceptors.request.use(authInterceptor)

  const api = new Api(apiClient, resources)

  if (options && options.mock) {
    import('./mock').then(({mock}) => {
      mock(apiClient)
    })
  }

  Vue.$api = api
  Vue.prototype.$api = api
}

export default {
  install
}
