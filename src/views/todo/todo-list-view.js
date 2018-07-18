import { mount, ul, li, div, input, a, img } from '@/modules/brage.js'
import store from '@/lib/store.js'
import todoView from './todo-view.js'
import headImage from '@/assets/images/head.jpg'

class TodoListView {

  getIndex = (el) => {
    return parseInt(el.getAttribute('data-index').split('-')[1])
  }

  toggle = (event) => {
    const input = event.currentTarget
    const index = this.getIndex(input.parentNode)
    store.todos[index].done = input.checked
    store.save()
    input.parentNode.classList.toggle('input-checked')
  }

  remove = (event) => {
    event.preventDefault()
    const link = event.currentTarget
    const index = this.getIndex(link.parentNode.parentNode)
    store.remove(index)
    todoView.update()
  }

  items = () => {
    return store.todos.map((x, i) => {
      let checkbox, remove
      const item = li({ class: x.done ? 'input-checked' : false , 'data-index': `index-${i}` },
        checkbox = input({ type: 'checkbox', checked: x.done }),
        img({ class: 'profile-image', src: headImage }),
        div(x.name, { class: 'strike' }),
        div({ class: 'remove' },
          remove = a('Remove', { href: 'javascript:void(0)' })
        )
      )

      checkbox.onclick = this.toggle
      remove.onclick = this.remove
      return item
    })
  }

  render = () => {
    return (
      ul({ class: 'todo-list' }, ...this.items())
    )
  }
}
export default new TodoListView()
