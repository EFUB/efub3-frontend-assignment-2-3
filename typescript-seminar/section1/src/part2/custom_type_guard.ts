// 사용자 정의 타입 가드 함수

// interface Bird {
//     fly();
//     layEggs();
//   }

//   interface Fish {
//     swim();
//     layEggs();
//   }

//   function getSmallPet(): Fish | Bird {}

//   let pet = getSmallPet();
//   pet.layEggs(); // 성공
//   pet.swim(); // 오류

//   if (pet.swim) {
//     pet.swim(); // 오류
//   } else if (pet.fly) {
//     pet.fly(); // 오류
//   }

//   if ((pet as Fish).swim) {
//     (pet as Fish).swim();
//   } else if ((pet as Bird).fly) {
//     (pet as Bird).fly();
//   }

//   function isFish(pet: Fish | Bird): pet is Fish {
//     return (pet as Fish).swim !== undefined;
//   }

//   if (isFish(pet)) {
//     pet.swim();
//   } else {
//     pet.fly();
//   }
