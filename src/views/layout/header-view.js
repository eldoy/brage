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

    this.home.addEventListener('click', router.navigate)
    this.about.addEventListener('click', router.navigate)

    return view
  }
}

export default new HeaderView()
