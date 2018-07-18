import { mount, replace, append, insert, fragment, span, main, h1, p, div, ul, li } from '@/modules/brage.js'
import { body, reset } from '../setup.js'

beforeEach(reset)

describe('Brage', () => {

  /**
   DOM
  **/

  // APPEND

  it('should append an element', () => {
    const divTag = div()
    const pTag = p(
      span()
    )
    mount(divTag)
    expect(body()).toEqual('<div></div>')
    append(pTag, document.body)
    expect(body()).toEqual('<div></div><p><span></span></p>')
  })

  it('should append an array of elements', () => {
    const list = ul()
    mount(list)
    expect(body()).toEqual('<ul></ul>')
    const items = [li(), li()]
    append(items, list)
    expect(body()).toEqual('<ul><li></li><li></li></ul>')
  })

  // MOUNT

  it('should mount tags on body', () => {
    const div = document.createElement('div')
    mount(div)
    expect(body()).toEqual('<div></div>')
    const p = document.createElement('p')
    mount(p)
    expect(body()).toEqual('<p></p>')
  })

  it('should mount tags where you specify', () => {
    const div = document.createElement('div')
    mount(div)
    expect(body()).toEqual('<div></div>')
    const p = document.createElement('p')
    mount(p, div)
    expect(body()).toEqual('<div><p></p></div>')
  })

  it('should be able to mount a fragment', () => {
    const f = fragment(div())
    mount(f)
    expect(body()).toEqual('<div></div>')
  })

  it('should be able to mount an empty fragment', () => {
    const f = fragment('hello')
    mount(f)
    expect(body()).toEqual('hello')
  })

  // REPLACE

  it('should replace an element with new elements', () => {
    const divTag = div()
    const pTag = p(
      span()
    )
    mount(divTag)
    expect(body()).toEqual('<div></div>')
    replace(pTag, divTag)
    expect(body()).toEqual('<p><span></span></p>')
  })

  it('should replace a list item with a new list item', () => {
    let item
    const list = ul(
      item = li('Hello'),
      li('Hadet')
    )
    const newItem = li('New')

    mount(list)
    expect(body()).toEqual('<ul><li>Hello</li><li>Hadet</li></ul>')
    replace(newItem, item)
    expect(body()).toEqual('<ul><li>New</li><li>Hadet</li></ul>')
  })

  // INSERT

  it('should insert an element before another element', () => {
    const divTag = div()
    const pTag = p(
      span()
    )
    mount(divTag)
    expect(body()).toEqual('<div></div>')
    insert(pTag, divTag)
    expect(body()).toEqual('<p><span></span></p><div></div>')
  })


  /**
   TAGS AND ATTRIBUTES
  **/

  it('should generate a main tag', () => {
    const tag = main()
    mount(tag)
    expect(body()).toEqual('<main></main>')
  })

  it('should generate a span tag without content', () => {
    const tag = span()
    mount(tag)
    expect(body()).toEqual('<span></span>')
  })

  it('should generate a tag without content', () => {
    const tag = p()
    mount(tag)
    expect(body()).toEqual('<p></p>')
  })

  it('should generate a tag with content', () => {
    const tag = p('hello')
    mount(tag)
    expect(body()).toEqual('<p>hello</p>')
  })

  it('should generate a tag with class', () => {
    const tag = p({ class: 'name' })
    mount(tag)
    expect(body()).toEqual('<p class="name"></p>')
  })

  it('should not include an attribute if value is falsy', () => {
    const tag = p({ class: false })
    mount(tag)
    expect(body()).toEqual('<p></p>')
  })

  it('should generate a tag with id', () => {
    const tag = p({ id: 'name' })
    mount(tag)
    expect(body()).toEqual('<p id="name"></p>')
  })

  it('should generate a tag with id and content', () => {
    const tag = p('hello', { id: 'name' })
    mount(tag)
    expect(body()).toEqual('<p id="name">hello</p>')
  })

  it('should generate a tag with multiple attributes', () => {
    const tag = p('hello', { id: 'name', title: 'hello' })
    mount(tag)
    expect(body()).toEqual('<p id="name" title="hello">hello</p>')
  })

  /**
   NESTING
  **/

  it('should generate a nested tag', () => {
    const tags = p(
      span()
    )
    mount(tags)
    expect(body()).toEqual('<p><span></span></p>')
  })

  it('should generate a deeply nested tag', () => {
    const tags =
      p(
        span(
          div()
        )
      )
    mount(tags)
    expect(body()).toEqual('<p><span><div></div></span></p>')
  })

  it('should generate a deeply nested tag with attributes and content', () => {
    const tags =
      p('hello', { class: 'c1' },
        span('iam', { class: 'c2' },
          div('acoder', { class: 'c3' })
        )
      )
    mount(tags)
    expect(body()).toEqual('<p class="c1">hello<span class="c2">iam<div class="c3">acoder</div></span></p>')
  })

  it('should generate sibling tags', () => {
    const tags =
      p(
        span(),
        div()
      )
    mount(tags)
    expect(body()).toEqual('<p><span></span><div></div></p>')
  })

  it('should support conditional elements', () => {
    const loggedIn = () => {
      return false
    }
    const tags =
      p(
        span(),
        loggedIn() && div()
      )
    mount(tags)
    expect(body()).toEqual('<p><span></span></p>')
  })

  it('should have a parent if not root', () => {
    let h, s
    const tags =
      h = (p(
        s = span(),
        div()
      ))
    expect(h.parentNode).toBeNull()
    expect(s.parentNode).toBeDefined()
    expect(s.parentNode.constructor).toEqual(HTMLParagraphElement)
    mount(tags)
    expect(body()).toEqual('<p><span></span><div></div></p>')
    expect(h.parentNode.constructor).toEqual(HTMLBodyElement)
  })
})
