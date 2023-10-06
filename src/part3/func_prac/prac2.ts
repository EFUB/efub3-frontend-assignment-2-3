// 실습-함수(2)

function sum(x: number, y?: number, z?: number): number {
  return x + (y ?? 0) + (z ?? 0);
}

console.log(sum(10));
console.log(sum(10, 20));
console.log(sum(10, 20, 30));
