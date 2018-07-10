class Store {
  constructor () {
    this.todos = this.load()
  }

  // Object looks like this:
  // { name: String, done: Boolean }
  add = (obj) => {
    this.todos.unshift(obj)
    this.save()
  }

  remove = (index) => {
    this.todos.splice(index, 1)
    this.save()
  }

  save = () => {
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }

  load = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
  }
}

export default new Store()
