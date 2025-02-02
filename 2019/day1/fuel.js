import { masses } from "./input.js";

// part - 1

const calculateFuel = (givenMasses) =>
  givenMasses
    .map((mass) => Math.floor(mass / 3) - 2)
    .reduce((total, fuel) => total + fuel, 0);

console.log(calculateFuel(masses));

//part - 2

const calculateFuelForMass = (mass, initialFuel = 0) => {
  const requiredFuel = Math.floor(mass / 3) - 2;

  if (requiredFuel < 1) {
    return initialFuel;
  }

  return calculateFuelForMass(requiredFuel, initialFuel + requiredFuel);
};

const calculateAllFuelForFuel = (givenMasses) =>
  givenMasses
    .map((mass) => calculateFuelForMass(mass))
    .reduce((total, fuel) => total + fuel, 0);

console.log(calculateAllFuelForFuel(masses));
