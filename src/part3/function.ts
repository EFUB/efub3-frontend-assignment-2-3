// 함수의 기본적인 타입 선언
function sum(a: number, b: number): number {
  return a + b;
}

console.log(sum(1, 3));

// 함수의 인자는 모두 필수 값 -> 정의된 매개변수 값만 받을 수 있음

// 선택적 매개변수
function sendMessage(message: string, userName?: string): void {
  console.log(`${message}, ${userName}`);
}
sendMessage("hi"); // hi, undefined
sendMessage("hi", "user"); // hi, user

// 매개변수 초기화
function sendMessage2(message: string, userName: string = "EFUB"): void {
  console.log(`${message}, ${userName}`);
}
sendMessage("hi"); // hi, EFUB
sendMessage("hi", "user"); // hi, user

// 함수의 표현 방법
// 함수 선언식
function myFunc1(x: number, y: number): number {
  return x * y;
}

// 함수 표현식
let myFunc2 = function (x: number, y: number): number {
  return x * y;
};

// 화살표 함수
let myFunc3 = (x: number, y: number): number => {
  return x * y;
};
