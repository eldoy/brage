import { mount } from '@/modules/brage.js'
import homeView from '@/views/site/home-view.js'
import aboutView from '@/views/site/about-view.js'
import listView from '@/views/site/list-view.js'

class Router {
  constructor () {
    this.routes = [
      { path: '/', view: homeView },
      { path: '/about', view: aboutView },
      { path: '/list/:message', view: listView }
    ]

    // Transform routes
    this.transformRoutes()

    // Init router
    window.onpopstate = this.dispatch
  }

  // Transform routes to regexp matchers
  transformRoutes = () => {
    let sub = /\/:([^\/]+)/gi

    for (const route of this.routes) {
      const params = []
      const regexp = route.path.replace(sub, (match, str) => {
        params.push(str)
        return '/([^/]+)'
      })
      route.regexp = new RegExp(`^${regexp}$`, 'ig')
      route.params = params
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
    for (const route of this.routes) {
      let { regexp, view, params } = route

      if (regexp.test(path)) {
        const props = {}
        regexp.lastIndex = 0

        for (const p of params) {
          let m = regexp.exec(path)
          props[p] = m[1]
        }
        regexp.lastIndex = 0

        return [ view, props ]
      }
    }
  }

  // Activate the current link
  activate = (link) => {
    if (!link) { return }
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

    const [ view, props ] = this.match(path)
    if (view) {
      mount(view.render(props), this.main)
      this.activate(link)
    }
  }
}

export default new Router()
