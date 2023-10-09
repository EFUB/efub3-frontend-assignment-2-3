// 함수 오버로딩

// 매개변수의 개수는 동일, 타입이 다른 경우
// 함수 선언
function add(a: string, b: string): string;
function add(a: number, b: number): number;

// 함수 구현
function add(a: any, b: any): any {
  return a + b;
}

// 함수 호출
console.log(add(1, 2)); // 3
console.log(add("1", "2")); // "12"

// 매개변수의 개수가 다르고, 타입이 같은 경우
// 함수 선언
function add2(a: number): number;
function add2(a: number, b: number): number;
function add2(a: number, b: number, c: number): number;

// 함수 구현
function add2(a: number, b?: number, c?: number): number {
  return a + (b ?? 0) + (c ?? 0);
}

// 함수 호출
console.log(add2(1)); // 1
console.log(add2(1, 2)); // 3
console.log(add2(1, 2, 3)); // 6

// 매개변수의 개수와 타입이 모두 다른 경우
// 함수 선언
function printConsole(a: number): void;
function printConsole(a: string): void;
function printConsole(a: number, b: string): void;
function printConsole(a: string, b: number): void;

// 함수 구현
function printConsole(a: any, b?: any): void {
  console.log(a, b ?? "");
}

// 함수 호출
printConsole("1"); // 1
printConsole("1", 2); // 12
