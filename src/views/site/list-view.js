import { div, h1, p, button, ul, li, mount } from '@/modules/brage-dom.js'

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

  render = ({ message }) => {
    const view = div(
      h1(`List: ${message}`),
      p('Listing items and updating them'),
      this.button = button('Shuffle'),
      this.list = ul(...this.items())
    )
    this.button.onclick = this.update

    return view
  }
}

export default new ListView()
