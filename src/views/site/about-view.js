import { div, h1, p } from '../../modules/brage.js'

class AboutView {
  render () {
    return div(
      h1('About'),
      p('This is about us. We rock.')
    )
  }
}

export default new AboutView()
