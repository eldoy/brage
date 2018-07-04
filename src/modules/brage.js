// Parse arguments
const parse = (c) => {
  const o = {
    children: []
  }

  for (const x of c) {
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
export const t = (tag, ...c) => {
  let { str = '', atts = {}, children } = parse(c)

  const el = document.createElement(tag)
  el.textContent = str

  for (const a in atts) {
    el.setAttribute(a, atts[a])
  }

  for (const child of children) {
    el.appendChild(child)
  }

  return el
}

// Mount elements into and clear out parent
export const mount = (children, parent) => {
  if (children.constructor !== Array) {
    children = [children]
  }

  if (!parent) {
    parent = document.body
  }

  parent.innerHTML = ''
  for (const child of children) {
    parent.appendChild(child)
  }
}

// Tags, all HTML5 tags are available
export const a = (...c) => { return t('a', ...c)}
export const abbr = (...c) => { return t('abbr', ...c)}
export const address = (...c) => { return t('address', ...c)}
export const area = (...c) => { return t('area', ...c)}
export const article = (...c) => { return t('article', ...c)}
export const aside = (...c) => { return t('aside', ...c)}
export const audio = (...c) => { return t('audio', ...c)}
export const b = (...c) => { return t('b', ...c)}
export const base = (...c) => { return t('base', ...c)}
export const bdi = (...c) => { return t('bdi', ...c)}
export const bdo = (...c) => { return t('bdo', ...c)}
export const blockquote = (...c) => { return t('blockquote', ...c)}
export const body = (...c) => { return t('body', ...c)}
export const br = (...c) => { return t('br', ...c)}
export const button = (...c) => { return t('button', ...c)}
export const canvas = (...c) => { return t('canvas', ...c)}
export const caption = (...c) => { return t('caption', ...c)}
export const cite = (...c) => { return t('cite', ...c)}
export const code = (...c) => { return t('code', ...c)}
export const col = (...c) => { return t('col', ...c)}
export const colgroup = (...c) => { return t('colgroup', ...c)}
export const command = (...c) => { return t('command', ...c)}
export const datalist = (...c) => { return t('datalist', ...c)}
export const dd = (...c) => { return t('dd', ...c)}
export const del = (...c) => { return t('del', ...c)}
export const details = (...c) => { return t('details', ...c)}
export const dfn = (...c) => { return t('dfn', ...c)}
export const div = (...c) => { return t('div', ...c)}
export const dl = (...c) => { return t('dl', ...c)}
export const dt = (...c) => { return t('dt', ...c)}
export const em = (...c) => { return t('em', ...c)}
export const embed = (...c) => { return t('embed', ...c)}
export const fieldset = (...c) => { return t('fieldset', ...c)}
export const figcaption = (...c) => { return t('figcaption', ...c)}
export const figure = (...c) => { return t('figure', ...c)}
export const footer = (...c) => { return t('footer', ...c)}
export const form = (...c) => { return t('form', ...c)}
export const h1 = (...c) => { return t('h1', ...c)}
export const h2 = (...c) => { return t('h2', ...c)}
export const h3 = (...c) => { return t('h3', ...c)}
export const h4 = (...c) => { return t('h4', ...c)}
export const h5 = (...c) => { return t('h5', ...c)}
export const h6 = (...c) => { return t('h6', ...c)}
export const head = (...c) => { return t('head', ...c)}
export const header = (...c) => { return t('header', ...c)}
export const hgroup = (...c) => { return t('hgroup', ...c)}
export const hr = (...c) => { return t('hr', ...c)}
export const html = (...c) => { return t('html', ...c)}
export const i = (...c) => { return t('i', ...c)}
export const iframe = (...c) => { return t('iframe', ...c)}
export const img = (...c) => { return t('img', ...c)}
export const input = (...c) => { return t('input', ...c)}
export const ins = (...c) => { return t('ins', ...c)}
export const kbd = (...c) => { return t('kbd', ...c)}
export const keygen = (...c) => { return t('keygen', ...c)}
export const label = (...c) => { return t('label', ...c)}
export const legend = (...c) => { return t('legend', ...c)}
export const li = (...c) => { return t('li', ...c)}
export const link = (...c) => { return t('link', ...c)}
export const main = (...c) => { return t('main', ...c)}
export const map = (...c) => { return t('map', ...c)}
export const mark = (...c) => { return t('mark', ...c)}
export const menu = (...c) => { return t('menu', ...c)}
export const meta = (...c) => { return t('meta', ...c)}
export const meter = (...c) => { return t('meter', ...c)}
export const nav = (...c) => { return t('nav', ...c)}
export const noscript = (...c) => { return t('noscript', ...c)}
export const object = (...c) => { return t('object', ...c)}
export const ol = (...c) => { return t('ol', ...c)}
export const optgroup = (...c) => { return t('optgroup', ...c)}
export const option = (...c) => { return t('option', ...c)}
export const output = (...c) => { return t('output', ...c)}
export const p = (...c) => { return t('p', ...c)}
export const param = (...c) => { return t('param', ...c)}
export const pre = (...c) => { return t('pre', ...c)}
export const progress = (...c) => { return t('progress', ...c)}
export const q = (...c) => { return t('q', ...c)}
export const rp = (...c) => { return t('rp', ...c)}
export const rt = (...c) => { return t('rt', ...c)}
export const ruby = (...c) => { return t('ruby', ...c)}
export const s = (...c) => { return t('s', ...c)}
export const samp = (...c) => { return t('samp', ...c)}
export const script = (...c) => { return t('script', ...c)}
export const section = (...c) => { return t('section', ...c)}
export const select = (...c) => { return t('select', ...c)}
export const small = (...c) => { return t('small', ...c)}
export const source = (...c) => { return t('source', ...c)}
export const span = (...c) => { return t('span', ...c)}
export const strong = (...c) => { return t('strong', ...c)}
export const style = (...c) => { return t('style', ...c)}
export const sub = (...c) => { return t('sub', ...c)}
export const summary = (...c) => { return t('summary', ...c)}
export const sup = (...c) => { return t('sup', ...c)}
export const table = (...c) => { return t('table', ...c)}
export const tbody = (...c) => { return t('tbody', ...c)}
export const td = (...c) => { return t('td', ...c)}
export const textarea = (...c) => { return t('textarea', ...c)}
export const tfoot = (...c) => { return t('tfoot', ...c)}
export const th = (...c) => { return t('th', ...c)}
export const thead = (...c) => { return t('thead', ...c)}
export const time = (...c) => { return t('time', ...c)}
export const title = (...c) => { return t('title', ...c)}
export const tr = (...c) => { return t('tr', ...c)}
export const track = (...c) => { return t('track', ...c)}
export const underline = (...c) => { return t('underline', ...c)}
export const ul = (...c) => { return t('ul', ...c)}
export const _var = (...c) => { return t('var', ...c)}
export const video = (...c) => { return t('video', ...c)}
export const wbr = (...c) => { return t('wbr', ...c)}
