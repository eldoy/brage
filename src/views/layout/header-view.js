import { header, nav, a, div } from '@/modules/brage.js'
import router from '@/lib/router.js'

class HeaderView {
  render = () => {
    const view = (
      header(
        nav(
          this.home = a('Home', { class: 'router-link active', href: '/' }),
          this.about = a('About', { class: 'router-link', href: '/about' }),
          this.list = a('List', { class: 'router-link', href: '/list' })
        )
      )
    )

    router.registerLinks([ this.home, this.about, this.list ])

    return view
  }
}

export default new HeaderView()
