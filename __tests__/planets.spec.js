import { mount } from '@vue/test-utils'
import Planets from '@/components/Planets'

describe('Mounted App', () => {
  const wrapper = mount(Planets, {
    mocks: {
      $route: {
        params: {
          id: 1
        }
      }
    }
  })
  it('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
