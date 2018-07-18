"use strict"

// Append new element to node
export const append = (el, node = document.body) => {
  node.appendChild(el)
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
