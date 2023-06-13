#!/usr/bin/env node
'use strict';

const fs = require('fs');

const file1Contents = fs.readFileSync(process.argv[2], 'utf8').toString();
const file2Contents = fs.readFileSync(process.argv[3], 'utf8').toString();
fs.writeFileSync(process.argv[4], file1Contents + file2Contents, 'utf8');
