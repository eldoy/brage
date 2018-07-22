import { BrageRouter } from '@/modules/brage.js'
import homeView from '@/views/site/home-view.js'
import aboutView from '@/views/site/about-view.js'
import listView from '@/views/site/list-view.js'
import controllerView from '@/views/site/controller-view.js'
import todoView from '@/views/todo/todo-view.js'

const routes = [
  { path: '/', view: homeView },
  { path: '/about', view: aboutView },
  { path: '/list/:message', view: listView },
  { path: '/controller', view: controllerView },
  { path: '/todo', view: todoView }
]

export default new BrageRouter(routes)
