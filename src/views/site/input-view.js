import { mount, fragment, input } from '@/modules/brage.js'
import outputView from './output-view.js'

class InputView {

  update = () => {
    outputView.output.textContent = this.input.value
  }

  render = () => {
    const view = (
      fragment(
        this.input = input({ type: 'text' })
      )
    )
    this.input.onkeyup = this.update
    return view
  }
}

export default new InputView()
