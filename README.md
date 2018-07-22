# Brage.js

Concept Javascript component library for single page web applications. Very minimal, only 150 lines of code, no dependencies, just plain vanilla Javascript (ES6). Does not use a virtual DOM, updates must be done by calling render manually.

Includes complete webpack setup and tests. Enjoy!

### INSTALLATION

```npm i brage```

## USAGE

From within your application views or components do for example ```import { div, a, p, input } from 'brage'``` to include the div, a, p and input tags.

To run the example application, clone the repo, and do ```npm install``` then ```npm run dev```. The live server should start automatically in your browser at ```http://localhost:8080```. Hot code reloading included out of the box.

Start the tests with ```npm run test```.

```javascript
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

## TAGS
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
