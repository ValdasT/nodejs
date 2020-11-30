
'use strict'
const { watch, statSync } = require('fs')

watch('.', (evt, filename) => {
    const stat = statSync(filename)
    const typeLabel = stat.isDirectory() ? 'dir' : 'file'
    if (typeLabel === 'dir') {
        console.log(`${stat.size} ${filename}`);
    }
})