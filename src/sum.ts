// 실습 - 1번
const sum1 = (a: number, b: number): number => {
  return a + b;
};

console.log(sum1(1, 2));

// 실습 - 2번
const sum2 = (a: number, b?: number, c?: number): number => {
  return a + (b ?? 0) + (c ?? 0);
};

console.log(sum2(10));
console.log(sum2(10, 20));
console.log(sum2(10, 20, 30));

// 실습 - 3번
let sum3: (a: number, b?: number, c?: number) => number;

sum3 = function (a, b, c) {
  return a + (b ?? 0) + (c ?? 0);
};

console.log(sum3(10));
console.log(sum3(10, 20));
console.log(sum3(10, 20, 30));

// 실습 - 4번
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

const isDeveloper = (target: Developer | Person): target is Developer => {
  return (target as Developer).skill !== undefined;
};

// 실습 5번
interface Sum {
  (a: number, b: number): number;
}

const sum4: Sum = (a, b) => {
  return a + b;
};

console.log(sum4(1, 2));

// 실습
interface Person {
  name: string;
  age: number;
}

interface Me extends Person {
  phone: string;
}

const me: Me = {
  name: "jimin",
  age: 23,
  phone: "010-xxxx-xxxx",
};
