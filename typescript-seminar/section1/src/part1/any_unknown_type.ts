// Any 타입
// 타입 검사를 받지 않는 특수한 치트키 타입

let anyVar: any = 10;
anyVar = "hello";
anyVar = true;
anyVar = {};
anyVar.toUpperCase();
anyVar.toFixed();
anyVar.a;

let num: number = 10;
num = anyVar;

// unknown 타입
// unknown 타입의 변수는 어떤 타입의 값이든 다 저장
// 반대로 unknown 타입의 값은 그 어떤 타입의 변수에도 할당할 수 없고, 모든 연산에 참가할 수 없음
// 쉽게 정리하면 오직 값을 저장하는 행위만 가능

let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};
let num2: number = 10;
//num2 = unknownVar; // 오류
//unknownVar * 2; // 오류

if (typeof unknownVar === "number") {
  // 이 조건이 참이 된다면 unknownVar는 number 타입으로 볼 수 있음
  unknownVar * 2;
}
