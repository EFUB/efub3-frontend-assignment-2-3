// 실습-함수(3)

let sum1: (a: number, b?: number, c?: number) => number;

sum1 = function (a: any, b?: any, c?: any) {
  return a + (b ?? 0) + (c ?? 0);
};

console.log(sum1(10));
console.log(sum1(10, 20));
console.log(sum1(10, 20, 30));
