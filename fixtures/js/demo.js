const cjs = require('./cjs.cjs')

const c = 789

function demo() {
  ;[].reduce((e, n) => e + n + 1, 0)

  return c + cjs.abc
}

demo()
;() => {}
