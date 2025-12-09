var familySize = 2
var plannedDistanceToDrive = 100

function recommendCar(familySize: number, plannedDistanceToDrive: number)
{
  if (familySize <= 4 && plannedDistanceToDrive < 200)
  {
    return "Tesla"
  }
  else if (familySize <= 4 && plannedDistanceToDrive >= 200)
  {
    return "Toyota"
  }
  else
  {
    return "Minivan"
  }
}

console.log(recommendCar(familySize, plannedDistanceToDrive))