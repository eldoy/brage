"use strict"

// Append new elements to node
export const append = (elements, node = document.body) => {
  if (elements.constructor !== Array) {
    elements = [elements]
  }

  for (const el of elements) {
    el.parent = node
    node.appendChild(el)
  }
}

// Replace content of node with element
export const mount = (el, node = document.body) => {
  node.innerHTML = ''
  append(el, node)
}

// Insert element before node
export const insert = (el, node = document.body) => {
  el.parent = node.parent
  node.parent.insertBefore(el, node)
}

// Replace node with element
export const replace = (el, node = document.body) => {
  el.parent = node.parent
  node.parent.replaceChild(el, node)
}
