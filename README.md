# Brage.js

Concept Javascript component library for single page web applications. Very minimal, only 150 lines of code, no dependencies, just plain vanilla Javascript (ES6). Does not use a virtual DOM, updates must be done by calling render when your data updates.

Includes complete webpack setup and tests. Enjoy!

### INSTALLATION

```npm i brage```

You can also just include the javascript file found in ```dist/brage.js``` in your HTML file.

### USAGE

From within your application views or components do for example ```import { div, a, p, input } from 'brage'``` to include the div, a, p and input tags.

To run the example application, clone the repo, and do ```npm install``` then ```npm run dev```. The live server should start automatically in your browser at ```http://localhost:8080```. Hot code reloading included out of the box.

Start the tests with ```npm run test```. Testing brage views is super easy with Jest or JSDOM as everything is just a function.

```javascript
// This is what it looks like

section(
  h1('Brage.js is so easy'),
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

### API
Every element has access to its parent through the ```parent``` property.

```javascript
// Access the parent
let world
const list = ul(
  li('Hello'),
  world = li('World')
)
world.parent === list // true
```

The Brage DOM methods makes it easy to manipulate the DOM, but you can also just use the standard DOM methods included in all browsers. All Brage tag elements are just normal HTMLElements.

#### Mount
```javascript
// Mount list into body
const list = ul(li('Hello'), li('World'))
mount(list)

// Mount list into another tag
mount(list, document.querySelector('#app'))
```
#### Append
```javascript
// Append paragraph to body
const paragraph = p('Hello world')
append(paragraph)

// Append paragraph to another element
append(paragraph, document.querySelector('#app'))
```

#### Insert
```javascript

// Insert a new paragraph before the .paragraph element
insert(p('New'), document.querySelector('.paragraph'))
```

#### Replace
```javascript
// Replace a paragraph with another paragaph
replace(p('New'), document.querySelector('.paragraph'))
```

### VIEWS

The views are the components of Brage. They should be a class or a function instance that has a render function.

```javascript
import { div, h1, p, img } from '@/modules/brage.js'
import banner from '@/assets/images/brage.jpg'

class HomeView {
  render = () => {
    return(
      div(
        h1('Home'),
        p('Welcome to our Brage.js demo page!'),
        div(
          img({ src: banner })
        )
      )
    )
  }
}

export default new HomeView()
```

Import the view in another file with
```javascript
import homeView from '@/views/site/home-view.js'
```

### ROUTER

Brage comes with a router for your pages.

```javascript
// The view is a class that contains a render function.

import { BrageRouter } from 'brage'
import homeView from '@/views/site/home-view.js'
import aboutView from '@/views/site/about-view.js'
import listView from '@/views/site/list-view.js'
import controllerView from '@/views/site/controller-view.js'
import todoView from '@/views/todo/todo-view.js'

const routes = [
  { path: '/', view: homeView },
  { path: '/about', view: aboutView },
  { path: '/list/:message', view: listView },
  { path: '/controller', view: controllerView },
  { path: '/todo', view: todoView }
]

export default new BrageRouter(routes)
```

To add a route, use the ```router-link``` class for your link:
```javascript
import { header, nav, a, div } from '@/modules/brage.js'
import routes from '@/lib/routes.js'

class HeaderView {
  render = () => {
    const view = (
      header(
        nav(
          // Add the router-link class to each router link
          this.homeLink = a('Home', { class: 'router-link active', href: '/' }),
          this.aboutLink = a('About', { class: 'router-link', href: '/about' }),
          this.listLink = a('List', { class: 'router-link', href: '/list/hello' }),
          this.controllerLink = a('Controller', { class: 'router-link', href: '/controller' }),
          this.todoLink = a('Todo', { class: 'router-link', href: '/todo' })
        )
      )
    )

    // Call registerLinks for each link you want to use with the router
    routes.registerLinks([
      this.homeLink,
      this.aboutLink,
      this.listLink,
      this.controllerLink,
      this.todoLink
    ])

    return view
  }
}

export default new HeaderView()

```

Add a ```:``` to you link parts to make your link paths dynamic. ```/users/:id``` will match the link ```/users/1234``` and will give you a props object sent to the ```render``` function in your view that looks like this:
```javascript
// Route props are sent to the render function
render = (props) => {
  console.log(props) // { id: '1234' }
}

// Use destructuring to capture the props directly
render = ({ id }) => {
  console.log(id) // '1234'
}
```

### TAGS
All HTML5 tags are supported. If you want to make your own tags for Web Components or similar, use ```t('tagname')``` instead.

Use ```fragment``` if you want to create a document fragment without any tag output.

a,
abbr,
address,
area,
article,
aside,
audio,
b,
base,
bdi,
bdo,
blockquote,
body,
br,
button,
canvas,
caption,
cite,
code,
col,
colgroup,
command,
datalist,
dd,
del,
details,
dfn,
div,
dl,
dt,
em,
embed,
fieldset,
figcaption,
figure,
footer,
form,
fragment,
h1,
h2,
h3,
h4,
h5,
h6,
head,
header,
hgroup,
hr,
html,
i,
iframe,
img,
input,
ins,
kbd,
keygen,
label,
legend,
li,
link,
main,
map,
mark,
menu,
meta,
meter,
nav,
noscript,
object,
ol,
optgroup,
option,
output,
p,
param,
pre,
progress,
q,
rp,
rt,
ruby,
s,
samp,
script,
section,
select,
small,
source,
span,
strong,
style,
sub,
summary,
sup,
table,
tbody,
td,
template,
textarea,
tfoot,
th,
thead,
time,
title,
tr,
track,
underline,
ul,
_var,
video,
wbr
