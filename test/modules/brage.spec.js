import { mount, fragment, span, main, h1, p, div } from '@/modules/brage.js'
import { body, reset } from '../setup.js'

beforeEach(reset)

describe('Brage', () => {

  // DOM

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

  it('should be able to use fragment', () => {
    var f = fragment(div())
    mount(f)
    expect(body()).toEqual('<div></div>')
  })


  // TAGS AND ATTRIBUTES

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

  // NESTING

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
})
