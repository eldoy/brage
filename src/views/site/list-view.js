import { div, h1, p, button, ul, li, mount } from '@/modules/brage.js'

class ListView {

  constructor () {
    this.data = [
      'Oysters',
      'Bacon',
      'Fish',
      'Eggs'
    ]
  }

  update = () => {
    this.data.sort(() => Math.random() - 0.5)
    mount(this.items(), this.list)
  }

  items = () => {
    return this.data.map(x => li(x))
  }

  render = () => {
    const view = div(
      h1('List'),
      p('Listing items and updating them'),
      this.button = button('Shuffle'),
      this.list = ul(...this.items())
    )
    this.button.addEventListener('click', this.update)

    return view
  }
}

export default new ListView()
