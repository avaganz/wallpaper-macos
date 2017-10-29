const macOSSpaceChange = require('macos-space-change')
const wallpaper = require('./lib/wallpaper')

let currentFile
let setOnSpaceChange = false

function handleSpaceChange() {

  if (setOnSpaceChange && currentFile) {
    wallpaper.set(currentFile)
  }

}

module.exports.setOnCurrentSpace = function (file) {

  wallpaper.set(file)

}

module.exports.setOnAllSpaces = function (file) {

  setOnSpaceChange = true
  currentFile = file
  wallpaper.set(file)

}

macOSSpaceChange.onSpaceChange(handleSpaceChange)
