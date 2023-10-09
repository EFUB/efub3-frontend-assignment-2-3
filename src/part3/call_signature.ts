// 호출 시그니처

// 미리 함수 타입 지정
let myFunc: (arg1: number, arg2: number) => number;
myFunc = function (x, y) {
  return x + y;
}; // 함수식에 타입을 쓰지 않아도 됨

// type 생성자
type funType = (arg1: number, arg2: number) => number;

let sum: funType = (x, y) => {
  return x + y;
};

let prod: funType = (x, y) => {
  return x * y;
};
