import { body, reset } from '../../setup.js'
import { mount } from '@/modules/brage.js'
import todoView from '@/views/todo/todo-view.js'
import headerView from '@/views/layout/header-view.js'

describe('HTML', () => {

  // TodoView

  it('should have a TODO link in the header', () => {
    mount(headerView.render())
    const link = document.querySelector('a[href="/todo"]')
    expect(link).not.toEqual(null)
  })

  it('should display an empty list', () => {
    const list = todoView.render()
    mount(list)
    expect(body()).toMatch(/ul/)
    const items = list.querySelectorAll('li')
    expect(items[0]).toBeUndefined()
  })

  it('should display an input field with a placeholder', () => {
    const input = document.body.querySelector('input')
    expect(input).not.toEqual(null)
    expect(input.getAttribute('type')).toEqual('text')
    expect(input.placeholder).toEqual('What to do?')
  })
})
