var colorutil = require('./colorutil.js')

var red = process.argv[2]

var blue = process.argv [3]

var green = process.argv[4]

var luminosity = colorutil.luminosity(red,blue,green)

console.log(luminosity)

//leaving off at #4