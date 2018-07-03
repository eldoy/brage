import store from './lib/store.js'
import router from './lib/router.js'
import appView from './views/app-view.js'

// Init app
appView.render()
router.render()

export default appView
