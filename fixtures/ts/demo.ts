import fs from 'node:fs';
import a from './demo2';

import type { Test } from './demo2';

const demo = require('./demo2');

type Demo = Test;

function test() {
  a();
  return [1, 2, 3].map((e) => e + 1);
}

export default test;
