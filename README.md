## SET UP BABEL

npm install babel-preset-env --save-dev


.babelrc

{
  "env": {
    "presets": [
      ["env", { "modules": "commonjs" }]
    ]
  }
}

package.json

{
  "devDependencies": {
    "babel-core": "^6.23.1",
    "babel-jest": "^22.4.3",
    "babel-preset-env": "^1.3.3",
    "jest": "^22.0.0"
  },
  "scripts": {
    "test": "NODE_ENV=test jest"
  },
  "engines": {
    "node": "^9.0.0"
  }
}


## TAGS

'a',
'abbr',
'address',
'area',
'article',
'aside',
'audio',
'b',
'base',
'bdi',
'bdo',
'blockquote',
'body',
'br',
'button',
'canvas',
'caption',
'cite',
'code',
'col',
'colgroup',
'command',
'datalist',
'dd',
'del',
'detailsinformation',
'dfn',
'div',
'dl',
'dt',
'em',
'embed',
'fieldset',
'figcaption',
'figure',
'footer',
'form',
'h1',
'h2',
'h3',
'h4',
'h5',
'h6',
'head',
'header',
'hgroup',
'hr',
'html',
'i',
'iframe',
'img',
'input',
'ins',
'kbd',
'keygen',
'label',
'legend',
'li',
'link',
'main',
'map',
'mark',
'menu',
'meta',
'meter',
'nav',
'noscript',
'object',
'ol',
'optgroup',
'option',
'output',
'p',
'param',
'pre',
'progress',
'q',
'rp',
'rt',
'ruby',
's',
'samp',
'script',
'section',
'select',
'small',
'source',
'span',
'strong',
'style',
'sub',
'summarycontrol',
'sup',
'table',
'tbody',
'td',
'textarea',
'tfoot',
'th',
'thead',
'time',
'title',
'tr',
'track',
'underline',
'ul',
'_var',
'video',
'wbr'
