"use strict"

// Parse arguments
const parse = (a) => {
  const o = { children: [] }

  for (const x of a) {
    switch (x.constructor) {
      case String:
        o.str = x; break
      case Object:
        o.atts = x; break
      default:
        o.children.push(x)
    }
  }

  return o
}

// Create tags, apply attributes and children
export const t = (tag, ...a) => {
  const { str = '', atts = {}, children } = parse(a)

  const el = tag === 'fragment' ?
    document.createDocumentFragment() :
    document.createElement(tag)

  el.textContent = str

  for (const x in atts) {
    if (atts[x]) {
      el.setAttribute(x, atts[x])
    }
  }

  for (const c of children) {
    if (c) {
      el.appendChild(c)
    }
  }

  return el
}

// Fragment, element without tags
export const fragment = (...a) => { return t('fragment', ...a)}

// Tags, all HTML5 tags are available
export const a = (...a) => { return t('a', ...a)}
export const abbr = (...a) => { return t('abbr', ...a)}
export const address = (...a) => { return t('address', ...a)}
export const area = (...a) => { return t('area', ...a)}
export const article = (...a) => { return t('article', ...a)}
export const aside = (...a) => { return t('aside', ...a)}
export const audio = (...a) => { return t('audio', ...a)}
export const b = (...a) => { return t('b', ...a)}
export const base = (...a) => { return t('base', ...a)}
export const bdi = (...a) => { return t('bdi', ...a)}
export const bdo = (...a) => { return t('bdo', ...a)}
export const blockquote = (...a) => { return t('blockquote', ...a)}
export const body = (...a) => { return t('body', ...a)}
export const br = (...a) => { return t('br', ...a)}
export const button = (...a) => { return t('button', ...a)}
export const canvas = (...a) => { return t('canvas', ...a)}
export const caption = (...a) => { return t('caption', ...a)}
export const cite = (...a) => { return t('cite', ...a)}
export const code = (...a) => { return t('code', ...a)}
export const col = (...a) => { return t('col', ...a)}
export const colgroup = (...a) => { return t('colgroup', ...a)}
export const command = (...a) => { return t('command', ...a)}
export const datalist = (...a) => { return t('datalist', ...a)}
export const dd = (...a) => { return t('dd', ...a)}
export const del = (...a) => { return t('del', ...a)}
export const details = (...a) => { return t('details', ...a)}
export const dfn = (...a) => { return t('dfn', ...a)}
export const div = (...a) => { return t('div', ...a)}
export const dl = (...a) => { return t('dl', ...a)}
export const dt = (...a) => { return t('dt', ...a)}
export const em = (...a) => { return t('em', ...a)}
export const embed = (...a) => { return t('embed', ...a)}
export const fieldset = (...a) => { return t('fieldset', ...a)}
export const figcaption = (...a) => { return t('figcaption', ...a)}
export const figure = (...a) => { return t('figure', ...a)}
export const footer = (...a) => { return t('footer', ...a)}
export const form = (...a) => { return t('form', ...a)}
export const h1 = (...a) => { return t('h1', ...a)}
export const h2 = (...a) => { return t('h2', ...a)}
export const h3 = (...a) => { return t('h3', ...a)}
export const h4 = (...a) => { return t('h4', ...a)}
export const h5 = (...a) => { return t('h5', ...a)}
export const h6 = (...a) => { return t('h6', ...a)}
export const head = (...a) => { return t('head', ...a)}
export const header = (...a) => { return t('header', ...a)}
export const hgroup = (...a) => { return t('hgroup', ...a)}
export const hr = (...a) => { return t('hr', ...a)}
export const html = (...a) => { return t('html', ...a)}
export const i = (...a) => { return t('i', ...a)}
export const iframe = (...a) => { return t('iframe', ...a)}
export const img = (...a) => { return t('img', ...a)}
export const input = (...a) => { return t('input', ...a)}
export const ins = (...a) => { return t('ins', ...a)}
export const kbd = (...a) => { return t('kbd', ...a)}
export const keygen = (...a) => { return t('keygen', ...a)}
export const label = (...a) => { return t('label', ...a)}
export const legend = (...a) => { return t('legend', ...a)}
export const li = (...a) => { return t('li', ...a)}
export const link = (...a) => { return t('link', ...a)}
export const main = (...a) => { return t('main', ...a)}
export const map = (...a) => { return t('map', ...a)}
export const mark = (...a) => { return t('mark', ...a)}
export const menu = (...a) => { return t('menu', ...a)}
export const meta = (...a) => { return t('meta', ...a)}
export const meter = (...a) => { return t('meter', ...a)}
export const nav = (...a) => { return t('nav', ...a)}
export const noscript = (...a) => { return t('noscript', ...a)}
export const object = (...a) => { return t('object', ...a)}
export const ol = (...a) => { return t('ol', ...a)}
export const optgroup = (...a) => { return t('optgroup', ...a)}
export const option = (...a) => { return t('option', ...a)}
export const output = (...a) => { return t('output', ...a)}
export const p = (...a) => { return t('p', ...a)}
export const param = (...a) => { return t('param', ...a)}
export const pre = (...a) => { return t('pre', ...a)}
export const progress = (...a) => { return t('progress', ...a)}
export const q = (...a) => { return t('q', ...a)}
export const rp = (...a) => { return t('rp', ...a)}
export const rt = (...a) => { return t('rt', ...a)}
export const ruby = (...a) => { return t('ruby', ...a)}
export const s = (...a) => { return t('s', ...a)}
export const samp = (...a) => { return t('samp', ...a)}
export const script = (...a) => { return t('script', ...a)}
export const section = (...a) => { return t('section', ...a)}
export const select = (...a) => { return t('select', ...a)}
export const small = (...a) => { return t('small', ...a)}
export const source = (...a) => { return t('source', ...a)}
export const span = (...a) => { return t('span', ...a)}
export const strong = (...a) => { return t('strong', ...a)}
export const style = (...a) => { return t('style', ...a)}
export const sub = (...a) => { return t('sub', ...a)}
export const summary = (...a) => { return t('summary', ...a)}
export const sup = (...a) => { return t('sup', ...a)}
export const table = (...a) => { return t('table', ...a)}
export const tbody = (...a) => { return t('tbody', ...a)}
export const td = (...a) => { return t('td', ...a)}
export const textarea = (...a) => { return t('textarea', ...a)}
export const tfoot = (...a) => { return t('tfoot', ...a)}
export const th = (...a) => { return t('th', ...a)}
export const thead = (...a) => { return t('thead', ...a)}
export const time = (...a) => { return t('time', ...a)}
export const title = (...a) => { return t('title', ...a)}
export const tr = (...a) => { return t('tr', ...a)}
export const track = (...a) => { return t('track', ...a)}
export const underline = (...a) => { return t('underline', ...a)}
export const ul = (...a) => { return t('ul', ...a)}
export const _var = (...a) => { return t('var', ...a)}
export const video = (...a) => { return t('video', ...a)}
export const wbr = (...a) => { return t('wbr', ...a)}
