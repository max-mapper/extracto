var test = require('tape')
var tmp = require('temporary-directory')
var extract = require('./index.js')

test('extract tar', function (t) {
  tmp(function (err, dir, cleanup) {
    t.notOk(err, 'no err')
    
  })
})