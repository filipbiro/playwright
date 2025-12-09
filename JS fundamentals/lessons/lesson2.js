// Concatination and INTERPOLATION
var price = 50
var itemName = "Cup"

// 1. Concatination
var messageToPrint = "The price for your" + itemName + " is " + price + " dollars."
console.log(messageToPrint)

// 2. Interpolation
var messageToPrint2 = `The price for your ${itemName} is ${price} dollars.`
console.log(messageToPrint2)