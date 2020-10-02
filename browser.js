const supportMicrotask = typeof queueMicrotask !== 'undefined'
const supportNextTick = typeof process !== 'undefined' && process.nextTick

function nextTick (handler, ...args) {
  if (supportMicrotask) {
    queueMicrotask(() => handler(...args))
    return
  }

  if (supportNextTick) return process.nextTick(...args)

  Promise.resolve()
    .then(() => handler(...args))
    .catch(err => setTimeout(() => { throw err }, 0))
}

module.exports = nextTick
