const fs = require('node:fs')
const path = require('node:path')

fs.writeFileSync(path.join(__dirname, 'demo.md'), '# demo')
