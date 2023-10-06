// unknown 타입

let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

let num: number = 10;
// num=unknownVar; 오류 발생
// unknownVar * 2; 오류 발생

if (typeof unknownVar === "number") {
  // 타입 좁히기
  unknownVar * 2;
}
