import { div, h1, p } from '@/modules/brage.js'

class HomeView {
  render = () => {
    return(
      div(
        h1('Home'),
        p('Welcome to our home page!')
      )
    )
  }
}

export default new HomeView()
