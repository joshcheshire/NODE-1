var red = process.argv[2]

var green = process.argv[3]

var blue = process.argv[4]

console.log(red,green,blue)

var getLuminosity =  (0.2126*red + 0.7152*green + 0.0722*blue)

console.log(getLuminosity)

// if (luminosity > 155){
// 	console.log('light')}

// 	else{

// 		console.log('dark')
	
// }