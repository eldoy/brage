import routes from './lib/routes.js'
import appView from './views/app-view.js'
import '@/assets/styles/app.scss'
import '@/assets/styles/todo-view.scss'

// Init app
appView.render()
routes.load(location.pathname)

export default appView
