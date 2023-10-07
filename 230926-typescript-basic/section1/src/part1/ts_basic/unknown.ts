// unknown 타입
let unknownVar: unknown;
unknownVar = '';
unknownVar = 1;
unknownVar = () => {};
let num: number = 10;
//num = unknownVar; // 오류
//unknownVar * 2; // 오류

if (typeof unknownVar === 'number') {
  // 이 조건이 참이 된다면 unknownVar는 number 타입으로 볼 수 있음
  unknownVar * 2;
}
