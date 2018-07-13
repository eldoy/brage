import routes from '@/lib/routes.js'
import homeView from '@/views/site/home-view.js'
import aboutView from '@/views/site/about-view.js'
import listView from '@/views/site/list-view.js'
import { body, reset } from '../setup.js'

beforeEach(reset)

describe('HTML', () => {

  // Routes

  it('should match route to the view', () => {
    const [ view, props ] = routes.match('/')
    expect(view).toEqual(homeView)
    const [ view2, props2 ] = routes.match('/about')
    expect(view2).toEqual(aboutView)
    const [ view3, props3 ] = routes.match('/list/hello')
    expect(view3).toEqual(listView)
    const [ view4, props4 ] = routes.match('/list/hello')
    expect(view4).toEqual(listView)
  })

  it('should handle missing route', () => {
    const [ view, props ] = routes.match('/missing')
    expect(view).toBeUndefined()
    expect(props).toBeUndefined()
  })
})
