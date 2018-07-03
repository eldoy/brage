# Brage.js

Concept Javascript component library for Single Page Applications. Very minimal, only 150 lines of code, no dependencies. Does not use a virtual DOM, updates must be done by calling render manually.

Includes complete web pack setup and tests.

## USAGE

Clone the repo, and do ```npm install``` then ```npm run dev```. Start the tests with ```npm run test```.

Do ```npm install -g live-server``` and run ```live-server --entry-file=./index.html``` from the ```dist``` directory, then navigate to ```http://localhost:8080``` to view the example app.

```
section(
  h1('Header'),
  p('This is how you use it'),
  ul({ class: 'list' },
    li('Steak'),
    li('Milk'),
    li('Eggs'),
    li('Liver')
  ),
  aside('Cool?')
)
```


## SET UP BABEL

This has already been done, just keeping the info just in case.

```
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
```

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
'details',
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
'summary',
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
