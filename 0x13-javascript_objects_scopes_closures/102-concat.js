#!/usr/bin/node
const fs = require('fs');
const a = fs.readFileSync(process.argv[1], 'null');
const b = fs.readFileSync(process.argv[2], 'null');
fs.writeFileSync(process.argv[3], a + b);
