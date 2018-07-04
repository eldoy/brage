import { header, nav, a, div } from '../../modules/brage.js'
import router from '../../lib/router.js'

class HeaderView {
  render () {
    const view = (
      header(
        nav(
          this.home = a('Home', { class: 'router-link active', href: '/' }),
          this.about = a('About', { class: 'router-link', href: '/about' })
        )
      )
    )

    router.registerLinks([ this.home, this.about ])

    return view
  }
}

export default new HeaderView()
