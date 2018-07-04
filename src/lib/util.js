const util = {}

// Binds the object instance functions to itself
util.autobind = (obj) => {
  const prototype = Object.getPrototypeOf(obj)
  const props = Object.getOwnPropertyNames(prototype)
  for (const name of props) {
    const value = prototype[name]
    if (typeof value === 'function') {
      obj[name] = prototype[name].bind(obj)
    }
  }
}

export default util
