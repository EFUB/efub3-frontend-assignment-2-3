type myFunc = (arg1: number, arg2: number) => number;

let sum: myFunc = (x, y) => {
  return x + y;
};
// 미리 타입 지정했기 떄문에 함수식에 타입 쓰지 않아도 된다.
