interface Bird {
  fly();
  layEggs();
}

interface Fish {
  swim();
  layEggs();
}

function getSmallPet(): Fish | Bird {}

let pet = getSmallPet();
pet.layEggs();
pet.swim();
if (pet.swim) {
  pet.swim();
} else if (pet.fly) {
  pet.fly();
}

if ((pet as Fish).swim) {
  (pet as Fish).swim();
} else if ((pet as Bird).fly) {
  (pet as Bird).fly();
}

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}
