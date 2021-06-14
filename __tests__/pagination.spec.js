import { mount } from '@vue/test-utils'
import Pagination from '@/components/planets/pagination/Pagination.vue'
// import Vue from 'vue'
// import ElementUI from 'element-ui'

// Vue.use(ElementUI)

describe('Pagination test', () => {
  it('should render pagination with 5 pages', () => {
    const wrapper = mount(Pagination, {
      propsData: {
        totalPages: 5
      },
      mocks: {
        $route: {
          params: {
            id: 5
          }
        }
      }
    })
    expect(wrapper.findAll('li').length).toEqual(5)
  })
})
