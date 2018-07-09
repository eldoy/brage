import { mount, fragment, h1, div, ul, li, form, input, button, a } from '@/modules/brage.js'
import store from '@/lib/store.js'

class TodoListView {

  createTodo = (event) => {
    event.preventDefault()
    const name = this.newInput.value.trim()

    if (name.length < 1) {
      this.newInput.focus()
    } else {
      store.add({ name: name, done: false })
      this.update()
      this.newInput.value = ''
    }
  }

  update = () => {
    mount(this.items(), this.todoList)
  }

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
    this.update()
  }

  items = () => {
    return store.todos.map((x, i) => {
      let checkbox, remove
      const item = li({ class: x.done ? 'input-checked' : false , 'data-index': `index-${i}` },
        checkbox = input({ type: 'checkbox', checked: x.done }),
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
    const view = fragment(
      h1('Todo'),
      form(
        this.newInput = input({ type: 'text', placeholder: 'What to do?'}),
        this.createButton = button('Create'),
      ),
      this.todoList = ul({ class: 'todo-list' }, ...this.items())
    )

    this.createButton.onclick = this.createTodo

    return view
  }
}

export default new TodoListView()
