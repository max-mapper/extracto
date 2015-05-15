#!/usr/bin/env node

var extracto = require('./index.js')

process.stdin.pipe(extracto())