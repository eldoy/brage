import router from './lib/router.js'
import appView from './views/app-view.js'
import '@/assets/styles/app.scss'

// Init app
appView.render()
router.load(window.location.pathname)

export default appView
