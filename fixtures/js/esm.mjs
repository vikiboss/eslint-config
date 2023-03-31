import cjs from './cjs.cjs'

const demo = 1

console.log(demo)
;(() => {
  ;`${cjs.abc}456`.toUpperCase()
})()
