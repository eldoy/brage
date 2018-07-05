import { div, h1, p, img } from '@/modules/brage.js'
import banner from '@/assets/images/brage.jpg'

class HomeView {
  render = () => {
    return(
      div(
        h1('Home'),
        p('Welcome to our home page!'),
        div(
          img({ src: banner })
        )
      )
    )
  }
}

export default new HomeView()
