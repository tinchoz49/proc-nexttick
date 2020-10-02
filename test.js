const test = require('tape')
const nextTick = require('.')

test('basic', (t) => {
  t.plan(4)

  let called = false
  nextTick(() => {
    called = true
    t.ok(true, 'nextTick called')
    nextTick((arg1, arg2) => {
      t.equals(arg1, 0, 'first arg is 0')
      t.equals(arg2, 1, 'second arg is 1')
    }, 0, 1)
  })

  t.notOk(called)
})
