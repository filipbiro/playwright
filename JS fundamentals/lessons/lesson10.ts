// typescript locks variables into certain type

var customerFirstName: string = "John"
var customerLastName = "Smith"
var customerAge = 25

type Customer = {firstName: string, lastName: string, active: boolean}

var firstCustomer: Customer =
{
  firstName: "Mary",
  lastName: "Johns",
  active: true
}