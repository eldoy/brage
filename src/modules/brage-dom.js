"use strict"

// Append new element to node
export const append = (element, node) => {
  node.appendChild(element)
}

// Append element into node, clearing out existing content
export const mount = (element, node = document.body) => {
  node.innerHTML = ''
  append(element, node)
}

// Replace node element with elements
export const replace = (element, node) => {
  mount(element, node.parentNode)
}

// Insert element before node element
export const insert = (element, node) => {
  node.parentNode.insertBefore(element, node)
}
