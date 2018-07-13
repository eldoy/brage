import { div, h1, h4, p, i } from '@/modules/brage-dom.js'

class AboutView {
  render = () => {
    return div(
      h1('About'),
      p('This is about us. We rock.'),
      h4('Less is more'),
      p(`You don't always need huge frameworks like React, Vue or Angular. Brage is only 7Kb minified and scales just as well. It doesn't use a virtual DOM which makes it fast and easy to test.`
      ),
      h4('Just plain Javascript'),
      p(`You can use querySelector and getElementId, no need for refs. Store state in plain Javascript objects. Everything in Brage is just a function, your whole application is pure javascript.
      `),
      p(
        i('Try Brage today.')
      )
    )
  }
}

export default new AboutView()
