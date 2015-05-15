var tar = require('tar-fs')
var zip = require('extract-zip')
var gunzip = require('gunzip-maybe')
var through = require('through2')
var peek = require('peek-stream')
var pump = require('pump')
var detect = require('./detect.js')
 
module.exports = function (opts) {
  return detectFormat()
}

function detectFormat () {
  // peek first 262 bytes for magic number (thats where tar magic number ends)
  return peek(262, function(data, swap) {
    if (detect.zip(data)) return swap(null, parsers.zip())
    if (detect.tar(data)) return swap(null, parsers.tar())
    if (detect.targz(data)) return swap(null, parsers.targz())
    swap(new Error('No parser available'))
  })
}

var parsers = {
  zip: function zip () {
    console.log('ZIP')
  },
  tar: function tar () {
    console.log('TAR')
  },
  targz: function targz () {
    console.log('TARGZ')
  }
}
