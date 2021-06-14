import { mount } from '@vue/test-utils'
import Planets from '@/components/planets/Planets.vue'

describe('Mounted App', () => {
  const wrapper = mount(Planets, {
    mocks: {
      $route: {
        params: {
          id: 5
        }
      }
    }
  })
  it('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
  it('renders Title correctly', () => {
    console.log(wrapper)
    expect(wrapper.text()).toContain('Recruitment  task  - planets')
  })
})
