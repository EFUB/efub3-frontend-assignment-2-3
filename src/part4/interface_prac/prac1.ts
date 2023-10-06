// 실습-인터페이스(1)

interface Sum {
  (a: number, b: number): number;
}
const sum: Sum = (a, b) => {
  return a + b;
};

console.log(sum(1, 2));
