import { fragment, div } from '@/modules/brage-dom.js'
import store from '@/lib/store.js'

class OutputView {

  render = () => {
    return (
      fragment(
        this.output = div({
          style: [
            'position: relative',
            'top: 1rem',
            'font-size: 1rem',
            'color: gray',
            'padding-bottom: 1rem'
          ].join(';')
        })
      )
    )
  }
}

export default new OutputView()
