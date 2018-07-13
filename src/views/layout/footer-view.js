import { footer, div, a } from '@/modules/brage-dom.js'

class FooterView {
  render = () => {
    return (
      footer(
        div('Created with ',
          a('Brage.js', { href: 'https://github.com/fugroup/brage' })
        )
      )
    )
  }
}

export default new FooterView()
