import { footer, div } from '../../modules/brage.js'

class FooterView {
  render () {
    return (
      footer(
        div('Created with Brage.js')
      )
    )
  }
}

export default new FooterView()
