import { mount } from '../modules/brage.js'
import store from './store.js'
import homeView from '../views/site/home-view.js'
import aboutView from '../views/site/about-view.js'
import listView from '../views/site/list-view.js'

class Router {
  constructor () {
    this.routes = {
      '/': homeView,
      '/about': aboutView,
      '/list': listView
    }

    // Init router
    window.addEventListener('popstate', this.dispatch)
  }

  // Register links for navigation
  registerLinks = (links) => {
    for (const link of links) {
      link.addEventListener('click', this.navigate)
    }
  }

  // Happens when you click a registered link
  navigate = (event) => {
    event.preventDefault()
    const link = event.target
    history.pushState({}, '', link.href)
    this.load(link.pathname, link)
  }

  // Happens on popstate
  dispatch = (event) => {
    event.preventDefault()
    this.load(window.location.pathname)
  }

  // Activate the current link
  activate = (link) => {
    const links = document.body.querySelectorAll('.router-link')
    for (const a of links) {
      a.classList.remove('active')
    }
    link.classList.add('active')
  }

  // Load the view into main
  load = (path, link) => {
    if (!link) {
      link = document.body.querySelector(`a.router-link[href^="${path}"]`)
    }
    if (!this.main) {
      this.main = document.body.querySelector('main')
    }

    const view = this.routes[path]
    mount(view.render(), this.main)

    this.activate(link)
  }
}

export default new Router()
