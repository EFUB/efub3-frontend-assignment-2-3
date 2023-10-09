function add(a: number): number;
function add(a: number, b: number): number;
function add(a: number, b: number, c: number): number;

function add(a: number, b?: number, c?: number): number {
  return a + (b ?? 0) + (c ?? 0);
}

console.log(add(10));
console.log(add(10, 20));
console.log(add(10, 30, 20));
