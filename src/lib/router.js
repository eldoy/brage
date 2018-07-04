import { mount } from '../modules/brage.js'
import store from './store.js'
import util from './util.js'
import homeView from '../views/site/home-view.js'
import aboutView from '../views/site/about-view.js'

class Router {
  constructor () {
    this.routes = {
      '/': homeView,
      '/about': aboutView
    }
    this.current = '/'

    util.autobind(this)

    // Init router
    window.addEventListener('popstate', this.dispatch)
  }

  // Happens on navigation
  navigate (event) {
    event.preventDefault()
    const link = event.target
    this.current = link.pathname
    history.pushState({}, '', link.href)
    this.render()

    const links = document.body.querySelectorAll('.router-link')
    for (const a of links) {
      a.classList.remove('active')
    }
    link.classList.add('active')
  }

  // Happens on popstate
  dispatch (event) {
    event.preventDefault()
    this.current = window.location.pathname
    this.render()
  }

  render () {
    // Find the current URL
    if (!this.main) {
      this.main = document.body.querySelector('main')
    }
    const component = this.routes[this.current]
    this.main.innerHTML = ''
    mount(component.render(), this.main)
  }
}

export default new Router()
