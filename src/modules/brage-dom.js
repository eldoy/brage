"use strict"

// Append new elements to node
export const append = (els, node = document.body) => {
  if (els.constructor !== Array) {
    els = [els]
  }

  for (const el of els) {
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
  node.parentNode.insertBefore(el, node)
}

// Replace node with element
export const replace = (el, node = document.body) => {
  node.parentNode.replaceChild(el, node)
}
