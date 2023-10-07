function add(a: string, b: string): string;
function add(a: number, b: number): string;

function add(a: any, b: any): any {
  return a + b;
}

console.log(add(1, 2)); //3
console.log(add("1", "2")); // 12
