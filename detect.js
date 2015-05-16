var bufferEquals = require("buffer-equals")

var magicNumbers = {
  zip: new Buffer("504B0304", "hex"),
  tar: new Buffer("7573746172", "hex"),
  targz: new Buffer("1F8B08", "hex"),
  bz2: new Buffer("425A68", "hex")
}

module.exports = {
  zip: isZip,
  tar: isTar,
  targz: isTarGz
}

function isZip (data) {
  return bufferEquals(data.slice(0, 4), magicNumbers.zip)
}

function isTar (data) {
  return bufferEquals(data.slice(257, 262), magicNumbers.tar)
}

function isTarGz (data) {
  return bufferEquals(data.slice(0, 3), magicNumbers.targz)
}
