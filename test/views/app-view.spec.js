import appView from '@/views/app-view.js'
import { body, reset } from '../setup.js'

beforeEach(reset)

describe('HTML', () => {

  // AppView

  it('should mount header, main and footer', () => {
    appView.render()
    expect(body()).toMatch(/header/)
    expect(body()).toMatch(/main/)
    expect(body()).toMatch(/footer/)
  })
})
