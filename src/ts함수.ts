//3가지의 타입을 정의
//1. 함수의 파라미터 타입
//2. 함수의 반환 타입
//3. 함수의 구조 타입
const sum = (a: number, b: number): number => {
  return a + b;
};

// 함수의 인자 : 선택적 매개변수
function sendMessage(message: string, userName?: string) {
  console.log(`${message}, ${userName}`);
}
sendMessage("hi");

//매개변수 기본값
function sendMessage2(message: string, userName: string = "EFUB") {
  console.log(`${message}, ${userName}`);
}
sendMessage("hi");

//호출 시그니처
//미리 함수의 타입을 지정함
//화살표 함수와 구분 할것
let myFunc4: (arg1: number, arg2: number) => number;
myFunc4 = function (x, y) {
  return x + y;
};

//type 생성자와 함께 사용
type funType = (arg1: number, number2: number) => number;
let minus: funType = (x, y) => {
  return x - y;
};

//함수 호환성
//매개변수와 반환값을 기준으로 호환성 판단
type A = () => number;
type B = () => 1;
let aa: A = () => 1;
let bb: B = () => 1;
aa = bb;
//bb = aa; ❌

//함수 오버로딩
//function 함수로만 가능하고 화살표 함수로는 불가능

//함수 선언
function addFunc(a: string, b: string): string;
function addFunc(a: number, b: number): number;

//함수 구현
function addFunc(a: any, b: any): any {
  return a + b;
}

function add(a: number, b?: number, c?: number): number {
  return a + (b ?? 0) + (c ?? 0);
}
console.log(add(1, 2));

//사용자 정의 타입 가드
interface IDeveloper {
  name: string;
  skill: string;
}

interface IPerson {
  name: string;
  age: number;
}

const introduce = (): IDeveloper | IPerson => {
  return { name: "Kim", age: 20, skill: "React" };
};

let kim = introduce();
/*
kim을 매개변수로 받아 kim의 타입이 Developer인지 판단하는 사용자 정의 타입 가드 함수 isDeveloper를 작성하세요.
*/
//skill이 있다면 target의 타입을 IDEveloper로 판단함.
const isDeveloper = (target: IDeveloper | IPerson): target is IDeveloper => {
  return (target as IDeveloper).skill !== undefined;
};

if (isDeveloper(kim)) {
  console.log(kim.skill); //developer
} else {
  console.log(kim.age); //person
}
