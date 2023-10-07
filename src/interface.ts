interface Bird {
  fly();
  layEggs();
}

interface Fish {
  swim();
  layEggs();
}

//사용자 정의 타입 가드
// function isFish(pet : Fish | Bird) : pet is Fish{
//   return (pet is Fish).swim !== undefined;
// }

// if (isFish(pet)) {
//   pet.swim();
// }

//optional
interface TestType {
  test: string;
  test2?: number;
}

let testProps = {
  test: "ttt",
};

function testFunc(params: TestType) {
  console.log(params.test);
}

//인터페이스
interface test {
  [key: string]: number;
}

const test12: test = { anyone: 23, ddd: 22 };

//함수타입
interface test2 {
  (test1: string, test2: string): string;
}

//인터페이스 하이브리드 타입
interface IPerson {
  name: string;
}
interface Developer extends IPerson {
  skill: string;
}
interface FrontEndDeveloper extends Developer {
  stack: string;
}
let developer = {} as FrontEndDeveloper;
developer.name = "rin";
developer.skill = "javascript";
developer.stack = "react";

//인터페이스는 '선언적 확장'이 가능
