import { mount, fragment, label, h1, div, span, ul, li, form, input, button, a } from '@/modules/brage-dom.js'
import store from '@/lib/store.js'
import todoListView from './todo-list-view.js'

class TodoView {

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
    mount(this.counter(), this.itemCount)
    mount(todoListView.items(), this.todoList)
  }

  counter = () => {
    return label(`${store.todos.length} items`)
  }

  deleter = () => {
    return a('Delete Checked', { href: 'javascript:void(0)' })
  }

  render = () => {
    const view = fragment(
      this.itemCount = span({ class: 'item-count' }, this.counter()),
      h1('Todo'),
      form(
        this.newInput = input({ class: 'input-wide', type: 'text', placeholder: 'What to do?'}),
        this.createButton = button('Create'),
      ),
      this.todoList = todoListView.render()
    )

    this.createButton.onclick = this.createTodo

    return view
  }
}

export default new TodoView()
