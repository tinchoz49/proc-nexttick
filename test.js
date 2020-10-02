const test = require('tape')
const nextTick = require('.')

test('basic', (t) => {
  let called = false
  nextTick(() => {
    called = true
    t.ok(true, 'nextTick called')
    t.end()
  })

  t.notOk(called)
})
