import { mount } from '@/modules/brage.js'
import homeView from '@/views/site/home-view.js'
import aboutView from '@/views/site/about-view.js'
import listView from '@/views/site/list-view.js'

class Router {
  constructor () {
    this.routes = [
      [ '/', homeView ],
      [ '/about', aboutView ],
      [ '/list', listView ]
    ]

    // Transform routes
    this.transformRoutes()

    // Init router
    window.onpopstate = this.dispatch
  }

  // Transform routes to regexp matchers
  transformRoutes = () => {
    let sub = /\/:([^\/]+)/gi

    for (let route of this.routes) {
      let names = []
      let t = route[0].replace(sub, (match, m1) => {
        names.push(m1)
        return '/:([^\/]+)'
      })
      let rx = new RegExp(`^${t}$`)
      route[0] = rx
      route.push(names)
    }
  }

  // Register links for navigation
  registerLinks = (links) => {
    for (const link of links) {
      link.onclick = this.navigate
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

  // Match a route and return a view
  match = (path) => {
    for (const entry of this.routes) {
      let [ route, view ] = entry
      console.log(route, view, route.constructor)
      if (route.test(path)) {
        return view
      }
    }
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

    const view = this.match(path)
    mount(view.render(), this.main)

    this.activate(link)
  }
}

export default new Router()
