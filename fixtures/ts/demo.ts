import fs from 'node:fs'
import a from './demo2'

import type { Test } from './demo2'

const demo = require('./demo2')

type Demo = Test

function test() {
  a()
  demo()
  const num: Demo = 3
  const obj = <Demo>1
  fs.writeFileSync('demo.txt', 'demo')
  return [1, 2, num].map(e => e + 1)
}

export default test
