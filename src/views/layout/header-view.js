import { header, nav, a, div } from '@/modules/brage.js'
import router from '@/lib/router.js'

class HeaderView {
  render = () => {
    const view = (
      header(
        nav(
          this.homeLink = a('Home', { class: 'router-link active', href: '/' }),
          this.aboutLink = a('About', { class: 'router-link', href: '/about' }),
          this.listLink = a('List', { class: 'router-link', href: '/list/hello' }),
          this.controllerLink = a('Controller', { class: 'router-link', href: '/controller' }),
          this.todoLink = a('Todo', { class: 'router-link', href: '/todo' })
        )
      )
    )

    router.registerLinks([
      this.homeLink,
      this.aboutLink,
      this.listLink,
      this.controllerLink,
      this.todoLink
    ])

    return view
  }
}

export default new HeaderView()
