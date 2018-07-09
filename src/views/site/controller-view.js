import { h1, div, p, fragment } from '@/modules/brage.js'
import inputView from './input-view.js'
import outputView from './output-view.js'

class ControllerView {
  render = () => {
    return (
      fragment(
        h1('Controller'),
        p('Type something:'),
        inputView.render(),
        outputView.render()
      )
    )
  }
}

export default new ControllerView()
