import { masses } from "./input.js";

// part - 1

const calculateFuelForMasses = (givenMasses) => {
  const requiredFuelMasses = givenMasses.map(
    (mass) => Math.floor(mass / 3) - 2
  );

  const totalRequiredFuel = requiredFuelMasses.reduce(
    (total, fuel) => total + fuel,
    0
  );

  return totalRequiredFuel;
};

console.log(calculateFuelForMasses(masses));

//part - 2

const calculateFuelForFuel = (mass, initialFuel = 0) => {
  const requiredFuel = Math.floor(mass / 3) - 2;

  if (requiredFuel < 1) {
    return initialFuel;
  }

  return calculateFuelForFuel(requiredFuel, initialFuel + requiredFuel);
};

const calculateAllFuelForFuel = (givenMasses) => {
  return givenMasses
    .map((mass) => calculateFuelForFuel(mass))
    .reduce((total, fuel) => total + fuel, 0);
};

console.log(calculateAllFuelForFuel(masses));
