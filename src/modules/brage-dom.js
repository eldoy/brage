"use strict"

// Mount elements into and clear out parent
export const mount = (children, parent = document.body) => {
  if (children.constructor !== Array) {
    children = [ children ]
  }

  parent.innerHTML = ''
  for (const c of children) {
    parent.appendChild(c)
  }
}
