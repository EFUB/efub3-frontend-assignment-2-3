// 함수 호환성
// 매개변수와 반환값을 기준으로 판단

// 매개변수 개수가 같을 경우
type A = (x: number) => number;
type B = (x: 1) => number;

let a: A = (x) => x + 1;
let b: B = (x) => x + 1;

// a = b; 오류
b = a;

// 매개변수의 개수가 다를 경우
type C = (x: number, y: number) => number;
type D = (x: number) => number;

let c: C = (x, y) => x + y;
let d: D = (x) => x + 1;

c = d;
//d = c; 오류

// 매개변수와 반환값을 기준으로 호환성 판단
type E = () => number;
type F = () => 1;

let e: E = () => 1;
let f: F = () => 1;

e = f;
//f = e; 오류
