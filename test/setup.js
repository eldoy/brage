const body = () => {
  return document.body.innerHTML
}

const reset = () => {
  document.body.innerHTML = ''
}

module.exports = { body, reset }
