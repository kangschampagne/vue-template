import store from '@/store'

const memberHeader = 'X-Member-Token'

export function authInterceptor (config) {
  if (store.getters['user/apiToken'] != null) {
    config.headers[memberHeader] = store.getters['user/apiToken']
  }

  return config
}
