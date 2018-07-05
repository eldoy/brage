import router from '@/lib/router.js'
import homeView from '@/views/site/home-view.js'
import { body, reset } from '../setup.js'

beforeEach(reset)

describe('HTML', () => {

  // Router

  it('should match route to the view', () => {
    router.routes = [
      [ '/', homeView ]
    ]
    const view = router.match('/')
    expect(view).toEqual(homeView)
  })
})
