import { mount, section } from '@/modules/brage-dom.js'
import headerView from './layout/header-view.js'
import mainView from './layout/main-view.js'
import footerView from './layout/footer-view.js'

class AppView {
  render = () => {
    mount(
      section(
        headerView.render(),
        mainView.render(),
        footerView.render()
      )
    )
  }
}

export default new AppView()
