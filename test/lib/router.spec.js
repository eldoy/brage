import router from '@/lib/router.js'
import homeView from '@/views/site/home-view.js'
import aboutView from '@/views/site/about-view.js'
import listView from '@/views/site/list-view.js'
import { body, reset } from '../setup.js'

beforeEach(reset)

describe('HTML', () => {

  // Router

  it('should match route to the view', () => {
    const [ view, props ] = router.match('/')
    expect(view).toEqual(homeView)
    const [ view2, props2 ] = router.match('/about')
    expect(view2).toEqual(aboutView)
    const [ view3, props3 ] = router.match('/list/hello')
    expect(view3).toEqual(listView)
    const [ view4, props4 ] = router.match('/list/hello')
    expect(view4).toEqual(listView)
  })

  it('should handle missing route', () => {
    const [ view, props ] = router.match('/missing')
    expect(view).toBeUndefined()
    expect(props).toBeUndefined()
  })
})
