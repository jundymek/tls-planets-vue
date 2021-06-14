import { mount, createLocalVue } from '@vue/test-utils'
import App from '../src/App.vue'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

describe('Mounted App', () => {
  const wrapper = mount(App, {
    localVue,
    router
  })
  it('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
