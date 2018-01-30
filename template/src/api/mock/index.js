import MockAdapter from 'axios-mock-adapter'

export function mock (instance, options) {
  const _options = Object.assign({}, {
    ...options,
    delayResponse: 1500
  }, options)

  const mock = new MockAdapter(instance, _options)

  // assets
  mock
    .onGet('/app')
    .reply(200, fixture('./fixtures/app'))
}
