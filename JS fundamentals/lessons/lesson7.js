// Loops 

/* for(satement1; statement2; statement3) {
  statement1 - what we want to start from
  statement2 - what we want to end with
  statement3 - what we change each loop
} */

for (let i=0; i<5; i++) 
{
  console.log("Hello World!" + i)
}

var cars = ["Volvo", "Toyota", "Tesla"]
// for of loop
for (let car of cars) 
{
  console.log(car)
  if(car == "Toyota")
  {
    break
  }
}

// ES6 syntax forEach loop
cars.forEach(car => 
{
  console.log(car)
})