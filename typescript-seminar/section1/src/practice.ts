// function sum(a: number, b?: number, c?: number): number {
//   return a + (b ?? 0) + (c ?? 0);
// }

// 함수 호출 시그니처 - 미리 함수의 타입 지정
// let sum: (a: number, b?: number, c?: number) => number;
// sum = function (a, b, c) {
//   return a + (b ?? 0) + (c ?? 0);
// };

// console.log(sum(10));
// console.log(sum(10, 20));

// 사용자 정의 타입 가드
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

const introduce = (): Developer | Person => {
  return { name: "Kim", age: 20, skill: "React" };
};

let kim = introduce();
/*
  kim을 매개변수로 받아 kim의 타입이 Developer인지 판단하는 사용자 정의 타입 가드 함수 isDeveloper를 작성하세요.
  */

const isDeveloper = (target: Developer | Person): target is Developer => {
  return (target as Developer).skill !== undefined;
};

if (isDeveloper(kim)) {
  console.log(kim.skill);
} else {
  console.log(kim.age);
}

// 오류가 발생하지 않도록
// 함수 타입을 지정하는 인터페이스 Sum을 작성하세요

interface Sum {
  (a: number, b: number): number;
}

const sum: Sum = (a, b) => {
  return a + b;
};

console.log(sum(1, 2));

// 아래 오류가 발생하지 않도록
// Person 인터페이스를 상속받고, phone 프로퍼티를 추가한 인터페이스 Me를 선언하세요.
interface Person {
  name: string;
  age: number;
}

interface Me extends Person {
  phone: string;
}

const me: Me = {
  name: "minjung",
  age: 24,
  phone: "010-1234-1234",
};
